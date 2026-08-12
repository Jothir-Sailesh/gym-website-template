import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import { trainersData } from '../data/trainers';
import { fadeInUp, staggerContainer } from '../utils/motion';
import { getWhatsAppLink } from '../utils/whatsapp';

export const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-24 sm:py-36 bg-dark-surface text-light relative overflow-hidden border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                07 — MASTER COACHES
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase text-light">
              LEAD BY <span className="text-accent">EXAMPLE.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-light-muted max-w-md">
            Our coaches are physical practitioners first. High-level technical knowledge combined with unrelenting personal discipline.
          </p>
        </div>

        {/* Trainers Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {trainersData.map((trainer) => (
            <motion.div
              key={trainer.id}
              variants={fadeInUp}
              className="bg-dark-card border border-dark-border group relative overflow-hidden flex flex-col justify-between"
              data-cursor="COACH"
            >
              {/* Portrait Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-dark-bg">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover filter brightness-90 contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-90" />

                {/* Experience Pill */}
                <div className="absolute top-4 right-4 bg-dark-bg/90 border border-dark-border px-3 py-1 text-[10px] font-mono font-bold text-accent">
                  {trainer.experience}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block mb-1">
                    {trainer.role}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-light uppercase mb-2">
                    {trainer.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-light-muted mb-4">
                    <Award className="w-3.5 h-3.5 text-accent" />
                    <span>{trainer.specialization}</span>
                  </div>
                  <p className="text-xs text-light-muted leading-relaxed mb-6 italic">
                    "{trainer.quote}"
                  </p>
                </div>

                <a
                  href={getWhatsAppLink(`Hi JS FITNESS, I would like to book a 1-on-1 consultation with ${trainer.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-dark-bg border border-dark-border text-light group-hover:border-accent group-hover:text-accent font-display font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <span>BOOK COACH</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
