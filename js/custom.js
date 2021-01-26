$(function() {
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
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      });
});


// Parallax Scrolling
const parallaxables = document.querySelectorAll(".wrap_cover");
function runParallaxLoop() {
  requestAnimationFrame(runParallaxLoop);
  parallax();
}
function parallax() {
  parallaxables.forEach((parallaxable) => {
    let distance = window.scrollY * 0.7;
    parallaxable.style.transform = `translate3d(0,-${distance}px, 0)`;
  });
}
runParallaxLoop();
