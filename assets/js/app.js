
$(document).ready(function () {
  $(".header__bar , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").addClass("active");
  });
  $(".menu-close , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").removeClass("active");
  });
  
  $(".vision__slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 8,
    nav: false,
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
      1200: {
        items: 4,
      },
    },
  });

  $(".category__slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
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


let login = document.querySelector('.login');
let accountCard = document.querySelector('.account-card');
login.addEventListener('click', () => {
  accountCard.classList.toggle('shows')
})