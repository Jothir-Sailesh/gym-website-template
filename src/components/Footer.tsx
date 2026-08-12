import React from 'react';
import { ArrowUpRight, Instagram, Facebook, Youtube, MessageSquare, Phone, MapPin } from 'lucide-react';
import { businessConfig } from '../data/business';
import { getPhoneCallLink, getTrialWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg text-light pt-24 pb-12 border-t border-dark-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-dark-border">
          
          {/* Brand Info (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#hero" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent text-dark-bg font-display font-extrabold text-2xl flex items-center justify-center tracking-tighter">
                  {businessConfig.shortName}
                </div>
                <span className="font-display font-extrabold text-3xl tracking-wider text-light">
                  {businessConfig.brandName}
                </span>
              </a>

              <p className="text-sm sm:text-base text-light-muted max-w-sm leading-relaxed mb-8">
                {businessConfig.tagline} — High-performance strength & conditioning studio grounded in athletic biomechanics and unyielding discipline.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={businessConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-light-muted hover:text-accent hover:border-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={businessConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-light-muted hover:text-accent hover:border-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={businessConfig.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-light-muted hover:text-accent hover:border-accent transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-dark-border/40">
              <a
                href={getTrialWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase hover:underline"
              >
                <MessageSquare className="w-4 h-4" />
                <span>BOOK TRIAL VIA WHATSAPP →</span>
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase block mb-6">
              NAVIGATION
            </span>
            <ul className="flex flex-col gap-3 text-sm font-bold tracking-wider text-light-muted">
              <li>
                <a href="#hero" className="hover:text-accent transition-colors uppercase">HOME</a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-accent transition-colors uppercase">MANIFESTO</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-accent transition-colors uppercase">PROGRAMS</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-accent transition-colors uppercase">MASTER COACHES</a>
              </li>
              <li>
                <a href="#results" className="hover:text-accent transition-colors uppercase">RESULTS & TRANSFORMATION</a>
              </li>
              <li>
                <a href="#membership" className="hover:text-accent transition-colors uppercase">MEMBERSHIP PASSES</a>
              </li>
              <li>
                <a href="#location" className="hover:text-accent transition-colors uppercase">STUDIO LOCATION</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors uppercase">CONTACT & TRIAL</a>
              </li>
            </ul>
          </div>

          {/* Quick Info Column */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase block mb-6">
              STUDIO INFO
            </span>

            <div className="space-y-4 text-xs font-mono text-light-muted mb-8">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>{businessConfig.address}, {businessConfig.city}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={getPhoneCallLink()} className="hover:text-accent transition-colors">{businessConfig.phone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{businessConfig.email}</span>
              </div>
            </div>

            <div className="p-4 bg-dark-card border border-dark-border">
              <span className="text-[10px] font-mono text-accent uppercase block font-bold mb-1">
                STUDIO HOURS
              </span>
              <span className="text-xs text-light block">{businessConfig.openingHours}</span>
              <span className="text-xs text-light-muted block">{businessConfig.sundayHours}</span>
            </div>
          </div>

        </div>

        {/* Oversized Brand Campaign Text */}
        <div className="pt-16 pb-10 overflow-hidden select-none">
          <h2 className="font-display font-extrabold text-[12vw] sm:text-[14vw] tracking-tighter leading-none uppercase text-dark-surface/80 text-center whitespace-nowrap">
            {businessConfig.brandName}
          </h2>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-dark-border/40 text-xs font-mono text-light-muted">
          <span>© {new Date().getFullYear()} {businessConfig.brandName} STUDIO. ALL RIGHTS RESERVED.</span>
          
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-accent transition-colors flex items-center gap-1">
              <span>BACK TO TOP</span>
              <ArrowUpRight className="w-3.5 h-3.5 -rotate-45" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
