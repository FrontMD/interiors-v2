gsap.registerPlugin ( ScrollTrigger );

function headerControllInit() {
    let oldScrollY = 0;
    let header = $('[data-js="siteHeader"]');
    let screenHeight = $(window).height();
    
    const initScroll = $(window).scrollTop();

    if(initScroll > screenHeight * 3.85) {
        header.addClass("site-header--small");
        header.addClass("site-header--hidden");
    }

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        if(scroll > oldScrollY) {
            if(scroll >= screenHeight  * 3.5) {
                header.addClass("site-header--small");
            }
            if(scroll >= screenHeight * 3.3) {
                header.addClass("site-header--hidden");
            }
        } else {
            if(scroll < screenHeight * 3.5) {
                header.removeClass("site-header--small");
            }

            if(scroll > screenHeight || scroll < screenHeight * 3.3) {
                header.removeClass("site-header--hidden");
            } else {
                header.addClass("site-header--hidden");
            }
        }

        oldScrollY = scroll

    });
}
