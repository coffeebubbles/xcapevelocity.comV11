export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      consultation_slots: {
        Row: {
          id: string
          date: string
          time: string
          is_blocked: boolean
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          date: string
          time: string
          is_blocked?: boolean
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          date?: string
          time?: string
          is_blocked?: boolean
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
      consultation_bookings: {
        Row: {
          id: string
          slot_id: string
          client_id: string
          agency_id: string | null
          status: 'pending' | 'confirmed' | 'cancelled'
          agenda: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slot_id: string
          client_id: string
          agency_id?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled'
          agenda?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slot_id?: string
          client_id?: string
          agency_id?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled'
          agenda?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      user_profiles: {
        Row: {
          id: string
          user_id: string
          role: 'super_admin' | 'agency' | 'client'
          company_name: string | null
          agency_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          role?: 'super_admin' | 'agency' | 'client'
          company_name?: string | null
          agency_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          role?: 'super_admin' | 'agency' | 'client'
          company_name?: string | null
          agency_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      get_started_requests: {
        Row: {
          id: string
          business_type: string
          needs: string[]
          budget: string
          timeline: string
          name: string
          email: string
          phone: string
          message: string
          agreed_to_receive_communications: boolean
          created_at: string
        }
        Insert: {
          id?: string
          business_type: string
          needs: string[]
          budget: string
          timeline: string
          name: string
          email: string
          phone: string
          message: string
          agreed_to_receive_communications?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          business_type?: string
          needs?: string[]
          budget?: string
          timeline?: string
          name?: string
          email?: string
          phone?: string
          message?: string
          agreed_to_receive_communications?: boolean
          created_at?: string
        }
      }
    }
  }
}
