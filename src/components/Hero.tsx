import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { businessConfig } from '../data/business';
import { getTrialWhatsAppLink } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  // Scroll animations for cinematic hero scaling & movement
  const imageScale = useTransform(scrollY, [0, 800], [1.08, 1.0]);
  const textY = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-dark-bg flex items-center justify-center">
      {/* Background Cinematic Image with Parallax & Scale */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale: imageScale }}
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=90&w=2000"
          alt="Athlete Training at JS FITNESS"
          className="w-full h-full object-cover object-center filter brightness-75 contrast-125"
        />
        
        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/90 via-dark-bg/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)]" />
      </motion.div>

      {/* Grid line accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:6rem_100%] pointer-events-none" />

      {/* Hero Content Container */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 pb-12 flex flex-col justify-between h-full max-h-[850px]"
      >
        {/* Top Metadata Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-dark-card/80 border border-dark-border px-3.5 py-1.5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] sm:text-xs font-extrabold tracking-widest text-light uppercase">
              HIGH-PERFORMANCE TRAINING STUDIO
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center gap-6 text-xs text-light-muted font-mono"
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>{businessConfig.city.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>{businessConfig.openingHours}</span>
            </div>
          </motion.div>
        </div>

        {/* Main Display Headline & Supporting Copy */}
        <div className="my-auto max-w-[800px] pt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="overflow-hidden"
          >
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.92] text-light mb-6">
              DISCIPLINE <br />
              <span className="text-stroke-accent">CREATES</span> <br />
              <span className="text-accent">RESULTS.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base sm:text-xl text-light-muted font-normal max-w-xl text-balance leading-relaxed mb-8 sm:mb-10"
          >
            {businessConfig.heroSubheadline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href={getTrialWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-light px-8 py-4 sm:py-5 font-sans font-bold text-sm sm:text-base tracking-wider uppercase hover:bg-accent-hover transition-all flex items-center justify-center gap-3 group shadow-[0_0_25px_rgba(225,6,0,0.35)]"
              data-cursor="FREE TRIAL"
            >
              <span>START YOUR FREE TRIAL</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href="#programs"
              className="border border-dark-border bg-dark-bg/40 backdrop-blur-md text-light px-8 py-4 sm:py-5 font-sans font-bold text-sm sm:text-base tracking-wider uppercase hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-2 group"
            >
              <span>EXPLORE PROGRAMS</span>
              <ArrowDown className="w-4 h-4 text-accent group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Hero Footer Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-between border-t border-dark-border/60 pt-6 text-xs text-light-muted font-mono"
        >
          <span className="hidden sm:inline-block">01 / 06 — FOUNDATION PROTOCOL</span>
          
          <div className="flex items-center gap-2 text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span className="uppercase text-[10px] tracking-widest font-sans font-bold">SCROLL TO DISCOVER</span>
          </div>

          <span className="font-bold text-light">JS FITNESS © 2026</span>
        </motion.div>
      </motion.div>
    </section>
  );
};
