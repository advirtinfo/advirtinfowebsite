// src/lib/motion.js — ALL animation presets

// Standard fade-up: text blocks, headings
export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Fade in: images, full sections
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

// Stagger container: lists of cards/items
export const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

// Line reveal: horizontal dividers
export const lineReveal = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: { scaleX: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};
