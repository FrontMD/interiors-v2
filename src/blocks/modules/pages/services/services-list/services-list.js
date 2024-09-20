function servicesList() {
    const servicesListSlider = document.querySelector('[data-js="servicesListSlider"]')
    const servicesListThumbs = document.querySelector('[data-js="servicesListThumbs"]')

    if(!servicesListSlider || !servicesListThumbs) return

    let servicesListThumbsEx = new Swiper(servicesListThumbs, {
        slidesPerView: 'auto',
        speed: 400,
        direction: 'vertical',
    })
    let servicesListSliderEx = new Swiper(servicesListSlider, {
        slidesPerView: 1,
        effect: 'fade',
        speed: 400,
        allowTouchMove: false,
        thumbs: {
            swiper: servicesListThumbsEx
          }
    })

    let thumbs = servicesListThumbs.querySelectorAll('.swiper-slide'); 
    thumbs.forEach((el, index) => {
        el.addEventListener('mouseenter', function() {
            if(el.classList.contains('swiper-slide-thumb-active')) return
            servicesListSliderEx.slideTo(index) 
        })
    });

}