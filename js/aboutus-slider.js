const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false
    },
    mousewheel : {
        sensitivity: 1, 
        eventsTarget: ".swiper-slide"
    },
    spaceBetween: 40,
    autoplay: {
        delay: 5000,
        stopOnLastSlide:true,
        disableOnInteraction:false
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
        }
    },
});