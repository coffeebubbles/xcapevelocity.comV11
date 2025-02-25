import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { Database } from '../lib/database.types';

type ConsultationSlot = Database['public']['Tables']['consultation_slots']['Row'];
type ConsultationBooking = Database['public']['Tables']['consultation_bookings']['Row'];

interface ConsultationState {
  slots: ConsultationSlot[];
  bookings: ConsultationBooking[];
  isLoading: boolean;
  error: string | null;
  loadSlots: (startDate: string, endDate: string) => Promise<void>;
  loadBookings: () => Promise<void>;
  blockSlot: (date: string, time: string) => Promise<void>;
  unblockSlot: (slotId: string) => Promise<void>;
  createBooking: (date: string, time: string, agenda: string) => Promise<void>;
  updateBookingStatus: (bookingId: string, status: 'confirmed' | 'cancelled') => Promise<void>;
}

export const useConsultationStore = create<ConsultationState>((set, get) => ({
  slots: [],
  bookings: [],
  isLoading: false,
  error: null,

  loadSlots: async (startDate: string, endDate: string) => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('consultation_slots')
        .select('*')
        .gte('date', startDate)
        .lte('date', endDate)
        .order('date', { ascending: true })
        .order('time', { ascending: true });

      if (error) throw error;
      set({ slots: data || [], isLoading: false });
    } catch (error) {
      console.error('Error loading slots:', error);
      set({ error: 'Failed to load consultation slots', isLoading: false });
    }
  },

  loadBookings: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('consultation_bookings')
        .select(`
          *,
          slot:consultation_slots(date, time),
          client:user_profiles!client_id(company_name),
          agency:user_profiles!agency_id(company_name)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ bookings: data || [], isLoading: false });
    } catch (error) {
      console.error('Error loading bookings:', error);
      set({ error: 'Failed to load consultation bookings', isLoading: false });
    }
  },

  blockSlot: async (date: string, time: string) => {
    set({ isLoading: true, error: null });
    try {
      // First get the user's profile
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;
      if (!userData.user) throw new Error('Not authenticated');

      // Then get the profile ID
      const { data: profiles, error: profileError } = await supabase
        .from('user_profiles')
        .select('id')
        .eq('user_id', userData.user.id);

      if (profileError) throw profileError;
      if (!profiles || profiles.length === 0) throw new Error('Profile not found');

      const { error } = await supabase
        .from('consultation_slots')
        .insert({
          date,
          time,
          is_blocked: true,
          created_by: profiles[0].id
        });

      if (error) throw error;

      // Reload slots for the current date
      await get().loadSlots(date, date);
      set({ isLoading: false });
    } catch (error) {
      console.error('Error blocking slot:', error);
      set({ error: 'Failed to block consultation slot', isLoading: false });
    }
  },

  unblockSlot: async (slotId: string) => {
    set({ isLoading: true, error: null });
    try {
      const { error } = await supabase
        .from('consultation_slots')
        .delete()
        .eq('id', slotId);

      if (error) throw error;
      
      // Remove the slot from the local state
      const slots = get().slots.filter(slot => slot.id !== slotId);
      set({ slots, isLoading: false });
    } catch (error) {
      console.error('Error unblocking slot:', error);
      set({ error: 'Failed to unblock consultation slot', isLoading: false });
    }
  },

  createBooking: async (date: string, time: string, agenda: string) => {
    set({ isLoading: true, error: null });
    try {
      // Get the user's profile
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;
      if (!userData.user) throw new Error('Not authenticated');

      // Get the profile ID and agency ID
      const { data: profiles, error: profileError } = await supabase
        .from('user_profiles')
        .select('id, agency_id')
        .eq('user_id', userData.user.id);

      if (profileError) throw profileError;
      if (!profiles || profiles.length === 0) throw new Error('Profile not found');

      // Get or create the slot
      const { data: slots, error: slotError } = await supabase
        .from('consultation_slots')
        .select('id')
        .eq('date', date)
        .eq('time', time)
        .limit(1);

      if (slotError) throw slotError;

      let slotId;
      if (slots && slots.length > 0) {
        slotId = slots[0].id;
      } else {
        // Create a new slot if it doesn't exist
        const { data: newSlot, error: createSlotError } = await supabase
          .from('consultation_slots')
          .insert({
            date,
            time,
            is_blocked: false,
            created_by: profiles[0].id
          })
          .select()
          .single();

        if (createSlotError) throw createSlotError;
        if (!newSlot) throw new Error('Failed to create slot');
        slotId = newSlot.id;
      }

      // Create the booking
      const { error: bookingError } = await supabase
        .from('consultation_bookings')
        .insert({
          slot_id: slotId,
          client_id: profiles[0].id,
          agency_id: profiles[0].agency_id,
          agenda
        });

      if (bookingError) throw bookingError;
      await get().loadBookings();
      set({ isLoading: false });
    } catch (error) {
      console.error('Error creating booking:', error);
      set({ error: 'Failed to create consultation booking', isLoading: false });
    }
  },

  updateBookingStatus: async (bookingId: string, status: 'confirmed' | 'cancelled') => {
    set({ isLoading: true, error: null });
    try {
      const { error } = await supabase
        .from('consultation_bookings')
        .update({ status })
        .eq('id', bookingId);

      if (error) throw error;
      await get().loadBookings();
      set({ isLoading: false });
    } catch (error) {
      console.error('Error updating booking status:', error);
      set({ error: 'Failed to update booking status', isLoading: false });
    }
  }
}));