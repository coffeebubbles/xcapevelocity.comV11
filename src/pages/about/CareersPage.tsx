import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Zap, Users, Brain, Code } from 'lucide-react';

export function CareersPage() {
  const positions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Cambridge, UK",
      type: "Full-time",
      salary: "£80,000 - £120,000",
      requirements: [
        "5+ years experience in AI/ML development",
        "Strong Python and TensorFlow/PyTorch skills",
        "Experience with large-scale AI systems",
        "PhD in Computer Science or related field preferred"
      ]
    },
    {
      title: "Machine Learning Researcher",
      department: "Research",
      location: "Remote",
      type: "Full-time",
      salary: "£70,000 - £100,000",
      requirements: [
        "Advanced degree in ML, AI, or related field",
        "Publication record in top-tier conferences",
        "Experience with NLP and computer vision",
        "Strong mathematical background"
      ]
    },
    {
      title: "AI Solutions Architect",
      department: "Engineering",
      location: "London, UK",
      type: "Full-time",
      salary: "£90,000 - £130,000",
      requirements: [
        "7+ years of software architecture experience",
        "Experience designing AI systems at scale",
        "Strong cloud platform knowledge",
        "Excellent communication skills"
      ]
    },
    {
      title: "AI Product Manager",
      department: "Product",
      location: "Cambridge, UK",
      type: "Full-time",
      salary: "£65,000 - £95,000",
      requirements: [
        "3+ years product management experience",
        "Strong understanding of AI/ML concepts",
        "Experience with agile methodologies",
        "Excellent stakeholder management skills"
      ]
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Learning & Development",
      description: "Continuous learning opportunities an d conference attendance"
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with world-class experts in AI and automation"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Be at the forefront of AI technology advancement"
    },
    {
      icon: Code,
      title: "Technical Growth",
      description: "Access to cutting-edge tools and technologies"
    }
  ];

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-center mb-6 text-[#FFD700]">
          Careers at Xscape Velocity
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Join us in shaping the future of AI automation
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-16 sm:mb-24">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#111111] rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
                <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Open Positions</h2>
        <div className="space-y-4 sm:space-y-6 mb-16 sm:mb-24">
          {positions.map((position, index) => (
            <div
              key={index}
              className="group bg-[#111111] rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Briefcase className="w-4 h-4" />
                      {position.department}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      {position.salary}
                    </div>
                  </div>
                </div>
                <button className="relative group shrink-0">
                  <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
                  <div className="relative bg-[#FFD700] text-black px-6 py-3 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg">
                    Apply Now
                  </div>
                </button>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Requirements</h4>
                <ul className="space-y-2">
                  {position.requirements.map((req, rIndex) => (
                    <li key={rIndex} className="flex items-start gap-3 text-gray-400">
                      <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#111111] rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Don't See Your Perfect Role?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              We're always interested in meeting talented individuals. Send us your CV and let's discuss how you could contribute to our mission.
            </p>
            <button className="relative group inline-flex">
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg">
                Submit Open Application
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}