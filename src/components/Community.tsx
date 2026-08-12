import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Flame, Trophy } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/motion';

export const Community: React.FC = () => {
  const pillars = [
    {
      icon: Users,
      title: "SQUAD CULTURE",
      desc: "Train alongside individuals who demand excellence. Zero ego, maximum drive."
    },
    {
      icon: Flame,
      title: "UNMATCHED ATMOSPHERE",
      desc: "Custom audio acoustics, dramatic lighting, and focused athletic energy."
    },
    {
      icon: Trophy,
      title: "TRACKED PROGRESSION",
      desc: "Regular biometric screenings and benchmark performance leaderboards."
    },
    {
      icon: ShieldCheck,
      title: "RECOVERY ECOSYSTEM",
      desc: "Dedicated recovery zones, cold plunge protocols, and mobility lanes."
    }
  ];

  return (
    <section className="py-24 sm:py-36 bg-dark-surface text-light relative overflow-hidden border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Pillars */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                11 — THE JS ENVIRONMENT
              </span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase text-light mb-6">
              MORE THAN <br />
              <span className="text-accent">A GYM.</span>
            </h2>

            <p className="text-base sm:text-lg text-light-muted leading-relaxed mb-10 text-balance">
              JS FITNESS was engineered to break the mold of commercial gym culture. We foster a tight-knit community of athletes, professionals, and dedicated individuals bound by a commitment to self-mastery.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {pillars.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="p-5 bg-dark-card border border-dark-border"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-extrabold text-base uppercase text-light mb-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-light-muted leading-relaxed">
                      {p.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Hero Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-dark-bg border border-dark-border group">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000"
                alt="JS FITNESS Community Training"
                className="w-full h-full object-cover filter brightness-90 contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-accent text-dark-bg p-6 sm:p-8 font-display font-extrabold max-w-xs shadow-2xl hidden sm:block">
              <span className="text-4xl block leading-none mb-1 font-mono">100%</span>
              <span className="text-xs tracking-wider uppercase block">DEDICATED COMMUNITY</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
