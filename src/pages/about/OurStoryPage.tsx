import React from 'react';
import { Rocket, Zap, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OurStoryPage() {
  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-center mb-6 text-[#FFD700]">
          Empowering Startups with AI
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          We're on a mission to democratize AI technology, making it accessible and affordable for startups to accelerate their growth
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 mb-16 sm:mb-24">
          <div className="bg-[#111111] rounded-3xl p-6 sm:p-12">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
              <div className="relative bg-[#FFD700] w-16 sm:w-20 h-16 sm:h-20 rounded-2xl flex items-center justify-center">
                <Rocket className="w-8 sm:w-10 h-8 sm:h-10 text-black" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              We believe that every startup should have access to powerful AI tools without breaking the bank. Our team of experts is dedicated to helping young companies leverage cutting-edge technology to compete with industry giants.
            </p>
          </div>

          <div className="bg-[#111111] rounded-3xl p-6 sm:p-12">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
              <div className="relative bg-[#FFD700] w-16 sm:w-20 h-16 sm:h-20 rounded-2xl flex items-center justify-center">
                <Users className="w-8 sm:w-10 h-8 sm:h-10 text-black" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Who We Are</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              We're a team of AI specialists, engineers, and startup veterans who understand the challenges of scaling a business. We've been in your shoes and know how to use AI to overcome common growth obstacles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16 sm:mb-24">
          {[
            {
              icon: Zap,
              title: "Rapid Implementation",
              description: "Get your AI solutions up and running in days, not months. Our pre-built components and expertise accelerate your journey."
            },
            {
              icon: DollarSign,
              title: "Cost-Effective Solutions",
              description: "Access enterprise-grade AI capabilities at startup-friendly prices. Pay only for what you need and scale as you grow."
            },
            {
              icon: Users,
              title: "Expert Guidance",
              description: "Work directly with AI specialists who understand startup challenges and can help you make the most of your investment."
            }
          ].map((feature, index) => (
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
                      <feature.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#111111] rounded-3xl p-6 sm:p-12 mb-16 sm:mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">How We Help Startups Succeed</h2>
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "Affordable AI Integration",
                description: "Our modular approach lets you start small and scale up as needed, with transparent pricing and no hidden costs."
              },
              {
                title: "Quick Time to Market",
                description: "Launch AI-powered features in weeks using our pre-built components and streamlined implementation process."
              },
              {
                title: "Scalable Solutions",
                description: "Our solutions grow with your business, ensuring you never pay for more than you need while maintaining enterprise-grade quality."
              },
              {
                title: "Ongoing Support",
                description: "Get continuous guidance from our team of experts who help you optimize your AI implementation for maximum ROI."
              }
            ].map((point, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2.5"></div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{point.title}</h3>
                  <p className="text-gray-400">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111111] rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Ready to Accelerate Your Growth?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Let's discuss how we can help you leverage AI to scale your startup faster and more efficiently than ever before.
            </p>
            <Link 
              to="/contact"
              className="relative group inline-flex"
            >
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg">
                Schedule a Free Consultation
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}