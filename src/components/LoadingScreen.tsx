import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessConfig } from '../data/business';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 400); // Allow clip-path exit animation
          }, 150);
          return 100;
        }
        return prev + 5;
      });
    }, 40); // Total duration ~800ms

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-dark-bg text-light flex flex-col items-center justify-center overflow-hidden"
          exit={{
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] },
          }}
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#151515_1px,transparent_1px),linear-gradient(to_bottom,#151515_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Brand Logo Initial */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 bg-accent text-dark-bg font-display font-extrabold text-2xl flex items-center justify-center tracking-tighter">
                {businessConfig.shortName}
              </div>
              <span className="font-display font-extrabold text-3xl tracking-wider text-light">
                FITNESS
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xs font-semibold tracking-widest text-light-muted uppercase mb-8"
            >
              {businessConfig.tagline}
            </motion.p>

            {/* Progress Gauge */}
            <div className="w-48 h-[2px] bg-dark-border relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-accent"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Progress Counter */}
            <span className="text-[10px] font-mono text-accent mt-3 font-semibold">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
