function aboutAwardsSlider() {
    new Swiper('.about-awards__content-cards', {
        slidesPerView: 4,
        spaceBetween: 40,
        navigation: {
            prevEl: '.about-awards__prev-btn',
            nextEl: '.about-awards__next-btn',
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