import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Check, AlertCircle, Loader2 } from 'lucide-react';

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setStatus('success');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
          company: '',
          phone: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }

    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black mb-6 text-[#FFD700]">Get in Touch</h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to transform your business with AI automation? We're here to help you get started.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16 sm:mb-24">
            {[
              {
                icon: MapPin,
                title: "Visit Our Office",
                details: [
                  "St John's Innovation Centre",
                  "Cowley Road, Cambridge",
                  "CB4 0WS, United Kingdom"
                ],
                action: {
                  label: "View on Map",
                  href: "https://maps.google.com"
                }
              },
              {
                icon: Phone,
                title: "Call Us",
                details: [
                  "+44 (0) 1223 123 456",
                  "Mon-Fri 9AM-6PM GMT",
                  "24/7 AI Support Available"
                ],
                action: {
                  label: "Schedule a Call",
                  href: "#schedule"
                }
              },
              {
                icon: Mail,
                title: "Email Us",
                details: [
                  "contact@xscapevelocity.com",
                  "support@xscapevelocity.com",
                  "Response within 24 hours"
                ],
                action: {
                  label: "Send Email",
                  href: "mailto:contact@xscapevelocity.com"
                }
              }
            ].map((contact, index) => (
              <div
                key={index}
                className="group relative bg-[#111111] rounded-3xl p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-6">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
                      <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
                        <contact.icon className="w-8 h-8 text-black" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">{contact.title}</h3>
                  <div className="space-y-2 mb-6">
                    {contact.details.map((detail, dIndex) => (
                      <p key={dIndex} className="text-gray-400">{detail}</p>
                    ))}
                  </div>
                  <a
                    href={contact.action.href}
                    className="inline-flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all"
                  >
                    {contact.action.label}
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#111111] rounded-3xl p-6 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Send Us a Message</h2>
                <form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Netlify Form Requirements */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="subject" value="New Contact Form Submission - Xscape Velocity" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                        placeholder="+44 (0) 1223 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition-all"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="relative group w-full"
                  >
                    <div className="absolute inset-0 bg-[#FFD700]/80 rounded-xl transform translate-y-1.5"></div>
                    <div className="relative bg-[#FFD700] text-black px-8 py-4 rounded-xl font-medium transform group-hover:-translate-y-1 transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : status === 'success' ? (
                        <>
                          <Check className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : status === 'error' ? (
                        <>
                          <AlertCircle className="w-5 h-5" />
                          Error Sending Message
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="lg:col-span-2">
              <div className="bg-[#111111] rounded-3xl p-6 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">FAQ</h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "How quickly can you start?",
                      a: "We can begin the initial consultation within 24-48 hours of your first contact. Project timelines are discussed during the consultation."
                    },
                    {
                      q: "Do you offer custom solutions?",
                      a: "Yes, we specialize in creating tailored AI automation solutions that match your specific business needs and objectives."
                    },
                    {
                      q: "What industries do you work with?",
                      a: "We work across various industries including e-commerce, finance, healthcare, manufacturing, and more. Our solutions are adaptable to any sector."
                    },
                    {
                      q: "What support do you provide?",
                      a: "We offer 24/7 technical support, regular maintenance, updates, and training for your team to ensure smooth operation of all implemented solutions."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-800 pb-6">
                      <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                      <p className="text-gray-400">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}