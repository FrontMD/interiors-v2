function projectQuote() {
        // Инициализируем слайдер
        const projectQuoteSlider = document.querySelector('[data-js="projectQuote"]');
    
        if(!projectQuoteSlider) return

        const prevBtn = projectQuoteSlider.querySelector('[data-js="sliderControlPrev"]')
        const nextBtn = projectQuoteSlider.querySelector('[data-js="sliderControlNext"]')
        const pagination = projectQuoteSlider.querySelector('[data-js="sliderPagination"]')
    
        let projectQuoteSliderEx = new Swiper(projectQuoteSlider, {
            slidesPerView: 1,
            effect: 'fade',
            speed: 1000,
            loop: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            pagination: {
                el: pagination,
                type: 'bullets',
                clickable: true
              },

        })

        // Управляем бегунком

}