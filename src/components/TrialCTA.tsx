import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { getTrialWhatsAppLink, getWhatsAppLink } from '../utils/whatsapp';

export const TrialCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-dark-card text-light relative overflow-hidden border-b border-dark-border">
      {/* Dynamic Animated Pulse Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,6,0,0.12)_0%,transparent_70%)] animate-pulse-subtle pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
            COMPLIMENTARY FIRST SESSION
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-light leading-[0.92] mb-6"
        >
          READY TO <br />
          <span className="text-accent">START?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl text-light-muted font-normal max-w-xl mx-auto mb-10 text-balance"
        >
          Your first session starts with one decision. Experience our studio environment, coaching standard, and facility firsthand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={getTrialWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-accent text-light px-9 py-5 font-display font-extrabold text-base tracking-wider uppercase hover:bg-accent-hover transition-colors flex items-center justify-center gap-3 group shadow-[0_0_30px_rgba(225,6,0,0.35)]"
            data-cursor="BOOK TRIAL"
          >
            <span>BOOK A FREE TRIAL</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href={getWhatsAppLink('Hi JS FITNESS, I have a quick question before booking a trial.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-dark-border bg-dark-bg/60 text-light px-8 py-5 font-display font-bold text-base tracking-wider uppercase hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2 group"
          >
            <MessageSquare className="w-4 h-4 text-accent" />
            <span>WHATSAPP US</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
