import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, X, ChevronLeft, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import { useConsultationStore } from '../stores/consultationStore';

interface ConsultationDiaryProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationDiary({ isOpen, onClose }: ConsultationDiaryProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { slots, isLoading, error, loadSlots, blockSlot, unblockSlot } = useConsultationStore();

  useEffect(() => {
    if (isOpen) {
      const startDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
      const endDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
      loadSlots(
        startDate.toISOString().split('T')[0],
        endDate.toISOString().split('T')[0]
      );
    }
  }, [isOpen, selectedDate]);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();

  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
  };

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const isSlotBlocked = (date: string, time: string) => {
    return slots.some(slot => 
      slot.date === date && 
      slot.time === time && 
      slot.is_blocked
    );
  };

  const getSlotId = (date: string, time: string) => {
    const slot = slots.find(s => s.date === date && s.time === time);
    return slot?.id;
  };

  const toggleTimeSlot = async (date: string, time: string) => {
    const slotId = getSlotId(date, time);
    if (slotId) {
      await unblockSlot(slotId);
    } else {
      await blockSlot(date, time);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto">
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <div className="bg-[#111111] rounded-3xl p-8 max-w-5xl w-full mx-4 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Consultation Calendar</h2>
            <p className="text-gray-400">
              Manage available consultation slots by blocking out times that are not available
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 text-red-500 p-4 rounded-xl flex items-center gap-2 mb-6">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-[#FFD700] animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendar */}
              <div className="bg-black/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={handlePrevMonth}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <h3 className="text-white font-medium">
                    {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </h3>
                  <button
                    onClick={handleNextMonth}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm text-gray-400">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                    <div key={`empty-${index}`} className="p-2" />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1;
                    const date = formatDate(
                      selectedDate.getFullYear(),
                      selectedDate.getMonth(),
                      day
                    );
                    const hasBlockedSlots = slots.some(slot => 
                      slot.date === date && slot.is_blocked
                    );

                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
                        className={`p-2 rounded-lg text-center transition-colors ${
                          selectedDate.getDate() === day
                            ? 'bg-[#FFD700] text-black'
                            : hasBlockedSlots
                            ? 'bg-red-500/20 text-red-500'
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="bg-black/50 rounded-2xl p-6">
                <h3 className="text-white font-medium mb-6 flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  {selectedDate.toLocaleDateString('default', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {timeSlots.map(time => {
                    const date = formatDate(
                      selectedDate.getFullYear(),
                      selectedDate.getMonth(),
                      selectedDate.getDate()
                    );
                    const blocked = isSlotBlocked(date, time);

                    return (
                      <button
                        key={time}
                        onClick={() => toggleTimeSlot(date, time)}
                        className={`flex items-center gap-2 p-4 rounded-xl transition-all ${
                          blocked
                            ? 'bg-red-500/20 text-red-500'
                            : 'bg-[#222222] text-white hover:bg-[#333333]'
                        }`}
                      >
                        <Clock className="w-4 h-4" />
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}