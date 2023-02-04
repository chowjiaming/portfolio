export const sliderSettings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 575,
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
