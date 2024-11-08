var swiper = new Swiper(".prod-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
    },
});

var swiper = new Swiper(".testi-slider", {
    slidesPerView: 'auto', 
    centeredSlides: true, 
    spaceBetween: 30,      
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
});