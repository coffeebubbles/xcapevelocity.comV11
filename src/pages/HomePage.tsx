import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Settings, 
  ArrowRight, 
  MessageSquare, 
  GitMerge, 
  BarChart, 
  Mail, 
  FileText, 
  Users, 
  Check, 
  Clock, 
  DollarSign, 
  Star, 
  ChevronRight,
  Calendar,
  Bell,
  Play,
  Layers,
  Workflow,
  Bot,
  Shield
} from 'lucide-react';
import { GetStartedModal } from '../components/GetStartedModal';
import { ConsultationModal } from '../components/ConsultationModal';
import { ConsultationDiary } from '../components/ConsultationDiary';

export function HomePage() {
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDiaryOpen, setIsDiaryOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [blockedSlots, setBlockedSlots] = useState<{[key: string]: string[]}>({});

  const solutions = [
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
    },
    {
      title: "Sales & Lead Generation",
      description: "Intelligent lead scoring and automated outreach systems",
      icon: Users,
      sections: [
        {
          title: "AI-Driven Lead Scoring",
          tools: ["Relevance AI", "Salesforce"],
          processes: [
            "Analyze historical sales data",
            "Score leads based on conversion likelihood",
            "Automate high-priority lead routing"
          ]
        },
        {
          title: "Automated Outreach",
          tools: ["Instantly.ai", "Reply"],
          processes: [
            "Personalize cold email sequences",
            "Automate follow-up timing",
            "Track recipient engagement"
          ]
        }
      ]
    },
    {
      title: "Finance & Operations",
      description: "Streamlined financial reporting and invoice processing",
      icon: FileText,
      sections: [
        {
          title: "Automated Financial Reporting",
          tools: ["DataRails", "QuickBooks"],
          processes: [
            "Consolidate financial data automatically",
            "Generate monthly reports",
            "Forecast based on trends"
          ]
        },
        {
          title: "Invoice Processing",
          tools: ["InvoiceAction", "SAP"],
          processes: [
            "Scan and digitize invoices with OCR",
            "Automate approval workflows",
            "Process payments efficiently"
          ]
        }
      ]
    },
    {
      title: "Team Collaboration",
      description: "Automated task management and knowledge base systems",
      icon: GitMerge,
      sections: [
        {
          title: "Task Automation",
          tools: ["Asana", "Slack"],
          processes: [
            "Automate task status updates",
            "Sync team notifications",
            "Track project progress"
          ]
        },
        {
          title: "Knowledge Management",
          tools: ["Notion", "Automate.io"],
          processes: [
            "Auto-organize documents",
            "Tag content intelligently",
            "Maintain centralized knowledge"
          ]
        }
      ]
    }
  ];

  return (
    <>
      <section className="relative min-h-screen">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-[#FFD700] rounded-full opacity-20"
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  filter: 'blur(1px)',
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Golden glow effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-[#FFD700] text-lg sm:text-xl font-medium mb-6 block">Accelerate Your Future</span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 text-white">
                Supercharge Your Startup with{' '}
                <span className="text-[#FFD700] relative">
                  Intelligent Automation
                  <div className="absolute inset-0 bg-[#FFD700]/20 filter blur-lg"></div>
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed">
                We piece together the latest AI tools into seamless workflows, helping startups streamline operations, reduce costs, and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button 
                  onClick={() => setIsGetStartedOpen(true)}
                  className="relative group w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
                  <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
                    Get Started Now
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
                <Link to="/success-stories" className="relative group w-full sm:w-auto">
                  <div className="absolute inset-0 bg-white/5 rounded-xl transform translate-y-1.5"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg text-center">
                    View Our Case Studies
                  </div>
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-8 mt-16">
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <span className="font-medium">Velocity AI Integration</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center shrink-0">
                    <Settings className="w-6 h-6 text-black" />
                  </div>
                  <span className="font-medium">Performance Analytics</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center shrink-0">
                    <Brain className="w-6 h-6 text-black" />
                  </div>
                  <span className="font-medium">Intelligent Automation</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[600px] relative">
              {/* Glow effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-transparent filter blur-3xl transform scale-90 translate-y-4"></div>
              
              {/* Main image with glass effect */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                  alt="AI Expert working on automation solutions" 
                  className="w-full h-auto relative z-10 rounded-3xl"
                />
                {/* Reflection effect */}
                <div className="absolute -bottom-4 left-0 right-0 h-32 bg-gradient-to-b from-[#FFD700]/10 to-transparent transform scale-y-50 blur-sm rotate-180 opacity-50"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#FFD700]/20 rounded-full filter blur-xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#FFD700]/10 rounded-full filter blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFD700] mb-6">
              Featured Case Study
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              See how we helped a B2B SaaS company transform their LinkedIn sales process with AI automation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                A Day in the Life: Automating LinkedIn Sales with AI Tools
              </h3>
              <p className="text-gray-400 mb-8">
                Meet Sarah, a sales manager at a small B2B SaaS company. Her goal was to generate high-quality leads on LinkedIn without spending hours manually searching for prospects, crafting messages, and following up. With limited resources and a small team, Sarah implemented our AI-powered LinkedIn sales workflow.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-[#111111] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-[#FFD700]" />
                    <span className="text-white font-medium">Time Saved</span>
                  </div>
                  <div className="text-2xl font-bold text-[#FFD700]">80%</div>
                  <p className="text-gray-400 text-sm">Reduction in manual effort</p>
                </div>
                <div className="bg-[#111111] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-5 h-5 text-[#FFD700]" />
                    <span className="text-white font-medium">Cost Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-[#FFD700]">£2,650</div>
                  <p className="text-gray-400 text-sm">Monthly savings vs. agency</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2"></div>
                  <p className="text-gray-400">Automated lead finding and engagement tracking with Kleo</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2"></div>
                  <p className="text-gray-400">AI-powered message personalization using ChatGPT</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2"></div>
                  <p className="text-gray-400">Intelligent lead scoring and segmentation with Trigify</p>
                </div>
              </div>

              <Link 
                to="/case-study/saasgrowthpro"
                className="inline-flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all"
              >
                Read Full Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-[#111111] rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">The Workflow</h4>
                <div className="space-y-4">
                  {[
                    {
                      step: "Finding Relevant Interactions",
                      tool: "Kleo",
                      description: "Scans LinkedIn for high-engagement posts and comments"
                    },
                    {
                      step: "Message Personalization",
                      tool: "ChatGPT",
                      description: "Generates contextual responses based on interaction data"
                    },
                    {
                      step: "Lead Enrichment",
                      tool: "Prospeo",
                      description: "Retrieves verified contact details and company information"
                    },
                    {
                      step: "Automated Outreach",
                      tool: "BetterContact",
                      description: "Schedules and sends personalized connection requests"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-[#FFD700]/10 rounded-lg p-2">
                        <Star className="w-5 h-5 text-[#FFD700]" />
                      </div>
                      <div>
                        <div className="text-white font-medium mb-1">{item.step}</div>
                        <div className="text-[#FFD700] text-sm mb-1">{item.tool}</div>
                        <div className="text-gray-400 text-sm">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#111111] rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Response Rate</span>
                    <span className="text-[#FFD700] font-bold">60%</span>
                  </div>
                  <div className="w-full bg-black/50 rounded-full h-2">
                    <div className="bg-[#FFD700] h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Meeting Conversion</span>
                    <span className="text-[#FFD700] font-bold">25%</span>
                  </div>
                  <div className="w-full bg-black/50 rounded-full h-2">
                    <div className="bg-[#FFD700] h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Time Efficiency</span>
                    <span className="text-[#FFD700] font-bold">80%</span>
                  </div>
                  <div className="w-full bg-black/50 rounded-full h-2">
                    <div className="bg-[#FFD700] h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World AI Solutions Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFD700] mb-6">
              Real-World AI Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how our AI services can transform your business operations and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
                    <div className="relative bg-[#FFD700] w-12 h-12 rounded-2xl flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                    <p className="text-gray-400 text-sm">{solution.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {solution.sections.map((section, sIndex) => (
                    <div key={sIndex}>
                      <h4 className="text-[#FFD700] font-semibold mb-4">{section.title}</h4>
                      
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Tools</div>
                        <div className="flex flex-wrap gap-2">
                          {section.tools.map((tool, tIndex) => (
                            <span
                              key={tIndex}
                              className="bg-black/50 text-gray-400 px-3 py-1 rounded-full text-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-400 mb-2">Process</div>
                        <ul className="space-y-2">
                          {section.processes.map((process, pIndex) => (
                            <li key={pIndex} className="flex items-start gap-2 text-sm text-gray-400">
                              <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-1.5"></span>
                              {process}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-right">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/success-stories"
              className="relative group inline-flex"
            >
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center gap-2">
                View Success Stories
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <GetStartedModal 
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        blockedSlots={blockedSlots}
      />
      <ConsultationDiary
        isOpen={isDiaryOpen}
        onClose={() => setIsDiaryOpen(false)}
      />
    </>
  );
}