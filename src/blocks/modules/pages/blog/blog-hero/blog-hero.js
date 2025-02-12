function blogHeroSwier() {
    const swiperInstance = new Swiper('.blog-hero__content-slides', {
        spaceBetween: 24,
        pagination: {
            el: '.swiper-pagination-custom',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                let paginationHTML = '';
                const maxVisible = 4;
                const lastSlide = total;

                paginationHTML += `
                    <span class="swiper-pagination-bullet ${current === 1 ? 'swiper-pagination-bullet-active' : ''}" data-index="1">1</span>
                `;

                if (current > maxVisible) {
                    paginationHTML += `<span class="swiper-pagination-ellipsis">...</span>`;
                }

                for (let i = Math.max(2, current - 1); i <= Math.min(lastSlide - 1, current + 2); i++) {
                    if (i > 1 && i < lastSlide) {
                        paginationHTML += `
                            <span class="swiper-pagination-bullet ${current === i ? 'swiper-pagination-bullet-active' : ''}" data-index="${i}">${i}</span>
                        `;
                    }
                }

                if (current < lastSlide - maxVisible + 2) {
                    paginationHTML += `<span class="swiper-pagination-ellipsis">...</span>`;
                }

                paginationHTML += `
                    <span class="swiper-pagination-bullet ${current === lastSlide ? 'swiper-pagination-bullet-active' : ''}" data-index="${lastSlide}">${lastSlide}</span>
                `;

                return paginationHTML;
            },
        },
        navigation: {
            nextEl: '.blog-hero__next-btn',
            prevEl: '.blog-hero__prev-btn',
        },
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('swiper-pagination-bullet')) {
            const index = parseInt(e.target.getAttribute('data-index'), 10) - 1;
            swiperInstance.slideTo(index);
        }
    });

    return swiperInstance;
}