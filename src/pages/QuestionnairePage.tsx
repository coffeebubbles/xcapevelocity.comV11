import React, { useState } from 'react';
import { Check } from 'lucide-react';

export function QuestionnairePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    businessDescription: '',
    mainGoal: '',
    metrics: [
      { metric: '', target: '' },
      { metric: '', target: '' },
      { metric: '', target: '' }
    ],
    challenges: '',
    programs: [
      { name: '', hasApi: 'unsure' },
      { name: '', hasApi: 'unsure' },
      { name: '', hasApi: 'unsure' }
    ],
    services: [
      { name: '', username: '', password: '', apiKey: '', details: '' },
      { name: '', username: '', password: '', apiKey: '', details: '' },
      { name: '', username: '', password: '', apiKey: '', details: '' }
    ],
    privacyRequirements: '',
    workflowDescription: '',
    exampleWorkflows: '',
    timeline: '',
    expectations: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    hasPermissions: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-center mb-6 text-[#FFD700]">
          AI Automation Workflow Questionnaire
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Help us understand your needs and create a tailored workflow that delivers measurable results
        </p>

        <form netlify method="POST" name="Questionnaire page" onSubmit={handleSubmit} className="space-y-12" data-netlify="true">
          {/* Business Overview */}
          <div className="bg-[#111111] rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">I. Business Overview</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Industry *
                </label>
                <input
                  type="text"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Briefly describe your business and core operations *
                </label>
                <textarea
                  name="businessDescription"
                  required
                  rows={4}
                  value={formData.businessDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessDescription: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Goals & Metrics */}
          <div className="bg-[#111111] rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">II. Automation Goals & Success Metrics</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  What is your main goal for implementing AI automation? *
                </label>
                <textarea
                  name="mainGoal"
                  required
                  rows={4}
                  value={formData.mainGoal}
                  onChange={(e) => setFormData(prev => ({ ...prev, mainGoal: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  placeholder="e.g., Generate more leads, improve customer engagement, streamline internal processes..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-4">
                  Success Metrics *
                </label>
                {formData.metrics.map((metric, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 mb-4">
                    <input
                  name="metric"
                      type="text"
                      placeholder={`Metric ${index + 1}`}
                      value={metric.metric}
                      onChange={(e) => {
                        const newMetrics = [...formData.metrics];
                        newMetrics[index].metric = e.target.value;
                        setFormData(prev => ({ ...prev, metrics: newMetrics }));
                      }}
                      className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="target"
                      placeholder="Target Value"
                      value={metric.target}
                      onChange={(e) => {
                        const newMetrics = [...formData.metrics];
                        newMetrics[index].target = e.target.value;
                        setFormData(prev => ({ ...prev, metrics: newMetrics }));
                      }}
                      className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  What challenges are you currently facing? *
                </label>
                <textarea
                      name="challenges"
                  required
                  rows={4}
                  value={formData.challenges}
                  onChange={(e) => setFormData(prev => ({ ...prev, challenges: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                ></textarea>
              </div>
            </div>
          </div>

          {/* System Integration */}
          <div className="bg-[#111111] rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">III. System Integration & Data Access</h2>
            <div className="space-y-8">
              {formData.programs.map((program, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Program/Service {index + 1}
                    </label>
                    <input
                      name="programs"
                      type="text"
                      value={program.name}
                      onChange={(e) => {
                        const newPrograms = [...formData.programs];
                        newPrograms[index].name = e.target.value;
                        setFormData(prev => ({ ...prev, programs: newPrograms }));
                      }}
                      className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      API Access Available?
                    </label>
                    <select
                      name="hasApi"
                      value={program.hasApi}
                      onChange={(e) => {
                        const newPrograms = [...formData.programs];
                        newPrograms[index].hasApi = e.target.value;
                        setFormData(prev => ({ ...prev, programs: newPrograms }));
                      }}
                      className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    >
                      <option value="unsure">Unsure</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-4">
                  Data Privacy & Security Requirements
                </label>
                <textarea
                      name="privacyRequirements"
                  rows={4}
                  value={formData.privacyRequirements}
                  onChange={(e) => setFormData(prev => ({ ...prev, privacyRequirements: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  placeholder="e.g., GDPR compliance, HIPAA compliance, etc."
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <div className="relative flex items-center mt-1">
                  <input
                    type="checkbox"
                    name="hasPermissions"
                    className="sr-only peer"
                    checked={formData.hasPermissions}
                    onChange={(e) => setFormData(prev => ({ ...prev, hasPermissions: e.target.checked }))}
                  />
                  <div className="w-5 h-5 border-2 border-gray-600 rounded peer-checked:bg-[#FFD700] peer-checked:border-[#FFD700] transition-all"></div>
                  <Check className="w-3 h-3 text-black absolute left-1 top-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="text-sm text-gray-400">
                  I confirm that I have the necessary permissions and rights to allow access to these services for automation purposes.
                </span>
              </div>
            </div>
          </div>

          {/* Workflow Specifics */}
          <div className="bg-[#111111] rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">IV. Workflow Specifics</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Describe your ideal workflow *
                </label>
                <textarea
                    name="workflowDescription"
                  required
                  rows={6}
                  value={formData.workflowDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, workflowDescription: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Example workflows or processes to replicate
                </label>
                <textarea
                    name="exampleWorkflows"
                  rows={4}
                  value={formData.exampleWorkflows}
                  onChange={(e) => setFormData(prev => ({ ...prev, exampleWorkflows: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Timeline & Contact */}
          <div className="bg-[#111111] rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">V. Timeline & Contact Information</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Desired Implementation Timeline *
                </label>
                <input
                    name="timeline"
                  type="text"
                  required
                  value={formData.timeline}
                  onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Specific Requirements or Expectations
                </label>
                <textarea
                    name="expectations"
                  rows={4}
                  value={formData.expectations}
                  onChange={(e) => setFormData(prev => ({ ...prev, expectations: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Contact Name *
                  </label>
                  <input
                    name="contactName"
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    name="contactEmail"
                    type="email"
                    required
                    value={formData.contactEmail}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  name="contactPhone"
                  type="tel"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactPhone: e.target.value }))}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  placeholder="+44 (0) 1223 000 000"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="relative group w-full"
          >
            <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
            <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg">
              Submit Questionnaire
            </div>
          </button>
        </form>
      </div>
    </section>
  );
}