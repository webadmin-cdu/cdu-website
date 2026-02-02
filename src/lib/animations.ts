import { Variants } from 'framer-motion';

// Custom easing for smooth animations
export const easeOutQuart: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Spring configurations
export const springConfig = {
  gentle: { damping: 20, stiffness: 100 },
  bouncy: { damping: 15, stiffness: 300 },
  stiff: { damping: 30, stiffness: 400 },
};

// Viewport configuration for scroll-triggered animations
export const viewportConfig = {
  once: true,
  margin: '0px 0px -100px 0px',
  amount: 0.3,
};

// Entrance animations
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutQuart,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutQuart,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOutQuart,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOutQuart,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOutQuart,
    },
  },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeOutQuart,
    },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: easeOutQuart,
    },
  },
};

export const slideInBounce: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      ...springConfig.bouncy,
    },
  },
};

// Stagger container variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Child items for stagger
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutQuart,
    },
  },
};

// Hover effects
export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: easeOutQuart },
  },
};

export const hoverLift: Variants = {
  initial: { y: 0, scale: 1, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: { duration: 0.3, ease: easeOutQuart },
  },
};

export const cardHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: easeOutQuart },
  },
};

// Interactive effects
export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 },
};

// Text reveal animation
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: easeOutQuart,
    },
  }),
};

// Shimmer effect for loading/highlights
export const shimmer: Variants = {
  initial: { x: '-100%' },
  animate: {
    x: '100%',
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Parallax scroll variants
export const parallaxUp: Variants = {
  initial: { y: 0 },
  animate: (scrollY: number) => ({
    y: scrollY * -0.2,
    transition: { ease: 'linear' },
  }),
};

export const parallaxDown: Variants = {
  initial: { y: 0 },
  animate: (scrollY: number) => ({
    y: scrollY * 0.2,
    transition: { ease: 'linear' },
  }),
};

// Page transition variants
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOutQuart,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easeOutQuart,
    },
  },
};

// Modal/overlay variants
export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      ...springConfig.gentle,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 },
  },
};

// Navigation menu variants
export const menuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: easeOutQuart,
    },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: easeOutQuart,
    },
  },
};

export const menuItemVariants: Variants = {
  closed: { opacity: 0, x: -20 },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: easeOutQuart,
    },
  },
};

// Counter animation (for stats)
export const counterVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOutQuart,
    },
  },
};

// Reduced motion helper
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get animation variants based on reduced motion preference
export const getAnimationVariants = (variants: Variants): Variants => {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } },
    };
  }
  return variants;
};
