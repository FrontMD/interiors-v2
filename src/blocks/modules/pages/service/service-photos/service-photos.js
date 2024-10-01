function servicePhotos() {
    const servicePhotosSlider = document.querySelector('[data-js="servicePhotosSlider"]');

    if(!servicePhotosSlider) return

    let servicePhotosSliderEx = new Swiper(servicePhotosSlider, {
        slidesPerView: 'auto',
        speed: 400,
        spaceBetween: 24,
        breakpoints: {
            1025: {
                spaceBetween: 64
            }
        }

    })
}