var swiper = new Swiper(".swiper-background-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
    
  });
  var swiper2 = new Swiper(".swiper-background", {
    loop: true,
    spaceBetween: 0,
    
    thumbs: {
      swiper: swiper,
    },
  });
  // navigation bar effects on scroll
  window.addEventListener("scroll", function(){
      const header=document.querySelector("header");
      header.classList.toggle("sticky",window.scrollY > 0);
  });