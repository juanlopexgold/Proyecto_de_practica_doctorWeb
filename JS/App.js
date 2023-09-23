$(function() {
    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 20) {
            $("body").addClass("sticki-header");
        }else{
            $("body").removeClass("sticki-header");
        }
        if (winTop >= 20) {
            $(".menu-perfil").removeClass("no-mostras");
        }else{
            $(".menu-perfil").addClass("no-mostras");
        }
    })
})



var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });