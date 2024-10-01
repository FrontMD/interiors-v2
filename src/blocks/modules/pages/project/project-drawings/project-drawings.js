function projectDrawings() {
        // Инициализируем слайдер
        const projectDrawingsSlider = document.querySelector('[data-js="projectDrawingsSlider"]');
        const projectDrawingsThumbs = document.querySelector('[data-js="projectDrawingsThumbs"]');
    
        if(!projectDrawingsSlider || !projectDrawingsThumbs) return

        const prevBtn = projectDrawingsThumbs.querySelector('[data-js="sliderControlPrev"]')
        const nextBtn = projectDrawingsThumbs.querySelector('[data-js="sliderControlNext"]')
    
        let projectDrawingsThumbsEx = new Swiper(projectDrawingsThumbs, {
            slidesPerView: 1,
            speed: 400,
            spaceBetween: 24,
            allowTouchMove: true,
    
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },

            breakpoints: {
                1025: {
                    spaceBetween: 64,
                    allowTouchMove: false,
                }
            }

        })

        let projectDrawingsSliderEx = new Swiper(projectDrawingsSlider, {
            slidesPerView: 1,
            speed: 400,
            effect: 'fade',
            allowTouchMove: false,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            thumbs: {
                swiper: projectDrawingsThumbsEx
            },


        })

}