$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  $(".menu-btn").on("click", function (e) {
    $(".header-nav").fadeIn(300);
    $(".overlay").fadeIn(300);
    $(".header-list").addClass("active");
    $("body").addClass("overflow");
  });
  $(".close-btn,.overlay").on("click", function (e) {
    $(".header-nav").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".header-list").removeClass("active");
    $("body").removeClass("overflow");
  });
  if ($(this).scrollTop() >= 100) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  /* ~~~~~~~~~~~~~~~ Testimonials Swiper ~~~~~~~~~~~~~~~ */
  var TestimonialsSwiper = new Swiper(".testimonials-slider .swiper", {
    loop: true,
    pagination: {
      el: ".testimonials-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  /* ~~~~~~~~~~~~~~~ Institutions Swiper ~~~~~~~~~~~~~~~ */
  var InstitutionsSwiper = new Swiper(".institutions-slider .swiper", {
    loop: true,
    pagination: {
      el: ".institutions-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".institutions-slider .swiper-button-next",
      prevEl: ".institutions-slider .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
  /* ~~~~~~~~~~~~~~~ Why Swiper ~~~~~~~~~~~~~~~ */
  var WhySwiper = new Swiper(".why-slider .swiper", {
    loop: true,
    effect: "fade",
    pagination: {
      el: ".why-slider .swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
  });
  /* ~~~~~~~~~~~~~~~ Footer ~~~~~~~~~~~~~~~ */
  if ($(window).width() <= 991) {
    $(".footer-head").click(function () {
      $(".footer-head").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-head").not(this).siblings().slideUp(500);
    });
  }
});

var vsOpts = {
  $slides: $(".v-slide"),
  $list: $(".v-slides"),
  duration: 6,
  lineHeight: 50,
};

var vSlide = new TimelineMax({
  paused: true,
  repeat: -1,
});

vsOpts.$slides.each(function (i) {
  vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
    y: i * -1 * vsOpts.lineHeight,
    ease: Elastic.easeOut.config(1, 0.4),
  });
});
vSlide.play();
