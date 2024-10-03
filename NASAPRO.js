
    var swiper = new Swiper(".swiper-background-thumbs", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".swiper-background", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
    // navigation bar effects on scroll
    window.addEventListener("scroll", function(){
        const header=document.querySelector("header");
        header.classList.toggle("sticky",window.scrollY > 0);
    });
 