// header
let header_bg = document.querySelector("header");
window.addEventListener("scroll", () => {
  if(window.scrollY > 600){
    header_bg.classList.add("header_bg_scroll_active");
  }else{
    header_bg.classList.remove("header_bg_scroll_active");
  }
});

// section three
$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true,
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

// main slider
var swiper = new Swiper(".mySwiper-one", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    autoplay: true,
    delay: 3000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// card slider
var swiper = new Swiper(".mySwipers-2", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    autoplay: true,
    delay: 1000,
    disableOnInteraction: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// testamonils slider ke liye
var swiper = new Swiper(".mySwipers", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// back to top btn
const backTopBtn = document.querySelector(".back-to-top-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTopBtn.style.display = "block";
  } else {
    backTopBtn.style.display = "none";
  }
});

backTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
