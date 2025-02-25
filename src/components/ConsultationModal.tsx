import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MessageSquare, Video, Building, Globe } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { useConsultationStore } from '../stores/consultationStore';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { profile } = useAuthStore();
  const { createBooking } = useConsultationStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: profile?.company_name || '',
    teamSize: '',
    consultationType: 'video',
    preferredDate: '',
    preferredTime: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    agenda: ''
  });

  if (!isOpen) return null;

  // Define available time slots (9 AM to 5 PM with 30-minute intervals)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      for (let minute of [0, 30]) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Convert time to user's timezone
  const convertToLocalTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: formData.timezone
    });
  };

  // Convert local time back to UTC
  const convertToUTC = (time: string) => {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'UTC'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!profile) throw new Error('User profile not found');

      const utcTime = convertToUTC(formData.preferredTime);
      
      await createBooking(formData.preferredDate, utcTime, formData.agenda);
      onClose();
    } catch (error) {
      console.error('Error booking consultation:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto">
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <div className="bg-[#111111] rounded-3xl p-8 max-w-2xl w-full mx-4 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Schedule Consultation</h2>
            <p className="text-gray-400">
              Book a consultation with our AI automation experts
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" data-netlify="true">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-black border border-gray-800 rounded-xl px-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-black border border-gray-800 rounded-xl px-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full bg-black border border-gray-800 rounded-xl px-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-gray-400 mb-2">
                  Team Size
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    id="teamSize"
                    value={formData.teamSize}
                    onChange={(e) => setFormData(prev => ({ ...prev, teamSize: e.target.value }))}
                    className="w-full bg-black border border-gray-800 rounded-xl px-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent appearance-none"
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201+">201+ employees</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Consultation Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, consultationType: 'video' }))}
                  className={`flex items-center gap-2 p-4 rounded-xl transition-all ${
                    formData.consultationType === 'video'
                      ? 'bg-[#FFD700] text-black'
                      : 'bg-black text-white hover:bg-white/10'
                  }`}
                >
                  <Video className="w-5 h-5" />
                  Video Call
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, consultationType: 'inPerson' }))}
                  className={`flex items-center gap-2 p-4 rounded-xl transition-all ${
                    formData.consultationType === 'inPerson'
                      ? 'bg-[#FFD700] text-black'
                      : 'bg-black text-white hover:bg-white/10'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  In Person
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Timezone *
                </label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    id="timezone"
                    required
                    value={formData.timezone}
                    onChange={(e) => setFormData(prev => ({ ...prev, timezone: e.target.value }))}
                    className="w-full bg-black border border-gray-800 rounded-xl px-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent appearance-none"
                  >
                    {Intl.supportedValuesOf('timeZone').map((tz) => (
                      <option key={tz} value={tz}>
                        {tz.replace(/_/g, ' ')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-400 mb-2">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    id="preferredDate"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                    className="w-full bg-black border border-gray-800 rounded-xl px-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-400 mb-2">
                Preferred Time * (Your Local Time)
              </label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  id="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent appearance-none"
                >
                  <option value="">Select time slot</option>
                  {timeSlots.map((time) => {
                    const localTime = convertToLocalTime(time);
                    return (
                      <option key={time} value={localTime}>
                        {localTime}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="agenda" className="block text-sm font-medium text-gray-400 mb-2">
                Meeting Agenda
              </label>
              <textarea
                id="agenda"
                rows={4}
                value={formData.agenda}
                onChange={(e) => setFormData(prev => ({ ...prev, agenda: e.target.value }))}
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                placeholder="Tell us what you'd like to discuss..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="relative group w-full"
            >
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
                Schedule Consultation
                <Calendar className="w-5 h-5" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}