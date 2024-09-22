function serviceProcess() {
    
    const serviceProcessSlider = document.querySelector('[data-js="serviceProcessSlider"]');

    if(!serviceProcessSlider) return

    const prevBtn = serviceProcessSlider.querySelector('[data-js="sliderControlPrev"]')
    const nextBtn = serviceProcessSlider.querySelector('[data-js="sliderControlNext"]')

    let serviceProcessSliderEx = new Swiper(serviceProcessSlider, {
        slidesPerView: 1,
        effect: 'fade',
        speed: 400,
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },
    })

}