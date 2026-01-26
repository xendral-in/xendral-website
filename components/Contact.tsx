import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { countryCodes } from '../utils/countryCodes';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;

      if (!googleSheetsUrl) {
        // Fallback if Google Sheets URL is not configured
        console.warn('Google Sheets URL not configured');
        setTimeout(() => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          setFormData({ name: '', email: '', countryCode: '+91', phone: '', project: '' });
        }, 1000);
        return;
      }

      const response = await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // With no-cors mode, we can't read the response, so assume success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', countryCode: '+91', phone: '', project: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-slate-300">
            Tell us about your project challenges and goals. Let's build something extraordinary together.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-brand-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-200 disabled:opacity-50"
                  placeholder="Rajesh Kumar"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-brand-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-200 disabled:opacity-50"
                  placeholder="rajesh@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Mobile Number</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full sm:w-32 px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-200 disabled:opacity-50 text-sm"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  pattern="[0-9]{10}"
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-brand-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-200 disabled:opacity-50"
                  placeholder="9876543210"
                />
              </div>
            </div>
            <div>
              <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
              <textarea
                id="project"
                name="project"
                rows={4}
                required
                value={formData.project}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-brand-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-200 resize-none disabled:opacity-50"
                placeholder="Tell us about your needs..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 text-black font-bold rounded-lg transform transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-brand-primary/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Thank you! We'll contact you shortly.</span>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">Something went wrong. Please try again.</span>
              </div>
            )}
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <div className="inline-flex items-center text-slate-600 font-medium">
              <Mail className="w-5 h-5 mr-2 text-black" />
              <a href="mailto:xendral.in@gmail.com" className="hover:text-brand-primary transition-colors">xendral.in@gmail.com</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;