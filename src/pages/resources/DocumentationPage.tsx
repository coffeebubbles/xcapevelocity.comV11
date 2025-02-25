import React from 'react';
import { Book, Search, Code, FileText, ArrowRight, BookOpen, Terminal, Database } from 'lucide-react';

export function DocumentationPage() {
  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-center mb-6 text-[#FFD700]">
            Documentation
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mx-auto">
            Comprehensive guides and resources for our AI automation platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full bg-[#111111] border border-gray-800 rounded-xl px-12 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-16">
          {[
            {
              icon: Book,
              title: "Getting Started",
              description: "Learn the basics of our platform and set up your first automation",
              links: [
                "Platform Overview",
                "Quick Start Guide",
                "Basic Concepts",
                "First Integration"
              ]
            },
            {
              icon: Code,
              title: "API Reference",
              description: "Detailed documentation of our API endpoints and usage",
              links: [
                "Authentication",
                "Endpoints",
                "Rate Limits",
                "Error Handling"
              ]
            },
            {
              icon: Terminal,
              title: "SDK Documentation",
              description: "Guides and references for our language-specific SDKs",
              links: [
                "Python SDK",
                "JavaScript SDK",
                "Java SDK",
                "REST API"
              ]
            },
            {
              icon: Database,
              title: "Data Integration",
              description: "Learn how to integrate and manage your data sources",
              links: [
                "Data Models",
                "Connectors",
                "Security",
                "Best Practices"
              ]
            }
          ].map((section, index) => (
            <div
              key={index}
              className="bg-[#111111] rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
                  <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
                    <section.icon className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-gray-400 mb-6">{section.description}</p>
              <ul className="space-y-3">
                {section.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <a
                      href="#"
                      className="flex items-center justify-between text-gray-400 hover:text-[#FFD700] transition-colors"
                    >
                      <span>{link}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16">
          {[
            {
              icon: FileText,
              title: "Tutorials",
              count: "25+ Guides"
            },
            {
              icon: BookOpen,
              title: "Examples",
              count: "50+ Samples"
            },
            {
              icon: Terminal,
              title: "API Docs",
              count: "100+ Endpoints"
            }
          ].map((resource, index) => (
            <div
              key={index}
              className="bg-[#111111] rounded-3xl p-6 sm:p-8 text-center transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative mb-6 mx-auto w-16">
                <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
                <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
                  <resource.icon className="w-8 h-8 text-black" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{resource.title}</h3>
              <p className="text-gray-400">{resource.count}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#111111] rounded-3xl p-6 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Need Help?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Can't find what you're looking for? Our support team is here to help you.
            </p>
            <button className="relative group inline-flex">
              <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
              <div className="relative bg-[#FFD700] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg">
                Contact Support
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}