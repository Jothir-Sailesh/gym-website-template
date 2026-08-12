import { Variants } from 'framer-motion';

// LEVEL 1: Small elements (opacity + translateY)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

// Stagger Container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

// LEVEL 2: Images (clip-path + scale)
export const clipPathReveal: Variants = {
  hidden: { 
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
    scale: 1.1 
  },
  visible: { 
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    scale: 1,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
  }
};

// LEVEL 3: Large typography word/line reveal
export const textStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
  }
};

// LEVEL 4: Hero large scale movement
export const heroImageScale: Variants = {
  initial: { scale: 1.15, opacity: 0.6 },
  animate: { 
    scale: 1.0, 
    opacity: 1,
    transition: { duration: 1.8, ease: [0.25, 1, 0.5, 1] }
  }
};

// Subtle Hover Scale
export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.3, ease: 'easeOut' } }
};
