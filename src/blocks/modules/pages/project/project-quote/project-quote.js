function projectQuote() {
    slider()
    showResultPhoto()
    
    // Инициализирует слайдер
    function slider() {
        const projectQuoteSlider = document.querySelector('[data-js="projectQuoteSlider"]');
    
        if(!projectQuoteSlider) return

        const prevBtn = projectQuoteSlider.querySelector('[data-js="sliderControlPrev"]')
        const nextBtn = projectQuoteSlider.querySelector('[data-js="sliderControlNext"]')
    
        let projectQuoteSliderEx = new Swiper(projectQuoteSlider, {
            slidesPerView: 1,
            effect: 'fade',
            speed: 1000,
            loop: true,
            allowTouchMove: false,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
        })
    }

    // Управляет бегунком
    function showResultPhoto() {
        const resultPhotos = document.querySelectorAll('[data-js="resultPhoto"]')

        if(resultPhotos.length === 0) return

        resultPhotos.forEach(item => {
            const resultPhotoSlider = item.querySelector('.result-photo__slider')
            const resultPhotoOverlay = item.querySelector('.result-photo__overlay')
            const resultPhotoTooltip = item.querySelector('.result-photo__tooltip')

            resultPhotoSlider.onmousedown = function(event) {
              event.preventDefault();
        
              let shiftX = event.clientX - resultPhotoSlider.getBoundingClientRect().left;
        
              document.addEventListener('mousemove', onMouseMove);
              document.addEventListener('mouseup', onMouseUp);
        
              function onMouseMove(event) {
                resultPhotoTooltip.style.opacity = '0';
                let newLeft = event.clientX - shiftX - item.getBoundingClientRect().left;
                let rightEdge = item.offsetWidth - resultPhotoSlider.offsetWidth;
        
                if (newLeft < 0) {
                  newLeft = 0;
                }

                if (newLeft > rightEdge) {
                  newLeft = rightEdge;
                }

                resultPhotoOverlay.style.width = parseInt((rightEdge - newLeft) / rightEdge * 100) + '%'

              }
        
              function onMouseUp() {
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
              }
        
            };

            resultPhotoSlider.ontouchstart = function(event) {
              event.preventDefault();
        
              let shiftX = event.touches[0].clientX - resultPhotoSlider.getBoundingClientRect().left;
      
              document.addEventListener('touchmove', onTouchMove);
              document.addEventListener('touchend', onTouchUp);
        
              function onTouchMove(event) {
                resultPhotoTooltip.style.opacity = '0';
                let newLeft = event.touches[0].clientX - shiftX - item.getBoundingClientRect().left;
                let rightEdge = item.offsetWidth - resultPhotoSlider.offsetWidth;
      
                if (newLeft < 0) {
                  newLeft = 0;
                }

                if (newLeft > rightEdge) {
                  newLeft = rightEdge;
                }

                resultPhotoOverlay.style.width = parseInt((rightEdge - newLeft) / rightEdge * 100) + '%'

              }
        
              function onTouchUp() {
                document.removeEventListener('touchend', onTouchUp);
                document.removeEventListener('touchmove', onTouchMove);
              }
        
            };
        
            resultPhotoSlider.ondragstart = function() {
              return false;
            };
        })
    }

}