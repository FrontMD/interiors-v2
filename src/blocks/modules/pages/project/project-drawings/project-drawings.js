function projectDrawings() {
        // Инициализируем слайдер
        const projectDrawingsSlider = document.querySelector('[data-js="projectDrawings"]');
    
        if(!projectDrawingsSlider) return

        const prevBtn = projectQuoteSlider.querySelector('[data-js="sliderControlPrev"]')
        const nextBtn = projectQuoteSlider.querySelector('[data-js="sliderControlNext"]')
        const pagination = projectQuoteSlider.querySelector('[data-js="sliderPagination"]')
    
        let projectDrawingsSliderEx = new Swiper(projectDrawingsSlider, {
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
}