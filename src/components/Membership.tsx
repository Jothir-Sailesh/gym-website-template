import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { membershipData } from '../data/membership';
import { fadeInUp, staggerContainer } from '../utils/motion';
import { getMembershipWhatsAppLink } from '../utils/whatsapp';

export const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-24 sm:py-36 bg-dark-bg text-light relative overflow-hidden border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div className="max-w-[650px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                10 — STUDIO ADMISSION & MEMBERSHIP
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase text-light">
              INVEST IN <span className="text-accent">YOURSELF.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-light-muted max-w-[450px]">
            Flexible plans, quarterly athlete cohorts, and annual membership tiers with exclusive savings.
          </p>
        </div>

        {/* Membership Tier Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {membershipData.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeInUp}
              className={`p-6 sm:p-8 bg-dark-card border flex flex-col justify-between relative transition-all duration-300 group hover:-translate-y-1.5 ${
                plan.popular
                  ? 'border-accent shadow-[0_0_30px_rgba(225,6,0,0.2)] bg-dark-card'
                  : 'border-dark-border hover:border-accent/80'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`self-start px-3 py-1 text-[10px] font-mono font-extrabold tracking-widest uppercase mb-6 flex items-center gap-1.5 ${
                    plan.popular
                      ? 'bg-accent text-light font-bold shadow-[0_0_10px_rgba(225,6,0,0.4)]'
                      : 'bg-dark-surface border border-accent text-accent'
                  }`}
                >
                  {plan.popular && <Sparkles className="w-3 h-3 text-light" />}
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Plan Duration */}
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-light uppercase mb-4 tracking-tight">
                  {plan.duration}
                </h3>

                {/* Price Hierarchy */}
                <div className="mb-6">
                  {/* Regular Price Strikethrough */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-mono text-light-muted/60 line-through">
                      {plan.regularPrice}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 uppercase">
                      {plan.savings}
                    </span>
                  </div>

                  {/* Dominant Offer Price */}
                  <span className="font-display font-extrabold text-4xl sm:text-5xl text-light block leading-none tracking-tight">
                    {plan.offerPrice}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-dark-border mb-6" />

                {/* Generic Configurable Benefits List */}
                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-light-muted font-medium">
                      <div className="w-4 h-4 rounded-full bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button -> Direct WhatsApp Message */}
              <a
                href={getMembershipWhatsAppLink(plan.duration)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 font-display font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-accent text-light hover:bg-accent-hover shadow-[0_0_15px_rgba(225,6,0,0.3)]'
                    : 'bg-dark-surface border border-dark-border text-light hover:border-accent hover:text-accent'
                }`}
                data-cursor="JOIN"
              >
                <span>{plan.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
