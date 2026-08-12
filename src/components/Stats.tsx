import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statsData } from '../data/stats';

// Helper component for count-up numeric animation
const CounterNumber: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-accent font-mono tracking-tighter">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-dark-surface text-light relative overflow-hidden border-b border-dark-border">
      
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D1D1D_1px,transparent_1px),linear-gradient(to_bottom,#1D1D1D_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/*
          REPLACE DEMO STATISTICS NOTICE FOR GYM OWNER:
          All statistics below are template placeholders. Replace with your verified facility and member data.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-dark-card border border-dark-border relative group hover:border-accent/60 transition-colors"
            >
              <CounterNumber value={stat.value} suffix={stat.suffix} />

              <h4 className="font-display font-extrabold text-sm tracking-wider text-light uppercase mt-3 mb-2">
                {stat.label}
              </h4>

              <p className="text-xs text-light-muted leading-relaxed">
                {stat.description}
              </p>

              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/30 group-hover:border-accent transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
