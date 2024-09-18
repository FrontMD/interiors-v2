function projectDrawings() {
        // Инициализируем слайдер
        const projectDrawingsSlider = document.querySelector('[data-js="projectDrawingsSlider"]');
    
        if(!projectDrawingsSlider) return

        const prevBtn = projectDrawingsSlider.querySelector('[data-js="sliderControlPrev"]')
        const nextBtn = projectDrawingsSlider.querySelector('[data-js="sliderControlNext"]')
        const pagination = projectDrawingsSlider.querySelector('[data-js="sliderPagination"]')
    
        let projectDrawingsSliderEx = new Swiper(projectDrawingsSlider, {
            slidesPerView: 'auto',
            speed: 400,
            spaceBetween: 64,
            //loop: true,
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