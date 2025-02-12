function awardsMediaSlider() {
    new Swiper('.awards-media__content-cards', {
        slidesPerView: 1,
        spaceBetween: 40,
        navigation: {
            prevEl: '.awards-media__prev-btn',
            nextEl: '.awards-media__next-btn',
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 16,
            },

            501: {
                slidesPerView: 'auto',
                spaceBetween: 24,
            },

            1025: {
                slidesPerView: 'auto',
                spaceBetween: 40,
            },
        }
    })
}