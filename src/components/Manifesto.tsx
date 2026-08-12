import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"]
  });

  const words = [
    { text: "YOU", accent: false },
    { text: "DON'T", accent: false },
    { text: "NEED", accent: false },
    { text: "MORE", accent: false },
    { text: "MOTIVATION.", accent: true },
    { text: "YOU", accent: false },
    { text: "NEED", accent: false },
    { text: "A", accent: false },
    { text: "STANDARD.", accent: true }
  ];

  return (
    <section 
      id="manifesto" 
      ref={containerRef}
      className="py-24 sm:py-36 bg-dark-bg text-light relative overflow-hidden border-b border-dark-border"
    >
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px)] bg-[size:8rem_100%] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10 sm:mb-16">
          <span className="w-8 h-[2px] bg-accent" />
          <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
            02 — OUR MANIFESTO
          </span>
        </div>

        {/* Scroll-Linked Word Reveal Headline */}
        <div className="flex flex-wrap gap-x-4 sm:gap-x-7 gap-y-2 sm:gap-y-4 max-w-5xl mb-12 sm:mb-16">
          {words.map((word, idx) => {
            const start = idx / words.length;
            const end = start + 1 / words.length;
            // eslint-disable-next-row react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1.0]);

            return (
              <motion.span
                key={idx}
                style={{ opacity }}
                className={`font-display font-extrabold text-4xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-none ${
                  word.accent ? 'text-accent' : 'text-light'
                }`}
              >
                {word.text}
              </motion.span>
            );
          })}
        </div>

        {/* Short Supporting Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8 border-t border-dark-border/40">
          <div className="md:col-span-8">
            <p className="text-lg sm:text-2xl text-light-muted font-normal leading-relaxed text-balance">
              We build environments where consistency becomes second nature. No gimmicks. No shortcuts. Just structured physical progression.
            </p>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <div className="flex items-center gap-4 text-xs font-mono text-light-muted">
              <div className="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center font-bold text-accent">
                JS
              </div>
              <div className="flex flex-col">
                <span className="text-light font-bold">ATHLETIC ARCHITECTURE</span>
                <span>COIMBATORE, INDIA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
