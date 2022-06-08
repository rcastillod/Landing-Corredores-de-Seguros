var swiper = new Swiper(".logos", {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        500: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 30,
        },
    },
});