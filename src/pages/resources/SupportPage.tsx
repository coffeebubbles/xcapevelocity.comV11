import React from 'react';
import { MessageSquare, Phone, Mail, FileText, Clock, Users, Shield, Zap } from 'lucide-react';

export function SupportPage() {
  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-center mb-6 text-[#FFD700]">
          Support Center
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Get the help you need with our comprehensive support services
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16 sm:mb-24">
          {[
            {
              icon: MessageSquare,
              title: "Live Chat Support",
              description: "Get instant help from our support team",
              availability: "24/7 Support"
            },
            {
              icon: Phone,
              title: "Phone Support",
              description: "Speak directly with our experts",
              availability: "Mon-Fri, 9AM-6PM"
            },
            {
              icon: Mail,
              title: "Email Support",
              description: "Detailed assistance for complex issues",
              availability: "Response within 24h"
            }
          ].map((channel, index) => (
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
                      <channel.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{channel.title}</h3>
                <p className="text-gray-400 mb-4">{channel.description}</p>
                <div className="flex items-center gap-2 text-[#FFD700]">
                  <Clock className="w-4 h-4" />
                  {channel.availability}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#111111] rounded-3xl p-6 sm:p-12 mb-16 sm:mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {[
              {
                q: "How quickly can I get started?",
                a: "You can start using our basic features immediately after signing up. For custom solutions, we'll have you up and running within days."
              },
              {
                q: "What kind of support is included?",
                a: "All plans include 24/7 technical support, documentation access, and regular check-ins with our customer success team."
              },
              {
                q: "How secure is your platform?",
                a: "We maintain the highest security standards with end-to-end encryption, regular security audits, and compliance with industry regulations."
              },
              {
                q: "Can I upgrade my plan later?",
                a: "Yes, you can upgrade your plan at any time. Our team will help ensure a smooth transition with no service interruption."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-black/50 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-16 sm:mb-24">
          {[
            {
              icon: Users,
              title: "Dedicated Support",
              description: "Personal support team for enterprise clients"
            },
            {
              icon: Shield,
              title: "Priority Response",
              description: "Fast-track support for critical issues"
            },
            {
              icon: FileText,
              title: "Documentation",
              description: "Comprehensive guides and tutorials"
            },
            {
              icon: Zap,
              title: "Quick Resolution",
              description: "Most issues resolved within 24 hours"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#111111] rounded-3xl p-6 sm:p-8 text-center transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative mb-6 mx-auto w-16">
                <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
                <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#111111] rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Our team is ready to assist you with any questions or concerns you may have.
            </p>
            <button className="relative group inline-flex">
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg">
                Contact Support Team
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}