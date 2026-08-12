import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { businessConfig } from '../data/business';
import { getTrialWhatsAppLink, getPhoneCallLink } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'MANIFESTO', href: '#manifesto' },
    { name: 'PROGRAMS', href: '#programs' },
    { name: 'TRAINERS', href: '#trainers' },
    { name: 'RESULTS', href: '#results' },
    { name: 'MEMBERSHIP', href: '#membership' },
    { name: 'LOCATION', href: '#location' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-bg/85 backdrop-blur-md border-b border-dark-border py-4 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group"
            data-cursor="JS FITNESS"
          >
            <div className="w-10 h-10 bg-accent text-dark-bg font-display font-extrabold text-xl flex items-center justify-center tracking-tighter group-hover:scale-105 transition-transform duration-200">
              {businessConfig.shortName}
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-light leading-none">
                {businessConfig.brandName}
              </span>
              <span className="text-[9px] font-bold tracking-widest text-accent uppercase mt-0.5">
                STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-widest text-light/80 hover:text-accent transition-colors py-1 relative group uppercase"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getPhoneCallLink()}
              className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-light-muted hover:text-accent hover:border-accent transition-colors"
              title="Call Us"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={getTrialWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-light px-5 py-2.5 font-sans font-bold text-xs tracking-wider uppercase hover:bg-accent-hover transition-colors flex items-center gap-1.5 shadow-[0_0_15px_rgba(225,6,0,0.3)]"
              data-cursor="JOIN NOW"
            >
              <span>START TRAINING</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 text-light hover:text-accent focus:outline-none z-[110]"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-accent" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[95] bg-dark-bg/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto"
          >
            {/* Background Branding Watermark */}
            <div className="absolute -bottom-10 -right-10 text-[120px] sm:text-[180px] font-display font-extrabold text-dark-surface/40 select-none pointer-events-none tracking-tighter">
              {businessConfig.shortName}
            </div>

            <div className="pt-20">
              <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-6">
                NAVIGATE
              </span>

              <div className="flex flex-col gap-4 sm:gap-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="font-display font-extrabold text-3xl sm:text-5xl text-light hover:text-accent transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-6 h-6 text-dark-border group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-dark-border flex flex-col gap-4 relative z-10">
              <a
                href={getTrialWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-accent text-light py-4 text-center font-sans font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(225,6,0,0.3)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>BOOK A FREE TRIAL VIA WHATSAPP</span>
              </a>

              <div className="flex items-center justify-between text-xs text-light-muted">
                <span>{businessConfig.city}</span>
                <span>{businessConfig.openingHours}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
