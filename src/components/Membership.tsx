import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { membershipData } from '../data/membership';
import { fadeInUp, staggerContainer } from '../utils/motion';
import { getWhatsAppLink } from '../utils/whatsapp';

export const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-24 sm:py-36 bg-dark-bg text-light relative overflow-hidden border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                10 — STUDIO ADMISSION & MEMBERSHIP
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase text-light">
              INVEST IN <span className="text-accent">YOURSELF.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-light-muted max-w-md">
            Flexible passes, quarterly athlete cohorts, annual mastery tiers, and dedicated 1-on-1 coaching packages.
          </p>
        </div>

        {/* Membership Tier Grid */}
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
              className={`p-6 sm:p-8 bg-dark-card border flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'border-accent shadow-[0_0_30px_rgba(199,240,0,0.15)] bg-dark-card'
                  : 'border-dark-border hover:border-dark-border/80'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`self-start px-3 py-1 text-[10px] font-mono font-extrabold tracking-widest uppercase mb-6 flex items-center gap-1.5 ${
                    plan.popular
                      ? 'bg-accent text-dark-bg'
                      : 'bg-dark-surface border border-dark-border text-accent'
                  }`}
                >
                  {plan.popular && <Sparkles className="w-3 h-3" />}
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <h3 className="font-display font-extrabold text-2xl text-light uppercase mb-2">
                  {plan.name}
                </h3>

                <div className="mb-6">
                  <span className="font-display font-extrabold text-xl sm:text-2xl text-accent block">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono text-light-muted uppercase">
                    {plan.period}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-dark-border mb-6" />

                {/* Features List */}
                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-light-muted">
                      <div className="w-4 h-4 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppLink(`Hi JS FITNESS, I want details regarding the ${plan.name} plan.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 font-display font-extrabold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-accent text-dark-bg hover:bg-accent-hover'
                    : 'bg-dark-surface border border-dark-border text-light hover:border-accent hover:text-accent'
                }`}
                data-cursor="ENQUIRE"
              >
                <span>{plan.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
