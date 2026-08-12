import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[activeIdx];

  return (
    <section className="py-24 sm:py-36 bg-dark-surface text-light relative overflow-hidden border-b border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
              13 — ATHLETE FEEDBACK
            </span>
            <span className="w-8 h-[2px] bg-accent" />
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tighter uppercase text-light">
            MEMBER <span className="text-accent">STORIES.</span>
          </h2>
        </div>

        {/* Carousel Showcase */}
        <div className="relative bg-dark-card border border-dark-border p-8 sm:p-14 overflow-hidden">
          <Quote className="absolute top-6 right-6 w-20 h-20 text-dark-border/40 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-accent mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-sans text-lg sm:text-2xl text-light leading-relaxed font-normal mb-8 italic">
                "{current.quote}"
              </blockquote>

              {/* Member Details */}
              <div className="flex items-center gap-4 border-t border-dark-border pt-6">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover border border-accent"
                />
                <div>
                  <h3 className="font-display font-extrabold text-lg text-light uppercase leading-none mb-1">
                    {current.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-mono text-light-muted">
                    <span className="text-accent">{current.program}</span>
                    <span>•</span>
                    <span>{current.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 justify-end mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-dark-border bg-dark-bg text-light hover:border-accent hover:text-accent transition-colors flex items-center justify-center"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-dark-border bg-dark-bg text-light hover:border-accent hover:text-accent transition-colors flex items-center justify-center"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
