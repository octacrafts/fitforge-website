export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const viewOnce = {
  once: true,
  amount: 0.2,
} as const;

export const transitionBase = {
  duration: 0.55,
  ease: easeOut,
} as const;
