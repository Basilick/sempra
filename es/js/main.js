/**
* Template Name: KnightOne - v2.1.0
* Template URL: https://bootstrapmade.com/knight-simple-one-page-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
  


  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

 

})(jQuery);


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play pause resume pause"
});

gsap.to("#section2 .c", {
  scrollTrigger: "#section2", 
  duration: 2,
  markers: true, 
  rotation: 360
});

gsap.to(".red", {
  scrollTrigger: {
    trigger: ".red",
    toggleActions: "restart pause reverse pause"
  }, 
  duration: 1, 
  backgroundColor: "#FFA500", 
  ease: "none"
});

gsap.to(".yoyo p", {
  scrollTrigger: ".yoyo", 
  scale: 2, 
  repeat: -1, 
  yoyo: true, 
  ease: "power2"
});

gsap.to(".arrow", {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true});

const box = document.querySelector('#contsvg30')

const box1 = document.querySelector('#section0')

const box3 = document.querySelector('h2.color-white')

const box4 = document.querySelector('p.txtinforme')




const tl = new TimelineMax({})
tl.from(box1, 1, {
 
  opacity: 0
})
tl.from(box, .8, {
  y: 100,
  opacity: 0
})

tl.from(box3, .9, {
  y: 100,
  opacity: 0
})

tl.from(box4, 1, {
  y: 100,
  opacity: 0
})