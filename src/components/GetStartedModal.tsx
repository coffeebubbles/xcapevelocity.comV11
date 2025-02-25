import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Zap, Brain, Settings, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalStatus {
  open: boolean;
  success: boolean;
  message: string;
}

const StatusModal: React.FC<{ status: ModalStatus; onClose: () => void }> = ({ status, onClose }) => {
  if (!status.open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-[#111111] rounded-3xl p-8 max-w-md w-full mx-4 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
        <div className="text-center">
          {status.success ? (
            <Check className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />
          ) : (
            <X className="w-16 h-16 text-red-500 mx-auto mb-4" />
          )}
          <h2 className="text-2xl font-bold text-white mb-2">
            {status.success ? 'Success!' : 'Submission Failed'}
          </h2>
          <p className="text-gray-400">{status.message}</p>
        </div>
      </div>
    </div>
  );
};

export function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [step, setStep] = useState(1);
  const [modalStatus, setModalStatus] = useState<ModalStatus>({ open: false, success: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessType: '',
    needs: [] as string[],
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    agreedToReceiveCommunications: false,
    "bot-field": ""
  });

  if (!isOpen) return null;

  const needs = [
    { icon: Zap, title: "Process Automation", description: "Streamline workflows and reduce manual tasks" },
    { icon: Brain, title: "AI Integration", description: "Add intelligent features to your systems" },
    { icon: Settings, title: "Custom Solutions", description: "Tailored AI solutions for unique challenges" }
  ];

  const handleNeedToggle = (need: string) => {
    setFormData(prev => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need]
    }));
  };

  const handleFinalSubmit = async () => {
    if (formData["bot-field"]) return;

    setIsSubmitting(true);

    const { error } = await supabase
      .from('get_started_requests')
      .insert({
        business_type: formData.businessType,
        needs: formData.needs,
        budget: formData.budget,
        timeline: formData.timeline,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        agreed_to_receive_communications: formData.agreedToReceiveCommunications,
      });

    if (error) {
      setModalStatus({
        open: true,
        success: false,
        message: error.message || 'An error occurred while submitting your request.',
      });
    } else {
      setModalStatus({
        open: true,
        success: true,
        message: 'Your request was submitted successfully!',
      });
    }
    setIsSubmitting(false);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Tell us about your business</h2>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                What type of business do you run?
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              >
                <option value="">Select business type</option>
                <option value="startup">Startup</option>
                <option value="small">Small Business</option>
                <option value="medium">Medium Enterprise</option>
                <option value="large">Large Enterprise</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-4">
                What are your primary needs?
              </label>
              <div className="grid grid-cols-3 gap-4">
                {needs.map((need, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleNeedToggle(need.title)}
                    className={`p-4 rounded-xl border-2 transition-all ${formData.needs.includes(need.title)
                        ? 'border-[#FFD700] bg-[#FFD700]/10'
                        : 'border-gray-800 hover:border-gray-700'
                      }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <need.icon className={`w-8 h-8 mb-2 ${formData.needs.includes(need.title) ? 'text-[#FFD700]' : 'text-gray-400'}`} />
                      <div className="text-white font-medium mb-1">{need.title}</div>
                      <div className="text-sm text-gray-400">{need.description}</div>
                    </div>
                  </button>
                ))}
              </div>
              <input type="hidden" name="needs" value={formData.needs.join(', ')} />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                What's your estimated budget?
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              >
                <option value="">Select budget range</option>
                <option value="500-3000">£500 - £3,000</option>
                <option value="3000-5000">£3,000 - £5,000</option>
                <option value="5k-10k">£5,000 - £10,000</option>
                <option value="10k-25k">£10,000 - £25,000</option>
                <option value="25k-50k">£25,000 - £50,000</option>
                <option value="50k+">£50,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                What's your desired timeline?
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              >
                <option value="">Select timeline</option>
                <option value="1-2">1-2 months</option>
                <option value="3-6">3-6 months</option>
                <option value="6-12">6-12 months</option>
                <option value="12+">12+ months</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Additional Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                placeholder="Tell us more about your project..."
              ></textarea>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                placeholder="+44 (0) 1223 000 000"
              />
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    name="agreedToReceiveCommunications"
                    checked={formData.agreedToReceiveCommunications}
                    onChange={(e) =>
                      setFormData(prev => ({
                        ...prev,
                        agreedToReceiveCommunications: e.target.checked,
                      }))
                    }
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border-2 border-gray-600 rounded peer-checked:bg-[#FFD700] peer-checked:border-[#FFD700] transition-all"></div>
                  <Check className="w-3 h-3 text-black absolute left-1 top-1 opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-gray-300">
                  I agree to receive communications about Xscape Velocity's products, services, and events. I can unsubscribe at any time.
                </span>
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <form name="getStartedModal" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="businessType" />
        <input type="text" name="needs" />
        <input type="text" name="budget" />
        <input type="text" name="timeline" />
        <input type="text" name="message" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="checkbox" name="agreedToReceiveCommunications" />
      </form>

      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-[#111111] rounded-3xl p-8 max-w-3xl w-full mx-4 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
          <form name="getStartedModal" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="getStartedModal" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human:{" "}
                <input
                  name="bot-field"
                  onChange={(e) =>
                    setFormData(prev => ({ ...prev, "bot-field": e.target.value }))
                  }
                />
              </label>
            </p>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-white">Get Started with AI Automation</h1>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-3 h-3 rounded-full ${s === step ? 'bg-[#FFD700]' : 'bg-gray-700'}`}
                    ></div>
                  ))}
                </div>
              </div>

              {renderStep()}

              <div className="flex items-center justify-between mt-8">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous Step
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
                    <div className="relative bg-[#FFD700] text-black px-6 py-3 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center gap-2">
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                ) : (<button
                  type="button"
                  onClick={handleFinalSubmit}
                  disabled={isSubmitting}
                  className={`relative group flex items-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
                  <div className="relative bg-[#FFD700] text-black px-6 py-3 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </div>
                </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <StatusModal status={modalStatus} onClose={() => setModalStatus(prev => ({ ...prev, open: false }))} />
    </>
  );
}
