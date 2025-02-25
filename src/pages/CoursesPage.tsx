import React, { useState } from 'react';
import { Clock, Users, BookOpen, Star, ArrowRight, Zap, Brain, GitMerge, Video, MessageSquare } from 'lucide-react';
import { EnrollmentModal } from '../components/EnrollmentModal';
import { GetStartedModal } from '../components/GetStartedModal';
import { BookingModal } from '../components/BookingModal';

export function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const personalizedTeaching = [
    {
      name: "Level 1",
      price: "£499",
      description: "Perfect for learning basic automation workflows",
      duration: "2-hour live session",
      features: [
        "1 scenario with up to 5 hops/connections",
        "Real-time guidance from an expert",
        "Example: Automate lead generation",
        "Hands-on practice with actual tools",
        "Post-session support",
        "Access to learning resources"
      ],
      example: {
        title: "Lead Generation Flow",
        icon: GitMerge,
        description: "Google Sheets → Salesforce → Slack"
      }
    },
    {
      name: "Level 2",
      price: "£999",
      description: "Ideal for learning multiple automation scenarios",
      duration: "Two 2-hour live sessions",
      features: [
        "2 scenarios with up to 10 hops/connections",
        "Extended hands-on guidance",
        "Marketing automation + CRM integration",
        "Custom workflow design",
        "2 weeks of support",
        "Advanced tool training"
      ],
      example: {
        title: "Marketing & CRM Integration",
        icon: Brain,
        description: "HubSpot → Buffer → Google Analytics"
      },
      recommended: true
    },
    {
      name: "Level 3",
      price: "Custom",
      description: "Advanced training for complex business needs",
      duration: "Flexible session structure",
      features: [
        "Advanced workflows with unlimited hops",
        "Tailored to your business processes",
        "Complex integration scenarios",
        "Enterprise-level solutions",
        "Extended support period",
        "Team training available"
      ],
      example: {
        title: "Enterprise Automation",
        icon: Zap,
        description: "Complex multi-system workflows"
      }
    }
  ];

  const courses = [
    {
      title: "Workflow Fundamentals",
      description: "Learn to create simple automation workflows for everyday tasks.",
      duration: "~10 hours",
      level: "Beginner",
      rating: 4.8,
      price: "£399",
      topics: [
        "Introduction to Automation Tools (Zapier, Make.com)",
        "Building Simple Workflows with up to 5 Steps",
        "Automating Email Follow-Ups and Notifications",
        "Troubleshooting and Optimizing Basic Workflows"
      ]
    },
    {
      title: "Advanced Workflow Scenarios",
      description: "Design and deploy multi-step workflows for complex business processes.",
      duration: "~15 hours",
      level: "Intermediate",
      rating: 4.9,
      price: "£599",
      topics: [
        "Process Automation for Marketing Campaigns and Sales Pipelines",
        "Connecting CRMs, Marketing Tools, and Analytics Platforms",
        "Workflow Optimization for Efficiency and Scalability",
        "Advanced Troubleshooting Techniques"
      ]
    },
    {
      title: "Enterprise Workflow Integration",
      description: "Implement robust automation solutions for enterprise-level operations.",
      duration: "~20 hours",
      level: "Advanced",
      rating: 4.7,
      price: "£899",
      topics: [
        "Designing Scalable Automation Architectures with Unlimited Steps",
        "Integrating AI Tools (e.g., ChatGPT API) into Workflows",
        "Security and Compliance in Automation Systems",
        "Performance Monitoring and Continuous Improvement Strategies"
      ]
    }
  ];

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-center mb-6 text-[#FFD700]">
          AI Learning Paths
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Choose between self-paced courses or personalized one-to-one teaching sessions
        </p>

        {/* One-to-One Teaching Section */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">One-to-One Personalized Teaching</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Hands-on guidance to master AI-powered automation workflows with live, interactive training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalizedTeaching.map((plan, index) => (
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
                  </div>
                  <div className="text-gray-400 mt-2 flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    {plan.duration}
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
                      <Star className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setSelectedPlan(plan)}
                  className="relative group w-full"
                >
                  <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
                  <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
                    Book Your Session
                    <MessageSquare className="w-5 h-5" />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Self-Paced Courses Section */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Self-Paced Courses</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Master automation workflows through scenario-based courses designed for real-world applications. 
              Learn at your own pace and gain practical skills to streamline your business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative bg-[#111111] rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/20 to-transparent rounded-3xl transform translate-y-4 blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{course.title}</h3>
                  <p className="text-gray-400 mb-6">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Star className="w-4 h-4 text-[#FFD700]" />
                      {course.rating}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="text-white font-semibold flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      What you'll learn
                    </h4>
                    <ul className="space-y-2">
                      {course.topics.map((topic, tIndex) => (
                        <li key={tIndex} className="text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{course.price}</span>
                    <span className="text-gray-400">{course.level}</span>
                  </div>

                  <button 
                    onClick={() => setSelectedCourse(course)}
                    className="w-full bg-[#FFD700] text-black px-6 py-3 rounded-xl font-medium transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111111] rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Custom Training Programs</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Need a tailored learning program for your team? We offer custom corporate training solutions designed to meet your specific needs.
            </p>
            <button 
              onClick={() => setIsGetStartedOpen(true)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg">
                Contact for Custom Training
              </div>
            </button>
          </div>
        </div>

        <EnrollmentModal 
          isOpen={selectedCourse !== null}
          onClose={() => setSelectedCourse(null)}
          course={selectedCourse || {}}
        />

        <GetStartedModal 
          isOpen={isGetStartedOpen}
          onClose={() => setIsGetStartedOpen(false)}
        />

        <BookingModal
          isOpen={selectedPlan !== null}
          onClose={() => setSelectedPlan(null)}
          plan={selectedPlan || {}}
        />
      </div>
    </section>
  );
}