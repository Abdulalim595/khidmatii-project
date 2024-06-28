
$(document).ready(function () {
  $(".header__bar , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").addClass("active");
  });
  $(".menu-close , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").removeClass("active");
  });
  
  $(".produsele__cards").owlCarousel({
    items: 1,
    loop: true,
    margin: 12,
    nav: true,
    navText: [
      '<span><i class="fa-regular fa-angle-left"></i></span>',
      '<span><i class="fa-regular fa-angle-right"></i></span>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".produsele__cards2").owlCarousel({
    items: 1,
    loop: true,
    margin: 12,
    nav: true,
    navText: [
      '<span><i class="fa-regular fa-angle-left"></i></span>',
      '<span><i class="fa-regular fa-angle-right"></i></span>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".viva__slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 22,
    nav: true,
    navText: [
      '<span><i class="fa-regular fa-angle-left"></i></span>',
      '<span><i class="fa-regular fa-angle-right"></i></span>',
    ],
    dots: true
  });
  


  
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });


  
});

$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 245) {
    $(".header__area").removeClass("scroll-header");
  } else {
    $(".header__area").addClass("scroll-header");
  }
});


var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

