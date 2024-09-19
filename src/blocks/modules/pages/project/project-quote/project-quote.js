function projectQuote() {
    slider()
    showResultPhoto()
    
    // Инициализирует слайдер
    function slider() {
        const projectQuoteSlider = document.querySelector('[data-js="projectQuoteSlider"]');
    
        if(!projectQuoteSlider) return

        const prevBtn = projectQuoteSlider.querySelector('[data-js="sliderControlPrev"]')
        const nextBtn = projectQuoteSlider.querySelector('[data-js="sliderControlNext"]')
        //const pagination = projectQuoteSlider.querySelector('[data-js="sliderPagination"]')
    
        let projectQuoteSliderEx = new Swiper(projectQuoteSlider, {
            slidesPerView: 1,
            effect: 'fade',
            speed: 1000,
            loop: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            /*pagination: {
                el: pagination,
                type: 'bullets',
                clickable: true
                },*/

        })
    }

    // Управляет бегунком
    function showResultPhoto() {
        const resultPhotos = document.querySelectorAll('[data-js="resultPhoto"]')

        if(resultPhotos.length === 0) return
    }

}