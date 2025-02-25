import React, { useState } from 'react';
import { Users, Lightbulb, Target, PieChart, Compass, ArrowRight } from 'lucide-react';
import { GetStartedModal } from '../../components/GetStartedModal';

export function ConsultingPage() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-center mb-6 text-[#FFD700]">
          AI Consulting Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Expert guidance to help you navigate the AI landscape and make informed decisions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16 sm:mb-24">
          {[
            {
              icon: Users,
              title: "Strategic Planning",
              description: "Develop comprehensive AI strategies aligned with your business objectives."
            },
            {
              icon: Lightbulb,
              title: "Innovation Advisory",
              description: "Stay ahead with insights on emerging AI technologies and opportunities."
            },
            {
              icon: Target,
              title: "Implementation Planning",
              description: "Create detailed roadmaps for successful AI implementation."
            },
            {
              icon: PieChart,
              title: "ROI Analysis",
              description: "Evaluate and optimize the return on your AI investments."
            },
            {
              icon: Compass,
              title: "Technology Selection",
              description: "Choose the right AI technologies and tools for your needs."
            },
            {
              icon: ArrowRight,
              title: "Change Management",
              description: "Guide your organization through AI transformation successfully."
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#111111] rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
                    <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#111111] rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Start Your AI Journey</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Let our experts guide you through your AI transformation journey with personalized consulting services.
            </p>
            <button 
              onClick={() => setIsGetStartedOpen(true)}
              className="relative group inline-flex"
            >
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg">
                Book a Consultation
              </div>
            </button>
          </div>
        </div>
      </div>

      <GetStartedModal 
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />
    </section>
  );
}