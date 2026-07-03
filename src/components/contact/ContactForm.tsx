'use client';

import { submitContactForm } from '@/src/actions/contact';
import { useState } from 'react';
import { Send, Loader2, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setMessage({ type: 'success', text: 'Thank you! We will get back to you soon.' });
        form.reset();
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to submit form. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={`pt-24 pb-24 bg-zinc-50 min-h-[90vh] ${inter.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-800 font-bold tracking-widest text-sm mb-4 uppercase">
            Let's Connect
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tight">
            Schedule a Pickup
          </h1>
          <p className="text-zinc-600 text-lg leading-relaxed">
            Have questions about our e-waste recycling services? Want to schedule a pickup?
            We're here to help make your electronics disposal process seamless and sustainable.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start bg-white rounded-3xl shadow-xl shadow-zinc-200/50 overflow-hidden ring-1 ring-zinc-100">
          
          {/* Left - Contact Info Panel */}
          <div className="lg:col-span-2 bg-emerald-900 p-10 md:p-12 text-white h-full relative overflow-hidden flex flex-col justify-between">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-900/50 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-800/50 p-3 rounded-full border border-emerald-700/50 shrink-0">
                    <MapPin className="text-emerald-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-50 mb-1">Visit Us</h4>
                    <p className="text-emerald-100/70 text-sm leading-relaxed">
                      Office No-01, Amaryllis Domkhel Rd,<br />Wagholi, Pune, Maharashtra 412207
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-800/50 p-3 rounded-full border border-emerald-700/50 shrink-0">
                    <Phone className="text-emerald-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-50 mb-1">Call Us</h4>
                    <p className="text-emerald-100/70 text-sm">
                      +91 9763123699
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-800/50 p-3 rounded-full border border-emerald-700/50 shrink-0">
                    <Mail className="text-emerald-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-50 mb-1">Email Us</h4>
                    <p className="text-emerald-100/70 text-sm">
                      info@dmdgreentechrevive.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-800/50 p-3 rounded-full border border-emerald-700/50 shrink-0">
                    <Clock className="text-emerald-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-50 mb-1">Working Hours</h4>
                    <p className="text-emerald-100/70 text-sm">
                      Mon-Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3 p-10 md:p-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:border-transparent focus:bg-white outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    disabled={isSubmitting}
                    className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:border-transparent focus:bg-white outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="+91 9763123699"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-zinc-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  disabled={isSubmitting}
                  className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:border-transparent focus:bg-white outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder="123 Green Street, Pune"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:border-transparent focus:bg-white outline-none transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder="Tell us about your e-waste disposal needs..."
                />
              </div>

              {message && (
                <div className={`p-4 rounded-xl flex items-center gap-3 ${message.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                  {message.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-emerald-800 text-white px-10 py-4 rounded-xl hover:bg-emerald-900 transition-all duration-300 font-semibold flex items-center justify-center gap-3 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
