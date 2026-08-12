import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Zap } from 'lucide-react';
import { programsData } from '../data/programs';
import { getProgramWhatsAppLink } from '../utils/whatsapp';

export const Programs: React.FC = () => {
  const [activeId, setActiveId] = useState(programsData[0].id);
  const activeProgram = programsData.find((p) => p.id === activeId) || programsData[0];

  return (
    <section id="programs" className="py-24 sm:py-36 bg-dark-bg text-light relative overflow-hidden border-b border-dark-border">
      
      {/* Background Accent Mesh */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-20">
          <div className="max-w-[650px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                04 — TRAINING ARCHITECTURE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase text-light">
              CORE <span className="text-stroke-accent">PROGRAMS.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-light-muted max-w-[450px]">
            Six targeted protocols engineered for muscle building, fat loss, athletic stamina, and 1-on-1 physical coaching.
          </p>
        </div>

        {/* Desktop Interactive Layout (List Left / Large Preview Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Program Selection List (Left Column) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {programsData.map((prog) => {
              const isActive = prog.id === activeId;
              return (
                <button
                  key={prog.id}
                  onClick={() => setActiveId(prog.id)}
                  onMouseEnter={() => setActiveId(prog.id)}
                  className={`w-full text-left p-5 sm:p-6 transition-all duration-300 relative border flex items-center justify-between group ${
                    isActive
                      ? 'bg-dark-card border-accent shadow-[0_0_20px_rgba(225,6,0,0.15)]'
                      : 'bg-dark-surface/60 border-dark-border hover:border-dark-border/80 hover:bg-dark-surface'
                  }`}
                  data-cursor="SELECT"
                >
                  {/* Left Active Line Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeProgramIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                        isActive ? 'text-accent' : 'text-light-muted group-hover:text-light'
                      }`}
                    >
                      {prog.number}
                    </span>
                    <span
                      className={`font-display font-extrabold text-base sm:text-lg tracking-wider uppercase transition-colors ${
                        isActive ? 'text-light' : 'text-light-muted group-hover:text-light'
                      }`}
                    >
                      {prog.name}
                    </span>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 transition-all duration-300 ${
                      isActive
                        ? 'text-accent translate-x-1 -translate-y-1'
                        : 'text-dark-border group-hover:text-light-muted'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Program Preview Box (Right Column) */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProgram.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-card border border-dark-border p-6 sm:p-10 relative overflow-hidden"
              >
                {/* Image Showcase with Scale Animation */}
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-dark-bg border border-dark-border mb-8 group" data-cursor="EXPLORE">
                  <img
                    src={activeProgram.image}
                    alt={activeProgram.name}
                    className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-dark-bg/90 border border-dark-border px-3 py-1 text-[10px] font-mono font-bold text-accent uppercase">
                    {activeProgram.category}
                  </div>

                  <div className="absolute bottom-4 right-4 bg-dark-bg/90 border border-dark-border px-3 py-1 text-[10px] font-mono font-bold text-light uppercase">
                    INTENSITY: {activeProgram.intensity}
                  </div>
                </div>

                {/* Title & Full Description */}
                <div className="flex items-center gap-3 text-xs font-mono text-accent font-bold mb-2">
                  <Zap className="w-4 h-4" />
                  <span>PROTOCOL {activeProgram.number} // DURATION: {activeProgram.duration}</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-4xl tracking-tight text-light uppercase mb-4">
                  {activeProgram.name}
                </h3>

                <p className="text-sm sm:text-base text-light-muted leading-relaxed mb-8">
                  {activeProgram.fullDescription}
                </p>

                {/* Key Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-6 border-t border-dark-border">
                  {activeProgram.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-light">
                      <div className="w-4 h-4 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Program WhatsApp CTA */}
                <a
                  href={getProgramWhatsAppLink(activeProgram.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-accent text-light py-4 px-6 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(225,6,0,0.3)]"
                  data-cursor="ENQUIRE"
                >
                  <span>EXPLORE {activeProgram.name} VIA WHATSAPP</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
