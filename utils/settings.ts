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

export const sliderSettings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        arrow: false,
        autoplay: false,
        draggable: true,
        speed: 300,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrow: false,
        autoplay: false,
        draggable: true,
        speed: 300,
        dots: true,
      },
    },
  ],
};
