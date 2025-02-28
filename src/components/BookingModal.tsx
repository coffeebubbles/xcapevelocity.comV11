import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';

// Extend the global Window interface so TypeScript recognizes window.Calendly.
declare global {
  interface Window {
    Calendly: any;
  }
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: string;
    duration: string;
    example: {
      title: string;
      description: string;
    };
  };
}

export function BookingModal({ isOpen, onClose, plan }: BookingModalProps) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/xcapevelocity-sales/30min',
        parentElement: document.getElementById('calendly-embed')
      });
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');
    setStatusType('');

    const makeWebhookUrl = 'https://hook.us1.make.com/YOUR-WEBHOOK-URL';

    try {
      const { error: supabaseError } = await supabase.from('bookings').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          team_size: formData.teamSize,
          message: formData.message,
          calendly_event_id: null
        }
      ]);
      if (supabaseError) {
        throw new Error('Failed to save booking to database.');
      }

      const response = await fetch(makeWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to send data to Make.com.');
      }

      setStatusMessage('✅ Booking confirmed!');
      setStatusType('success');

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        teamSize: '',
        message: ''
      });

      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error: any) {
      setStatusMessage(`❌ ${error.message}`);
      setStatusType('error');
    }
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

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
            <h2 className="text-2xl font-bold text-white mb-2">
              Book {plan.name} Session
            </h2>
            <p className="text-gray-400">
              Schedule your personalized training session with our AI automation experts
            </p>
            <div className="mt-4 flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {plan.duration}
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                {plan.example.title}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData(prev => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  placeholder="+44 (0) 1223 000 000"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData(prev => ({ ...prev, company: e.target.value }))
                  }
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label htmlFor="teamSize" className="block text-sm font-medium text-gray-400 mb-2">
                Budget Range
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  id="teamSize"
                  value={formData.teamSize}
                  onChange={(e) =>
                    setFormData(prev => ({ ...prev, teamSize: e.target.value }))
                  }
                  className="w-full bg-black border border-gray-800 rounded-xl px-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent appearance-none"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">£5,000 - £10,000</option>
                  <option value="10k-25k">£10,000 - £25,000</option>
                  <option value="25k-50k">£25,000 - £50,000</option>
                  <option value="50k+">£50,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData(prev => ({ ...prev, message: e.target.value }))
                }
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                placeholder="Tell us about your specific needs or any questions you have..."
              ></textarea>
            </div>

            <div className="mb-6">
              <div id="calendly-embed" style={{ minWidth: '320px', height: '700px' }}></div>
            </div>

            {statusMessage && (
              <div
                className={`p-3 rounded-xl text-center ${
                  statusType === 'success' ? 'bg-green-600' : 'bg-red-600'
                }`}
              >
                {statusMessage}
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className="relative group w-full">
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
                {isSubmitting ? 'Submitting...' : 'Complete Booking'}
                <Calendar className="w-5 h-5" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
