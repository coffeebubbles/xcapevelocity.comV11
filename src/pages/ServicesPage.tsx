import React, { useState } from 'react';
import { Zap, DollarSign, Settings, Brain, Shield, BarChart, Check, ArrowRight, GitMerge, Bell, FileText, Play, ChevronRight, Layers, Workflow, Bot, Calendar, MessageSquare } from 'lucide-react';
import { GetStartedModal } from '../components/GetStartedModal';
import { ConsultationModal } from '../components/ConsultationModal';
import { ConsultationDiary } from '../components/ConsultationDiary';

export function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDiaryOpen, setIsDiaryOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [blockedSlots, setBlockedSlots] = useState<{[key: string]: string[]}>({});

  const services = [
    {
      title: "Marketing Automation",
      description: "AI-powered content creation and multi-channel campaign management",
      icon: MessageSquare,
      sections: [
        {
          title: "AI-Powered Content Creation",
          tools: ["MediaMonk.ai", "Buffer", "Zapier"],
          processes: [
            "Generate blog posts and social content with AI",
            "Schedule posts at optimal times",
            "Track engagement metrics automatically"
          ]
        },
        {
          title: "Multi-Channel Campaign Management",
          tools: ["Zoho Flow", "HubSpot", "Google Ads"],
          processes: [
            "Create targeted email sequences",
            "Sync with retargeting campaigns",
            "Track performance in real-time"
          ]
        }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Single Workflow",
      description: "Perfect for automating a specific business process",
      price: "£799",
      period: "",
      features: [
        "1 workflow with up to 5 hops/connections",
        "Full setup, testing, and optimization",
        "Example: Google Sheets → Salesforce → Slack",
        "Quick deployment within days",
        "1 month of support for troubleshooting",
        "Performance review after one month"
      ],
      example: {
        title: "Lead Generation Automation",
        icon: GitMerge,
        description: "Automate your lead capture and notification system"
      },
      cta: "Get Started",
      ctaLink: "#"
    },
    {
      name: "Multi-Scenario Workflows",
      description: "Ideal for automating multiple business areas",
      price: "£1,999",
      period: "",
      features: [
        "3 workflows with up to 15 hops/connections",
        "Tailored automation solutions",
        "Cross-department integration",
        "1 month of priority support",
        "Post-implementation performance review",
        "Connect marketing, sales, and operations"
      ],
      example: {
        title: "Marketing & Sales Integration",
        icon: Bell,
        description: "Connect marketing tools with CRM and financial reporting"
      },
      recommended: true,
      cta: "Get Started",
      ctaLink: "#"
    },
    {
      name: "Custom Workflows",
      description: "Advanced solutions for complex automation needs",
      price: "From £2,499",
      period: "",
      features: [
        "Enterprise-grade multi-system automation",
        "Advanced workflows with unlimited hops",
        "Bespoke solutions for unique needs",
        "Dedicated support team",
        "Scalable architecture for growth",
        "Ongoing performance reviews"
      ],
      example: {
        title: "Enterprise Integration",
        icon: FileText,
        description: "Complex multi-system automation solutions"
      },
      cta: "Contact Sales",
      ctaLink: "#"
    }
  ];

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-center mb-6 text-[#FFD700]">
          Our Services
        </h1>

        {/* Pricing Section - Now at the top */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">Pricing Plans</h2>
          <p className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Solutions designed to deliver enterprise-level efficiency at startup-friendly prices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-[#111111] rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-2 ${
                  plan.recommended ? 'ring-2 ring-[#FFD700]' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FFD700] text-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <div className="bg-black/50 rounded-2xl p-4 sm:p-6 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#FFD700] w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <plan.example.icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{plan.example.title}</div>
                      <div className="text-sm text-gray-400">{plan.example.description}</div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-gray-400">
                      <Check className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => {
                    setSelectedPlan(plan);
                    setIsGetStartedOpen(true);
                  }}
                  className="relative group w-full"
                >
                  <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
                  <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
                    {plan.cta}
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Services Section */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`text-left p-6 sm:p-8 rounded-3xl transition-all duration-300 ${
                  activeService === index 
                    ? 'bg-[#FFD700] text-black'
                    : 'bg-[#111111] text-white hover:bg-[#FFD700]/10'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className={`w-6 sm:w-8 h-6 sm:h-8 ${
                    activeService === index ? 'text-black' : 'text-[#FFD700]'
                  }`} />
                  <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
                </div>
                <p className={activeService === index ? 'text-black/80' : 'text-gray-400'}>
                  {service.description}
                </p>
              </button>
            ))}
          </div>

          <div className="bg-[#111111] rounded-3xl p-6 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services[activeService].sections.map((section, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {section.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="bg-black/50 text-gray-400 px-3 py-1 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {section.processes.map((process, processIndex) => (
                        <li key={processIndex} className="flex items-start gap-3 text-gray-400">
                          <Check className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                          <span>{process}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#111111] rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Transform Your Business</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Let's discuss how our AI solutions can help you achieve your business goals. Schedule a consultation with our experts today.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsConsultationOpen(true)}
                className="relative group inline-flex"
              >
                <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
                <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg">
                  Schedule Consultation
                </div>
              </button>
              <button 
                onClick={() => setIsDiaryOpen(true)}
                className="relative group inline-flex"
              >
                <div className="absolute inset-0 bg-white/5 rounded-xl transform translate-y-1.5"></div>
                <div className="relative bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Manage Calendar
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Modals */}
        <ConsultationModal 
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          blockedSlots={blockedSlots}
        />

        <ConsultationDiary
          isOpen={isDiaryOpen}
          onClose={() => setIsDiaryOpen(false)}
        />

        <GetStartedModal 
          isOpen={isGetStartedOpen}
          onClose={() => setIsGetStartedOpen(false)}
        />
      </div>
    </section>
  );
}