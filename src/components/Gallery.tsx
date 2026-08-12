import React from 'react';
import { motion } from 'framer-motion';
import { galleryData } from '../data/gallery';
import { clipPathReveal, staggerContainer } from '../utils/motion';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 sm:py-36 bg-dark-bg text-light relative overflow-hidden border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                06 — TRAINING FLOOR & ATMOSPHERE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase text-light">
              BUILT FOR <span className="text-accent">THE WORK.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-light-muted max-w-md">
            12,000 square feet of competition-grade power racks, specialized turf, sprint lanes, and heavy dumbbell banks.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {galleryData.map((item, idx) => {
            // Asymmetric column spans based on index
            const colSpan =
              idx === 0
                ? 'md:col-span-5'
                : idx === 1
                ? 'md:col-span-7'
                : idx === 2
                ? 'md:col-span-4'
                : idx === 3
                ? 'md:col-span-4'
                : idx === 4
                ? 'md:col-span-4'
                : 'md:col-span-12';

            const heightClass =
              idx === 1 || idx === 5 ? 'h-[320px] sm:h-[420px]' : 'h-[360px] sm:h-[480px]';

            return (
              <motion.div
                key={item.id}
                variants={clipPathReveal}
                className={`${colSpan} relative group overflow-hidden bg-dark-card border border-dark-border`}
                data-cursor="VIEW"
              >
                <div className={`w-full ${heightClass} relative overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-85 contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Card Content Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-light uppercase tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-dark-border bg-dark-bg/80 flex items-center justify-center text-xs font-mono text-light group-hover:border-accent group-hover:text-accent transition-colors">
                      0{idx + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
