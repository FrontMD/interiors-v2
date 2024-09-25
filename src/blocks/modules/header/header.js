gsap.registerPlugin ( ScrollTrigger );

function headerControllInit() {
    let oldScrollY = 0;
    let header = $('[data-js="siteHeader"]');
    let screenHeight = $(window).height();

    let coeff1 = 3.85
    let coeff2 = 3.5
    let coeff3 = 3.3

    let page = document.querySelector('[data-js="pageAnimWrap"]')

    if(page){
        let pageName = page.getAttribute("data-page")

        if(pageName == "projects" || pageName == "project" || pageName == "service") {
            coeff1 = 0.85
            coeff2 = 0.5
            coeff3 = 0.3
        }

        if(pageName == "services") {
            coeff1 = 0.3
            coeff2 = 0.4
            coeff3 = 0.4
        }
    }
    
    const initScroll = $(window).scrollTop();

    if(initScroll > screenHeight * coeff1) {
        header.addClass("site-header--small");
        header.addClass("site-header--hidden");
    }

    $(window).scroll(function() {
        const scroll = $(window).scrollTop();

        if(scroll > oldScrollY) {
            if(scroll >= screenHeight  * coeff2) {
                header.addClass("site-header--small");
            }
            if(scroll >= screenHeight * coeff3) {
                header.addClass("site-header--hidden");
            }
        } else {
            if(scroll < screenHeight * coeff2) {
                header.removeClass("site-header--small");
            }

            if(scroll > screenHeight || scroll < screenHeight * coeff3) {
                header.removeClass("site-header--hidden");
            } else {
                header.addClass("site-header--hidden");
            }
        }

        oldScrollY = scroll

    });
}
