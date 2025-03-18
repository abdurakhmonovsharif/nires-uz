type TProps = {
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
};

export const settings = ({ nextArrow, prevArrow }: TProps) => ({
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
  nextArrow,
  prevArrow,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
