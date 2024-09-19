function servicesProcess() {
    
    const servicesProcessSlider = document.querySelector('[data-js="servicesProcessSlider"]');

    if(!servicesProcessSlider) return

    const prevBtn = servicesProcessSlider.querySelector('[data-js="sliderControlPrev"]')
    const nextBtn = servicesProcessSlider.querySelector('[data-js="sliderControlNext"]')

    let servicesProcessSliderEx = new Swiper(servicesProcessSlider, {
        slidesPerView: 'auto',
        effect: 'fade',
        speed: 400,
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },
    })

}