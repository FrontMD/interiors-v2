function projectDetails() {
        // Инициализируем слайдер
        const projectDetailsSliders = document.querySelectorAll('[data-js="projectDetailsSlider"]');
    
        if(projectDetailsSliders.length == 0) return

        projectDetailsSliders.forEach(projectDetailsSlider => {
            let projectDetailsSliderEx = new Swiper(projectDetailsSlider, {
                slidesPerView: 'auto',
                effect: 'slide',
                speed: 400,
                spaceBetween: 24,
                breakpoints: {
                    1025: {
                        spaceBetween: 64
                    }
                }
            })
        })

}