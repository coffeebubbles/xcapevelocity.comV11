import React from 'react';
import { X, Check } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    title: string;
    price: string;
    duration: string;
    level: string;
  };
}

export function EnrollmentModal({ isOpen, onClose, course }: EnrollmentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-[#111111] rounded-3xl p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Enroll in {course.title}</h2>
          <p className="text-gray-400">Complete your enrollment to get started with the course</p>
        </div>

        <div className="bg-black/50 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Course Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-400">
              <span>Duration:</span>
              <span className="text-white">{course.duration}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Level:</span>
              <span className="text-white">{course.level}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Price:</span>
              <span className="text-[#FFD700] font-bold">{course.price}</span>
            </div>
          </div>
        </div>

        <form netlify method="POST" name="Enrollment modal" className="space-y-6" data-netlify="true">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input type="checkbox" className="sr-only peer" 
              name="agreedToTermsAndConditionsAndPrivacyPolicy" />
                <div className="w-5 h-5 border-2 border-gray-600 rounded peer-checked:bg-[#FFD700] peer-checked:border-[#FFD700] transition-all"></div>
                <Check className="w-3 h-3 text-black absolute left-1 top-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-gray-300">
                I agree to the terms and conditions and privacy policy
              </span>
            </label>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="relative group flex-1"
            >
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-6 py-3 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg">
                Complete Enrollment
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}