function homeReviews() {
        // Инициализируем слайдер
        const homeReviewsSlider = document.querySelector('[data-js="homeReviewsSlider"]');
    
        if(!homeReviewsSlider) return

        const prevBtn = homeReviewsSlider.querySelector('[data-js="sliderControlPrev"]')
        const nextBtn = homeReviewsSlider.querySelector('[data-js="sliderControlNext"]')
        const pagination = homeReviewsSlider.querySelector('[data-js="sliderPagination"]')
    
        let homeReviewsSliderEx = new Swiper(homeReviewsSlider, {
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

        // Открываем/закрываем полный отзыв
        const fullReviewOpenBtns = homeReviewsSlider.querySelectorAll('[data-js="fullReviewOpen"]')
        const fullReviewCloseBtns = homeReviewsSlider.querySelectorAll('[data-js="fullReviewClose"]')
        const homeReviewsHeader = homeReviewsSlider.querySelector('[data-js="homeReviewsHeader"]')
        const homeReviewsPagination = homeReviewsSlider.querySelector('[data-js="sliderPagination"]')

        fullReviewOpenBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                let currentSlide = e.target.closest('[data-js="homeReviewsSlide"]')
                let currentFullReview = currentSlide.querySelector('[data-js="fullReview"]')

                homeReviewsHeader.classList.add('hidden')
                homeReviewsPagination.classList.add('hidden')
                currentFullReview.classList.add('active')
            })
        })

        fullReviewCloseBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                let currentFullReview = e.target.closest('[data-js="fullReview"]')

                homeReviewsHeader.classList.remove('hidden')
                homeReviewsPagination.classList.remove('hidden')
                currentFullReview.classList.remove('active')
            })
        })
}