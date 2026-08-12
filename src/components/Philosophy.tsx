import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/motion';

export const Philosophy: React.FC = () => {
  const principles = [
    {
      number: "01",
      title: "TRAIN SMART",
      description: "Biomechanical precision over mindless exertion. Every exercise, tempo, and rest period is calculated for optimal adaptation."
    },
    {
      number: "02",
      title: "TRAIN HARD",
      description: "Effort cannot be faked. We create a high-accountability environment where you push past your self-imposed limits daily."
    },
    {
      number: "03",
      title: "STAY CONSISTENT",
      description: "Intensity creates headlines, consistency creates physical transformation. Small daily executions compound into undeniable results."
    }
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-36 bg-dark-surface text-light relative overflow-hidden border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                03 — WHY JS FITNESS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase text-light">
              TRAIN WITH <span className="text-accent">PURPOSE.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-light-muted max-w-md">
            Our training methodology rejects trend fitness. We ground every workout in biomechanics, progressive loading, and intense accountability.
          </p>
        </div>

        {/* Asymmetric Layout: Image Left / Principles Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Asymmetric Large Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
            data-cursor="TRAIN HARD"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-dark-card border border-dark-border">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000"
                alt="JS FITNESS Training Floor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-125"
              />
              
              {/* Overlay Accent Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-dark-bg/90 backdrop-blur-md border border-dark-border flex items-center justify-between">
                <span className="text-xs font-display font-bold uppercase tracking-wider text-light">
                  ATHLETIC STANDARDS
                </span>
                <span className="text-xs font-mono text-accent font-bold">100% PURPOSE</span>
              </div>
            </div>

            {/* Decorative Corner Accent */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-accent pointer-events-none" />
          </motion.div>

          {/* 3 Principles Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col gap-8 sm:gap-12"
          >
            {principles.map((item) => (
              <motion.div
                key={item.number}
                variants={fadeInUp}
                className="p-6 sm:p-8 bg-dark-card/60 border border-dark-border hover:border-accent/60 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
                  {/* Expanding Hover Number */}
                  <span className="font-display font-extrabold text-4xl sm:text-6xl text-accent/40 group-hover:text-accent group-hover:scale-110 transition-all duration-300 inline-block font-mono">
                    {item.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-light uppercase mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-light-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
