function servicesProcess() {
    
    const servicesProcessSlider = document.querySelector('[data-js="servicesProcessSlider"]');

    if(!servicesProcessSlider) return

    const prevBtn = servicesProcessSlider.querySelector('[data-js="sliderControlPrev"]')
    const nextBtn = servicesProcessSlider.querySelector('[data-js="sliderControlNext"]')

    let servicesProcessSliderEx = new Swiper(servicesProcessSlider, {
        slidesPerView: 'auto',
        speed: 400,
        spaceBetween: 24,
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },

        breakpoints: {
            1025: {
                spaceBetween: 40
            }
        }
    })

}