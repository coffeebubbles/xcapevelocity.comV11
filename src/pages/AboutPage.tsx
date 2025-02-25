import React from 'react';
import { Clock, DollarSign, Brain, Users } from 'lucide-react';

export function AboutPage() {
  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-center mb-16 text-[#FFD700]">
          About Xscape Velocity
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="prose prose-lg prose-invert">
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              We're a team of AI experts, engineers, and innovators dedicated to transforming businesses through intelligent automation. Our mission is to make advanced AI technology accessible to startups and enterprises alike.
            </p>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-transparent rounded-3xl transform translate-y-4 blur-xl opacity-50"></div>
              <img 
                src="https://res.cloudinary.com/dzg3lv6fh/image/upload/v1739988849/HomePageImage2_xrx680.png"
                alt="AI Innovation Team"
                className="rounded-3xl w-full h-auto relative z-10 shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-8">
            {[
              {
                icon: Clock,
                title: "Speed to Market",
                description: "Launch your AI-powered features faster than ever with our streamlined integration process and expert guidance."
              },
              {
                icon: DollarSign,
                title: "Cost-Effective Solutions",
                description: "Get enterprise-grade AI capabilities without the enterprise-level price tag. Our solutions are designed to maximize your ROI."
              },
              {
                icon: Brain,
                title: "Cutting-Edge Technology",
                description: "Stay ahead of the curve with our constantly evolving AI solutions that leverage the latest advancements in machine learning."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Work with our team of seasoned AI specialists, each bringing years of experience in implementing successful AI solutions."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="relative group bg-[#111111] rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-2 hover:bg-[#1A1A1A]"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
                    <div className="relative bg-[#FFD700] w-12 h-12 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}