import { type Transition, type Variants } from "framer-motion";

// Fade in up animation
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
} as const;

// Fade in down animation
export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
} as const;

// Scale in animation
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
} as const;

// Slide in from left
export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
} as const;

// Slide in from right
export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
} as const;

// Stagger container for child animations
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
} as const;

// Stagger container with delay
export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
} as const;

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
} as const;

// Card hover effect
export const cardHover = {
  rest: { scale: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
} as const;

// Button hover
export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 }
} as const;

// Spring transition presets
export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15
};

export const springTransitionBounce: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20
};

// Slow fade
export const slowFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" }
  }
} as const;

// Reveal animation (for hero text)
export const revealText = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
} as const;

// Floating animation
export const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
} as const;

// Pulse animation
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
} as const;

// Viewport animation options
export const viewportOptions = {
  once: true,
  margin: "-100px"
};

// Viewport animation options with more threshold
export const viewportOptionsLow = {
  once: true,
  margin: "-50px"
};