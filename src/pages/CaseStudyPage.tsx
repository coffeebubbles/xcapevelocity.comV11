import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { X, Check, ArrowRight, ArrowLeft, Download, BarChart, Clock, DollarSign, Users, Star, Zap, Brain, Shield } from 'lucide-react';

export function CaseStudyPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/success-stories');
  };

  const caseStudies = {
    'saasgrowthpro': {
      company: "SaaS Growth Pro",
      industry: "B2B SaaS",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2978&auto=format&fit=crop",
      challenge: "SaaS Growth Pro's sales team was spending 4+ hours daily on manual LinkedIn prospecting, with inconsistent results and low response rates. They needed to scale their outreach while maintaining personalization.",
      solution: "We implemented an AI-powered LinkedIn automation workflow that combines intelligent lead finding, engagement tracking, and personalized messaging.",
      results: [
        "80% reduction in time spent on prospecting",
        "3x increase in qualified leads generated",
        "45% improvement in response rates",
        "£3,400 monthly cost savings vs. in-house team"
      ],
      testimonial: {
        quote: "The AI automation workflow has transformed our LinkedIn sales process. What used to take our team hours is now largely automated, and the results are better than ever. The personalization capabilities ensure our outreach remains authentic and effective.",
        author: "Sarah Thompson",
        position: "Sales Director, SaaS Growth Pro"
      },
      metrics: [
        { icon: Clock, label: "Time Saved", value: "80%" },
        { icon: Users, label: "Lead Quality", value: "93%" },
        { icon: DollarSign, label: "ROI", value: "312%" },
        { icon: Star, label: "Response Rate", value: "45%" }
      ],
      timeline: [
        {
          phase: "Analysis & Setup",
          duration: "1 week",
          activities: [
            "Current process analysis and documentation",
            "Ideal customer profile definition",
            "Tool selection and integration planning",
            "Custom workflow design"
          ]
        },
        {
          phase: "Implementation",
          duration: "2 weeks",
          activities: [
            "Kleo setup for lead finding",
            "ChatGPT API integration for messaging",
            "Trigify implementation for lead scoring",
            "Workflow automation setup"
          ]
        },
        {
          phase: "Optimization",
          duration: "1 week",
          activities: [
            "A/B testing message templates",
            "Response rate optimization",
            "Team training sessions",
            "Performance monitoring setup"
          ]
        }
      ],
      technicalDetails: {
        tools: ["Kleo", "ChatGPT API", "Trigify", "Make.com", "LinkedIn Sales Navigator"],
        integrations: ["CRM", "Email Platform", "Analytics Tools", "Team Communication"],
        features: [
          "AI Lead Finding",
          "Engagement Tracking",
          "Message Personalization",
          "Lead Scoring",
          "Performance Analytics"
        ]
      },
      charts: [
        {
          title: "Response Rate Improvement",
          type: "line",
          data: {
            before: "15%",
            after: "45%",
            improvement: "200%"
          }
        },
        {
          title: "Monthly Cost Comparison",
          type: "bar",
          data: {
            before: "£5,250",
            after: "£1,850",
            savings: "£3,400"
          }
        }
      ],
      humanComparison: {
        time: "5x longer to achieve same results",
        cost: {
          breakdown: [
            "Sales Development Rep salary: £3,500/month",
            "Tools and subscriptions: £750/month",
            "Management overhead: £1,000/month"
          ],
          total: "£5,250/month for manual operations"
        }
      }
    },
    'techflow': {
      company: "TechFlow Solutions",
      industry: "E-commerce",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2978&auto=format&fit=crop",
      challenge: "Struggling with manual customer service operations and increasing response times",
      solution: "Implemented AI-powered chatbot and automated ticket routing system",
      results: [
        "95% reduction in response time",
        "75% decrease in manual ticket handling",
        "£1.5M annual cost savings",
        "Customer satisfaction increased by 40%"
      ],
      testimonial: {
        quote: "The AI automation solutions provided by Xscape Velocity transformed our customer service operations. We're now able to handle 5x the volume with better satisfaction scores.",
        author: "Sarah Chen",
        position: "CTO, TechFlow Solutions"
      },
      metrics: [
        { icon: Clock, label: "Response Time", value: "95%" },
        { icon: Users, label: "Manual Work", value: "75%" },
        { icon: DollarSign, label: "Cost Savings", value: "£1.5M" },
        { icon: Star, label: "CSAT Score", value: "4.8/5" }
      ],
      timeline: [
        {
          phase: "Analysis & Design",
          duration: "3 weeks",
          activities: [
            "Current process analysis and documentation",
            "Regulatory requirement mapping",
            "System architecture design",
            "Data flow optimization planning"
          ]
        },
        {
          phase: "Development",
          duration: "4 weeks",
          activities: [
            "Automated data collection system setup",
            "Report generation engine development",
            "Predictive analytics implementation",
            "Compliance check automation"
          ]
        },
        {
          phase: "Deployment",
          duration: "2 weeks",
          activities: [
            "System integration testing",
            "User training and documentation",
            "Parallel run with existing system",
            "Performance monitoring setup"
          ]
        }
      ],
      technicalDetails: {
        tools: ["TensorFlow", "PostgreSQL", "Python", "Tableau", "Docker"],
        integrations: ["ERP System", "Banking APIs", "Compliance Tools", "BI Platform"],
        features: [
          "Automated Data Collection",
          "Real-time Processing",
          "Predictive Analytics",
          "Compliance Monitoring",
          "Automated Reporting"
        ]
      },
      charts: [
        {
          title: "Report Generation Time",
          type: "line",
          data: {
            before: "5 days",
            after: "2 hours",
            improvement: "85%"
          }
        },
        {
          title: "Annual Cost Savings",
          type: "bar",
          data: {
            before: "£2M",
            after: "£800K",
            savings: "£1.2M"
          }
        }
      ]
    },
    'financehub': {
      company: "FinanceHub",
      industry: "Financial Services",
      logo: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2960&auto=format&fit=crop",
      challenge: "Manual data processing causing delays in financial reporting and analysis",
      solution: "Deployed automated financial reporting system with predictive analytics",
      results: [
        "Report generation time reduced by 85%",
        "99.9% accuracy in data processing",
        "Real-time financial insights",
        "50% reduction in compliance risks"
      ],
      testimonial: {
        quote: "The automation platform has revolutionized our financial operations. What used to take weeks now happens in minutes, with better accuracy and insights.",
        author: "Michael Roberts",
        position: "CFO, FinanceHub"
      },
      metrics: [
        { icon: Clock, label: "Processing Time", value: "2 hours" },
        { icon: Shield, label: "Accuracy", value: "99.9%" },
        { icon: DollarSign, label: "Cost Savings", value: "£1.2M" },
        { icon: Star, label: "User Rating", value: "4.9/5" }
      ],
      timeline: [
        {
          phase: "Analysis & Design",
          duration: "3 weeks",
          activities: [
            "Current process analysis and documentation",
            "Regulatory requirement mapping",
            "System architecture design",
            "Data flow optimization planning"
          ]
        },
        {
          phase: "Development",
          duration: "4 weeks",
          activities: [
            "Automated data collection system setup",
            "Report generation engine development",
            "Predictive analytics implementation",
            "Compliance check automation"
          ]
        },
        {
          phase: "Deployment",
          duration: "2 weeks",
          activities: [
            "System integration testing",
            "User training and documentation",
            "Parallel run with existing system",
            "Performance monitoring setup"
          ]
        }
      ],
      technicalDetails: {
        tools: ["TensorFlow", "PostgreSQL", "Python", "Tableau", "Docker"],
        integrations: ["ERP System", "Banking APIs", "Compliance Tools", "BI Platform"],
        features: [
          "Automated Data Collection",
          "Real-time Processing",
          "Predictive Analytics",
          "Compliance Monitoring",
          "Automated Reporting"
        ]
      },
      charts: [
        {
          title: "Report Generation Time",
          type: "line",
          data: {
            before: "5 days",
            after: "2 hours",
            improvement: "85%"
          }
        },
        {
          title: "Annual Cost Savings",
          type: "bar",
          data: {
            before: "£2M",
            after: "£800K",
            savings: "£1.2M"
          }
        }
      ]
    },
    'growthgenius': {
      company: "GrowthGenius",
      industry: "Marketing",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      challenge: "Inefficient lead generation and qualification process",
      solution: "Implemented AI-driven lead scoring and automated outreach system",
      results: [
        "3x increase in qualified leads",
        "60% higher conversion rate",
        "80% reduction in manual prospecting",
        "£1.2M additional revenue in 6 months"
      ],
      testimonial: {
        quote: "The AI-powered lead generation system has completely transformed our sales process. We're now closing deals faster with less effort, and our sales team can focus on high-value activities instead of manual prospecting.",
        author: "Jessica Martinez",
        position: "Head of Sales, GrowthGenius"
      },
      metrics: [
        { icon: Brain, label: "Lead Quality", value: "93%" },
        { icon: Zap, label: "Time Saved", value: "80%" },
        { icon: DollarSign, label: "Revenue Boost", value: "147%" },
        { icon: Users, label: "Team Efficiency", value: "3.5x" }
      ],
      timeline: [
        {
          phase: "Strategy & Setup",
          duration: "2 weeks",
          activities: [
            "Sales process analysis",
            "Lead scoring criteria definition",
            "Communication sequence design",
            "Integration planning"
          ]
        },
        {
          phase: "Development",
          duration: "4 weeks",
          activities: [
            "AI model development and training",
            "Outreach automation setup",
            "CRM integration implementation",
            "Analytics dashboard creation"
          ]
        },
        {
          phase: "Optimization",
          duration: "2 weeks",
          activities: [
            "A/B testing setup",
            "Performance monitoring",
            "Team training",
            "Process refinement"
          ]
        }
      ],
      technicalDetails: {
        tools: ["Custom ML Models", "HubSpot", "Salesforce", "Python", "Node.js"],
        integrations: ["CRM", "Marketing Automation", "Email Platform", "Analytics Tools"],
        features: [
          "AI Lead Scoring",
          "Automated Outreach",
          "Personalization Engine",
          "Performance Analytics",
          "A/B Testing"
        ]
      },
      charts: [
        {
          title: "Lead Quality Improvement",
          type: "line",
          data: {
            before: "35% qualified",
            after: "93% qualified",
            improvement: "165%"
          }
        },
        {
          title: "Revenue Impact",
          type: "bar",
          data: {
            before: "£800K/quarter",
            after: "£2M/quarter",
            improvement: "150%"
          }
        }
      ]
    }
  };

  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <button 
            onClick={handleBack}
            className="group inline-flex items-center gap-2 text-[#FFD700] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Success Stories
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-black min-h-screen" id="top">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-8">
        <div className="sticky top-24 z-10 -mt-12 mb-12 bg-gradient-to-b from-black via-black/95 to-transparent pb-8">
          <button 
            onClick={handleBack}
            className="group inline-flex items-center gap-2 text-[#FFD700] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Success Stories
          </button>
        </div>

        <div className="grid grid-cols-2 gap-16 mb-16">
          <div>
            <h1 className="text-4xl font-black mb-6 text-white">
              {study.company}
              <span className="text-[#FFD700] block text-xl mt-2">{study.industry}</span>
            </h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-gray-400 leading-relaxed">{study.challenge}</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Solution</h2>
                <p className="text-gray-400 leading-relaxed">{study.solution}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Key Results</h2>
                <ul className="space-y-4">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-400">
                      <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#111111] rounded-3xl p-8">
              <img
                src={study.logo}
                alt={`${study.company} case study`}
                className="w-full h-48 object-cover rounded-2xl mb-8"
              />
              <blockquote className="relative">
                <div className="text-4xl text-[#FFD700] absolute -top-4 -left-4">"</div>
                <p className="text-gray-400 italic mb-6 relative z-10 text-lg">
                  {study.testimonial.quote}
                </p>
                <footer>
                  <div className="text-white font-semibold">{study.testimonial.author}</div>
                  <div className="text-gray-400">{study.testimonial.position}</div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 mb-16">
          {study.metrics.map((metric, index) => (
            <div key={index} className="bg-[#111111] rounded-3xl p-8 text-center">
              <div className="relative mb-6 mx-auto w-16">
                <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
                <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
                  <metric.icon className="w-8 h-8 text-black" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Implementation Timeline</h2>
          <div className="space-y-8">
            {study.timeline.map((phase, index) => (
              <div key={index} className="bg-[#111111] rounded-3xl p-8">
                <div className="flex items-start gap-8">
                  <div className="w-48 shrink-0">
                    <div className="text-[#FFD700] font-bold mb-1">{phase.phase}</div>
                    <div className="text-gray-400">{phase.duration}</div>
                  </div>
                  <ul className="space-y-3">
                    {phase.activities.map((activity, aIndex) => (
                      <li key={aIndex} className="flex items-start gap-3 text-gray-400">
                        <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Technical Overview</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-[#111111] rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {study.technicalDetails.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-black/50 text-gray-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Integrations</h3>
              <div className="flex flex-wrap gap-2">
                {study.technicalDetails.integrations.map((integration, index) => (
                  <span
                    key={index}
                    className="bg-black/50 text-gray-400 px-3 py-1 rounded-full text-sm"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#111111] rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
              <ul className="space-y-2">
                {study.technicalDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-[#111111] rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Manual Operations Cost</h3>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-400 mb-1">Monthly Cost</div>
                <div className="text-2xl font-bold text-white">£5,250</div>
              </div>
              <div className="text-sm text-gray-400">
                Takes 5x longer to achieve results
              </div>
            </div>
          </div>
          <div className="bg-[#111111] rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Cost Breakdown</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2"></span>
                Sales Development Rep salary: £3,500/month
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2"></span>
                Tools and subscriptions: £750/month
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2"></span>
                Management overhead: £1,000/month
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#111111] rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to learn more?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Download the complete case study for detailed insights, methodologies, and implementation strategies.
          </p>
          <button className="relative group inline-flex">
            <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
            <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center gap-2">
              Download Full Case Study
              <Download className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}