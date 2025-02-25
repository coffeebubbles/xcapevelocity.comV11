import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, TrendingUp, Award, Workflow, DollarSign, HeartHandshake as Handshake } from 'lucide-react';

export function SuccessStoriesPage() {
  const metrics = [
    {
      icon: Workflow,
      value: "10+",
      label: "Workflows Built",
      description: "Helping businesses streamline operations with tailored automation solutions"
    },
    {
      icon: DollarSign,
      value: "£500K+",
      label: "Value Delivered",
      description: "Estimated savings and efficiency gains for our clients through automation"
    },
    {
      icon: Star,
      value: "100%",
      label: "Positive Feedback",
      description: "Every client has rated us highly for our expertise and support"
    },
    {
      icon: Handshake,
      value: "5+",
      label: "Industry Partnerships",
      description: "Collaborating with leading AI and automation platforms"
    }
  ];

  const successStories = [
    {
      id: 'techflow',
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
      }
    },
    {
      id: 'financehub',
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
      }
    },
    {
      id: 'growthgenius',
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
      }
    }
  ];

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-5xl font-black text-center mb-6 text-[#FFD700]">
          Success Stories
        </h1>
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Discover how our AI automation solutions have transformed businesses across industries
        </p>

        {/* Metrics Section */}
        <div className="grid grid-cols-4 gap-8 mb-24">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="group relative bg-[#111111] rounded-3xl p-8 transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="mb-6">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
                    <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
                      <metric.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg font-medium text-[#FFD700] mb-2">{metric.label}</div>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="space-y-16">
          {successStories.map((story, index) => (
            <div 
              key={index}
              className="bg-[#111111] rounded-3xl p-12 relative overflow-hidden group transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 grid grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">{story.company}</h2>
                    <span className="text-[#FFD700]">{story.industry}</span>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Challenge</h3>
                      <p className="text-gray-400">{story.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Solution</h3>
                      <p className="text-gray-400">{story.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Key Results</h3>
                    <ul className="space-y-3">
                      {story.results.map((result, rIndex) => (
                        <li key={rIndex} className="flex items-start gap-3 text-gray-400">
                          <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-[#111111] rounded-3xl p-8 mb-8">
                    <img
                      src={story.logo}
                      alt={`${story.company} case study`}
                      className="w-full h-48 object-cover rounded-2xl mb-8"
                    />
                    <blockquote className="relative">
                      <div className="text-4xl text-[#FFD700] absolute -top-4 -left-4">"</div>
                      <p className="text-gray-400 italic mb-6 relative z-10">
                        {story.testimonial.quote}
                      </p>
                      <footer>
                        <div className="text-white font-semibold">{story.testimonial.author}</div>
                        <div className="text-gray-400">{story.testimonial.position}</div>
                      </footer>
                    </blockquote>
                  </div>

                  <Link 
                    to={`/case-study/${story.id}#top`}
                    className="relative group w-full inline-block"
                  >
                    <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
                    <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
                      Read Full Case Study
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our AI automation solutions.
          </p>
          <Link 
            to="/contact"
            className="relative group inline-flex"
          >
            <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
            <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center gap-2">
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}