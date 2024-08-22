//gsap to animate
gsap.from(".links , .logo , #home", {
    stagger: 0.3,
    y: 10,
    duration: 1.5,
    ease: Power2,
    opacity: 0,
  });

  $(document).ready(function () {
  if (window.location.hash.length > 0) {
  window.scrollTo(0, $(window.location.hash).offset().top);
  }
  
  });