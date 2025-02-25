import React from 'react';
import { Settings, Workflow, Bot, GitMerge, BarChart, Clock } from 'lucide-react';

export function AutomationPage() {
  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-center mb-6 text-[#FFD700]">
          Automation Solutions
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Streamline your operations with intelligent automation that saves time and reduces errors
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16 sm:mb-24">
          {[
            {
              icon: Settings,
              title: "Process Automation",
              description: "Automate repetitive tasks and workflows to increase efficiency and reduce manual effort."
            },
            {
              icon: Workflow,
              title: "Workflow Optimization",
              description: "Analyze and optimize your business processes for maximum productivity."
            },
            {
              icon: Bot,
              title: "Robotic Process Automation",
              description: "Implement software robots to handle routine operations with precision."
            },
            {
              icon: GitMerge,
              title: "System Integration",
              description: "Connect and synchronize your various business systems for seamless operation."
            },
            {
              icon: BarChart,
              title: "Performance Analytics",
              description: "Track and analyze automation performance with detailed metrics and insights."
            },
            {
              icon: Clock,
              title: "Time Optimization",
              description: "Reduce processing times and accelerate business operations through automation."
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Transform Your Operations</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Discover how our automation solutions can help you achieve operational excellence and drive business growth.
            </p>
            <button className="relative group inline-flex">
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg">
                Get Started
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}