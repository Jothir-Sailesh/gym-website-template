import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { getFormSubmissionWhatsAppLink, getWhatsAppLink } from '../utils/whatsapp';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'STRENGTH',
    message: ''
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goalOptions = [
    'STRENGTH & HYPERTROPHY',
    'FAT LOSS & SHRED',
    'ATHLETIC CONDITIONING',
    '1-ON-1 PERSONAL TRAINING',
    'FUNCTIONAL FITNESS',
    'OTHER / GENERAL ENQUIRY'
  ];

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 8) newErrors.phone = 'Valid phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-dark-surface text-light relative overflow-hidden border-b border-dark-border">
      
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
              15 — TAKE ACTION
            </span>
            <span className="w-8 h-[2px] bg-accent" />
          </div>

          <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase text-light mb-4">
            START <span className="text-accent">TODAY.</span>
          </h2>

          <p className="text-base sm:text-xl text-light-muted max-w-lg mx-auto font-normal text-balance">
            Your strongest version doesn't happen by accident. Submit your enquiry below to schedule your studio walkthrough and assessment.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-dark-card border border-dark-border p-6 sm:p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Full Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-light-muted mb-2">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-dark-bg border ${
                        errors.name ? 'border-red-500' : 'border-dark-border focus:border-accent'
                      } px-4 py-3.5 text-sm text-light placeholder-light-muted/50 focus:outline-none transition-colors font-sans`}
                    />
                    {errors.name && (
                      <span className="text-[10px] font-mono text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-light-muted mb-2">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-dark-bg border ${
                        errors.phone ? 'border-red-500' : 'border-dark-border focus:border-accent'
                      } px-4 py-3.5 text-sm text-light placeholder-light-muted/50 focus:outline-none transition-colors font-sans`}
                    />
                    {errors.phone && (
                      <span className="text-[10px] font-mono text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Primary Training Goal Pills */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-light-muted mb-3">
                    PRIMARY TRAINING GOAL
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {goalOptions.map((goal) => {
                      const isSelected = formData.goal === goal;
                      return (
                        <button
                          type="button"
                          key={goal}
                          onClick={() => setFormData({ ...formData, goal })}
                          className={`p-3 text-left border text-xs font-mono font-bold transition-all uppercase ${
                            isSelected
                              ? 'bg-accent text-light border-accent font-extrabold shadow-[0_0_10px_rgba(225,6,0,0.3)]'
                              : 'bg-dark-bg text-light-muted border-dark-border hover:border-light-muted'
                          }`}
                        >
                          {goal}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-light-muted mb-2">
                    ADDITIONAL NOTES / QUESTIONS (OPTIONAL)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your training experience or current goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-dark-bg border border-dark-border focus:border-accent px-4 py-3.5 text-sm text-light placeholder-light-muted/50 focus:outline-none transition-colors font-sans"
                  />
                </div>

                {/* Submit Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 bg-accent text-light py-4 px-8 font-display font-extrabold text-sm tracking-wider uppercase hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(225,6,0,0.3)]"
                    data-cursor="SUBMIT"
                  >
                    <span>SEND ENQUIRY</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </button>

                  <a
                    href={getWhatsAppLink('Hi JS FITNESS, I would like to book a studio walkthrough.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto border border-dark-border bg-dark-bg text-light py-4 px-6 font-display font-bold text-xs tracking-wider uppercase hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-accent" />
                    <span>INSTANT WHATSAPP</span>
                  </a>
                </div>
              </motion.form>
            ) : (
              /* Success Dialog View */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-light uppercase mb-2">
                  ENQUIRY RECEIVED
                </h3>

                <p className="text-sm sm:text-base text-light-muted max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you, <span className="text-light font-bold">{formData.name}</span>. Your enquiry for <span className="text-accent font-bold">{formData.goal}</span> has been logged.
                </p>

                <div className="p-4 bg-dark-bg border border-dark-border max-w-md w-full mb-8 text-left text-xs font-mono text-light-muted space-y-1">
                  <div>NAME: {formData.name}</div>
                  <div>PHONE: {formData.phone}</div>
                  <div>GOAL: {formData.goal}</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                  <a
                    href={getFormSubmissionWhatsAppLink(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-accent text-light px-8 py-4 font-display font-extrabold text-xs tracking-wider uppercase hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(225,6,0,0.3)]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>CONTINUE ON WHATSAPP →</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', goal: 'STRENGTH', message: '' });
                    }}
                    className="text-xs font-mono text-light-muted hover:text-light underline"
                  >
                    Submit Another Response
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
