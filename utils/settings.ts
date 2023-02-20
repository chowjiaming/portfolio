export const sidebarSettings = {
  sideVariants: {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  },
  itemVariants: {
    closed: {
      opacity: 0,
    },
    open: {opacity: 1},
  },
};

export const enterExitSpin = {
  initial: {opacity: 0, scale: 0.5, x: 0, rotate: -180},
  animate: {opacity: 1, scale: 1, x: 0, rotate: 0},
  exit: {opacity: 0, scale: 0.5, x: 0, rotate: 180},
};

export const enlargeAndSpin = {
  scale: [1, 2, 2, 1, 1],
  rotate: [0, 0, 270, 270, 0],
};
