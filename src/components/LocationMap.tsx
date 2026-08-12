import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, MessageSquare, ExternalLink } from 'lucide-react';
import { businessConfig } from '../data/business';
import { getPhoneCallLink, getWhatsAppLink } from '../utils/whatsapp';

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-24 sm:py-36 bg-dark-bg text-light relative overflow-hidden border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                14 — PHYSICAL HEADQUARTERS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase text-light">
              YOUR TRAINING <span className="text-accent">GROUND.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-light-muted max-w-md">
            Located in the central hub of {businessConfig.city}. Dedicated parking, high-speed climate control, and keycard security.
          </p>
        </div>

        {/* Location Details + Map Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Details Card (Left Column) */}
          <div className="lg:col-span-5 bg-dark-card border border-dark-border p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-2">
                STUDIO ADDRESS
              </span>
              <h3 className="font-display font-extrabold text-2xl text-light uppercase mb-4">
                {businessConfig.brandName} STUDIO
              </h3>
              <p className="text-sm text-light-muted leading-relaxed mb-8 flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  {businessConfig.address}, {businessConfig.city}, {businessConfig.state}
                </span>
              </p>

              <div className="w-full h-[1px] bg-dark-border mb-8" />

              {/* Hours */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono font-bold text-light uppercase block">
                      OPERATING HOURS
                    </span>
                    <span className="text-sm text-light-muted block">{businessConfig.openingHours}</span>
                    <span className="text-sm text-light-muted block">{businessConfig.sundayHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono font-bold text-light uppercase block">
                      PHONE CONTACT
                    </span>
                    <a
                      href={getPhoneCallLink()}
                      className="text-sm text-light hover:text-accent font-mono transition-colors"
                    >
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-dark-border">
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-accent text-light py-3.5 px-4 font-display font-extrabold text-xs tracking-wider uppercase hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(225,6,0,0.3)]"
                data-cursor="DIRECTIONS"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-dark-border bg-dark-bg text-light py-3.5 px-4 font-display font-bold text-xs tracking-wider uppercase hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map (Right Column) */}
          <div className="lg:col-span-7 bg-dark-card border border-dark-border relative min-h-[350px] lg:min-h-full overflow-hidden">
            <iframe
              title="JS FITNESS Google Map"
              src={businessConfig.googleMapsEmbedUrl}
              className="w-full h-full min-h-[350px] border-0 filter grayscale contrast-125 invert-[0.92] opacity-80"
              allowFullScreen
              loading="lazy"
            />
            
            <div className="absolute top-4 right-4 bg-dark-bg/90 border border-dark-border p-2.5 backdrop-blur-md">
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono font-bold text-accent uppercase flex items-center gap-1.5 hover:underline"
              >
                <span>OPEN FULL MAP</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
