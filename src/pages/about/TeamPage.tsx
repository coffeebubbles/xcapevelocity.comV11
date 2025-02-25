import React from 'react';
import { Brain, Code, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TeamPage() {
  const team = [
    {
      name: "Dr. Thaddeus Blackwood",
      role: "Chief Executive Officer", 
      description: "Former AI Research Lead at Google, PhD in Machine Learning from Stanford University."
    },
    {
      name: "Octavia Sterling",
      role: "Chief Technology Officer",
      description: "20+ years experience in software engineering and AI systems architecture."
    },
    {
      name: "Zephyr Rayne",
      role: "Head of AI Research",
      description: "Leading our AI innovation initiatives with expertise in deep learning and NLP."
    },
    {
      name: "Atlas Thorne",
      role: "Head of Engineering",
      description: "Expert in scalable systems and cloud architecture with focus on AI deployment."
    }
  ];

  const departments = [
    {
      icon: Brain,
      name: "AI Research",
      count: "15+ Researchers"
    },
    {
      icon: Code,
      name: "Engineering",
      count: "30+ Engineers"
    },
    {
      icon: Users,
      name: "Client Success",
      count: "20+ Specialists"
    },
    {
      icon: Briefcase,
      name: "Business Development",
      count: "10+ Professionals"
    }
  ];

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-center mb-6 text-[#FFD700]">
          Our Team
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Meet the experts behind our AI innovation and success
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-16 sm:mb-24">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-[#111111] rounded-3xl p-6 sm:p-8 text-center transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative mb-6 mx-auto w-16">
                <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
                <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
                  <dept.icon className="w-8 h-8 text-black" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{dept.name}</h3>
              <p className="text-gray-400">{dept.count}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-16 sm:mb-24">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-[#111111] rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#FFD700] mb-4">{member.role}</p>
                <p className="text-gray-400">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#111111] rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              We're always looking for talented individuals who are passionate about AI and innovation.
            </p>
            <Link 
              to="/about/careers"
              className="relative group inline-flex"
            >
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg">
                View Open Positions
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}