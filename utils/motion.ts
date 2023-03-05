type Direction = 'left' | 'right' | 'up' | 'down';

export const sidebarMotion = {
  sideVariants: {
    closed: {
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.02,
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

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: Direction,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const slideIn = (
  direction: Direction,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
