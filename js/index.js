// Slick Carousel
$(function () {
  $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
  
// Parallax Scrolling
const parallax = document.getElementById('wrap_cover');

window.addEventListener('scroll', function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = `${offset * 0.5}px`;
});