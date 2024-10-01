@@include("../../blocks/components/cookie/cookie.js")

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

let scrollTriggerObject;
let mainTimeline = gsap.timeline();
let addTime = 1200;


const preloader = document.querySelector('[data-js="preloader"]')
const currentPage = document.querySelector('[data-js="pageAnimWrap"]')
let currentPageName = currentPage ? currentPage.dataset.page : ""

const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

let currentWindowWidth = windowWidth


if(preloader !== null ) {
	setTimeout(() => {
		$(preloader).fadeOut("slow")
        $('body').removeClass('no-scroll')

        switch(currentPageName) {
            case "home":
                document.querySelector('[data-js="siteHeaderLogoFull"] img').setAttribute('src', './img/logo_full.png')
                titlesMarkup();
                heightAnimMarkup();
                homeIntroAnim();
                startPageAnimation();
                cursorRunAway();
                break;
            case "projects":
                titlesMarkup();
                heightAnimMarkup();
                startPageAnimation();
                break;
            case "project":
                titlesMarkup();
                heightAnimMarkup();
                startPageAnimation();
                break;
            case "services":
                projectsAnimationMarkup()
                startPageAnimation();
                break;
            case "service":
                projectsAnimationMarkup()
                startPageAnimation();
                break;
            default:
                cookieInit()
                break
        }

	}, 1600)
}

function startPageAnimation() {
    switch(currentPageName) {
        case "home":
            homePageAnimation()
            break;
        case "projects":
            projectsPageAnimation()
            break;
        case "project":
            projectPageAnimation()
            break;
        case "services":
            servicesPageAnimation()
            break;
        case "service":
            servicePageAnimation()
            break;
        default:
            break
    }
}

function refreshPageAnimation() {
    if (typeof scrollTriggerObject !== "undefined") scrollTriggerObject.kill();
	mainTimeline.clear();

    startPageAnimation();
}

window.addEventListener('resize', () => {
    if(currentWindowWidth !== window.innerWidth) {
        refreshPageAnimation()
        currentWindowWidth = window.innerWidth;
    } else {
        return
    }
});

/** Стартовая анимация первого экрана главной страницы */
function homeIntroAnim() {

    document.activeElement.blur()

    let windowWidth = $(window).width()
    let fakeLogoTop = '54px'

    if(windowWidth < 1200) {
        fakeLogoTop = '47px'
    }

    if(windowWidth < 501) {
        fakeLogoTop = '37px'
    }

    if(document.querySelector('[data-js="homeIntro"]')) {
        let tl = gsap.timeline();
        //ставим на место лого
        tl.to('[data-js="homeIntroFakeLogo"]', {
            top: fakeLogoTop,
            duration: 0.5,
            delay: 0.5
        })
        //показываем элементы
        tl.to('[data-js="homeIntroBg"] > *', {
            opacity: '1',
            duration: 1,
        }, '<')
        tl.to('[data-js="homeIntroFake1"]', {
            opacity: '1',
            duration: 1
        }, '<')
        tl.to('[data-js="homeIntroFake4"]', {
            opacity: '1',
            duration: 1
        }, '<')
        tl.to('[data-js="homeIntroFake2"]', {
            opacity: '1',
            duration: 1
        }, '<')
        tl.to('[data-js="homeIntroFake3"]', {
            opacity: '1',
            duration: 1
        }, '<')
        tl.to('[data-js="homeIntroFake5"]', {
            opacity: '1',
            duration: 1
        }, '<')

        tl.to('[data-js="siteHeader"]', 
        {
            opacity: '1',
            duration: 0.5
        }, '>')

        mainTimeline.to('[data-js="homeIntroFakeLogo"]', 
        {
            opacity: 0,
            duration: 1
        }, '>')
        mainTimeline.to('[data-js="homeIntroFakeLogo"]', 
        {
            display: ''
        }, 
        {
            display: 'none',
            duration: 0,
        }, '>')

    }
}

/** Общая анимация главной страницы */
function homePageAnimation() {

    currentPage.style.height = "100vh"

    const footer = document.querySelector('[data-js="footer"]')
    footer.style.bottom = "0"
    footer.style.position = 'relative'

    scrollTriggerObject = ScrollTrigger.create({
        trigger: currentPage,
        pin: true,
        start: "top top",
        end: () => "+=" + addTime + "%",
        scrub: 1.5,
        animation: mainTimeline,
    })

    if(windowWidth > 1024) {
        //расставляем элементы
        mainTimeline.fromTo('[data-js="homeIntroFake1"]', 
        {
            scale: "1",
            top: "-5%",
            left: "26%",
            scale: "1"
        }, 
        {
            scale: "2",
            top: "-91.7%",
            left: "30%",        
            duration: 0.7
        }, '0')
    
        mainTimeline.fromTo('[data-js="homeIntroFake2"]', 
        {
            scale: "1",
            top: "26%",
            left: "77%"
        }, 
        {
            scale: "2",
            top: "19%",
            left: "116%",        
            duration: 0.7
        }, '<')
    
        mainTimeline.fromTo('[data-js="homeIntroFake3"]', 
        {
            scale: "1",
            top: "80%",
            left: "38%"
        }, 
        {
            scale: "2",
            top: "122%",
            left: "50%",
            duration: 0.7
        }, '<')
        
        mainTimeline.fromTo('[data-js="homeIntroFake4"]', 
        {
            scale: "1",
            top: "80%",
            left: "14%"
        }, 
        {
            scale: "2",
            top: "122%",
            left: "-20%",
            duration: 0.7
        }, '<')
    
    
        mainTimeline.fromTo('[data-js="homeIntroFake5"]', 
        {
            scale: "1",
            top: "45%",
            left: "-2%"
        },
        {
            scale: "2",
            top: "43%",
            left: "-42.3%",
            duration: 0.7
        }, '<')
    
    
        /* убираем элементы */
       mainTimeline.fromTo('[data-js="homeIntroBg"]', 
            {
                scale: "0.48"
            }, 
            {
                scale: '1',
                duration: 1.3
            }, '> -0.3')
    
        //показываем контент
        mainTimeline.fromTo('[data-js="homeIntroTitle"] [data-js="titleAnimInternal"]', 
        {
            marginTop: "1em"
        }, 
        {
            marginTop: 0,
            duration: 0.3,
            delay: 0.2
        }, '<')
    
        mainTimeline.fromTo('[data-js="homeIntroContent"]', 
        {
            opacity: '0'
        }, 
        {
            opacity: '1',
            duration: 0.3,
            onComplete: () => {
                cookieInit()
            }
        }, '<')

        //первый экран и цифры с картинкой
        mainTimeline.fromTo('[data-js="animContainerHome1"]', {
            y: "0",
        }, {
            y: () => {
                let containerHeight = document.querySelector('[data-js="animContainerHome1"]').offsetHeight;
                return -((containerHeight - window.innerHeight) / containerHeight * 100) + "%"
            },
            duration: 1.8,
            ease: "none",
        }, "> +0.9");
    
        mainTimeline.fromTo('[data-js="homeNumbers"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            duration: 0.3,
            delay: 0.3,
            marginTop: "0",
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="homeNumbersQuote"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            delay: 0.8,
            duration: 0.3,
            ease: "none",
        }, "< -0.5");
    
        mainTimeline.fromTo('[data-js="homeNumbersImg"]', {
            top: "-20%"
        }, {
            top: "0",
            duration: 2.8,
            ease: "none",
        }, "< -0.8");
    
        mainTimeline.fromTo('[data-js="homeNumbersQuote"]', {
            y: "-100%"
        }, {
            y: "50%",
            duration: 2.8,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="animContainerHome1"]', {
            top: "0",
        }, {
            top: "-100vh",
            duration: 1.2,
            ease: "none",
        }, "> -1.4");
    
        //проекты
        mainTimeline.fromTo('[data-js="mProjects"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.3,
            delay: 0.3,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="animContainerHome2"]', {
            y: "0",
        }, {
            y: "-100%",
            duration: 1,
            ease: "none",
            onUpdate: () => {
                projectsAnimation()
            },
        }, "<");
    
        mainTimeline.fromTo('[data-js="mProjectsContainer"]', {
            y: "0",
        }, {
            y: () => {
                return -(document.querySelector('[data-js="mProjectsContainer"]').offsetHeight - window.innerHeight - 95) + "px"
            },
            duration: 1.5,
            ease: "none",
            onUpdate: () => {
                projectsAnimation()
            },
        }, ">");
    
        mainTimeline.fromTo('[data-js="mProjectsContainer"]', {
            opacity: "1",
        }, {
            opacity: "0",
            duration: 1.5,
            ease: "none",
            onStart: () => {
                projectsAnimation()
            },
        }, ">");
    
        mainTimeline.fromTo('[data-js="mProjectsControls"]', {
            opacity: "1",
        }, {
            opacity: "0",
            duration: 1.5,
            ease: "none",
        }, "<");
    
        //как мы работаем
        mainTimeline.fromTo('[data-js="animContainerHome3"]', {
            y: "0",
        }, {
            y: "-100%",
            duration: 1,
            ease: "none",
        }, "< -0.2");
    
        mainTimeline.fromTo('[data-js="animContainerHome3"]', {
            scale: "0.3",
        }, {
            scale: "1",
            duration: 0.5,
            ease: "none",
        }, ">");
    
        mainTimeline.fromTo('[data-js="homeAbout"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.2,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="homeAbout"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            duration: 0.2,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="animContainerHome3"]', {
            y: "-100%",
        }, {
            y: "-200%",
            duration: 1.5,
            ease: "none",
        }, "> +0.5");
    
        //истории, контакты, текст
        mainTimeline.fromTo('[data-js="animContainerHome4"]', {
            y: "0",
        }, {
            y: "-100vh",
            duration: 1,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="homeReviews"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.2,
            delay: 0.5,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="homeReviews"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            duration: 0.2,
            delay: 0.5,
            ease: "none",
        }, "< -0.5");
    
        mainTimeline.fromTo('[data-js="animContainerHome4"]', {
            y: "-100vh",
        }, {
            y: "-100%",
            duration: 2,
            ease: "none",
        }, "> +0.3");
    
        mainTimeline.fromTo('[data-js="mContacts"] .m-contacts__title [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.3,
            ease: "none",
        }, "< +0.3");
    
        mainTimeline.fromTo('[data-js="mContacts"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            duration: 0.3,
            ease: "none",
        }, "<");

        mainTimeline.fromTo('[data-js="mContacts"] .m-contacts__form [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            delay: 0.3,
            duration: 0.3,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="homeDiscussion"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.3,
            delay: 0.3,
            ease: "none",
        }, "> +0.3");
    
        mainTimeline.fromTo('[data-js="homeDiscussion"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            duration: 0.3,
            ease: "none",
        }, "<");

    } else if(windowWidth > 500) {
        //расставляем элементы
        mainTimeline.fromTo('[data-js="homeIntroFake1"]', 
        {
            scale: "1",
            top: "-32%",
            left: "-20%",
            scale: "1"
        }, 
        {
            scale: "2",
            top: "-100%",
            left: "30%",        
            duration: 0.7
        }, '0')
    
        mainTimeline.fromTo('[data-js="homeIntroFake2"]', 
        {
            scale: "1",
            top: "19%",
            left: "63%"
        }, 
        {
            scale: "2",
            top: "11%",
            left: "127.5%",        
            duration: 0.7
        }, '<')
    
        mainTimeline.fromTo('[data-js="homeIntroFake3"]', 
        {
            scale: "1",
            top: "80%",
            left: "45%"
        }, 
        {
            scale: "2",
            top: "130%",
            left: "77%",
            duration: 0.7
        }, '<')
        
        mainTimeline.fromTo('[data-js="homeIntroFake4"]', 
        {
            scale: "1",
            top: "93%",
            left: "-14%"
        }, 
        {
            scale: "2",
            top: "121%",
            left: "-42%",
            duration: 0.7
        }, '<')
    
        mainTimeline.fromTo('[data-js="homeIntroFake5"]', 
        {
            scale: "1",
            top: "38%",
            left: "-33%"
        },
        {
            scale: "2",
            top: "77%",
            left: "-85%",
            duration: 0.7
        }, '<')
    
    
        /* убираем элементы */
       mainTimeline.fromTo('[data-js="homeIntroBg"]', 
            {
                scale: "0.48"
            }, 
            {
                scale: '1',
                duration: 1.3
            }, '> -0.3')
    
        //показываем контент
        mainTimeline.fromTo('[data-js="homeIntroTitle"] [data-js="titleAnimInternal"]', 
        {
            marginTop: "1em"
        }, 
        {
            marginTop: 0,
            duration: 0.5,
            delay: 0.2
        }, '<')
    
        mainTimeline.fromTo('[data-js="homeIntroContent"]', 
        {
            opacity: '0'
        }, 
        {
            opacity: '1',
            duration: 0.5,
            onComplete: () => {
                cookieInit()
            }
        }, '<')
        //первый экран и цифры с картинкой
        mainTimeline.fromTo('[data-js="animContainerHome1"]', {
            y: "0",
        }, {
            y: () => {
                let containerHeight = document.querySelector('[data-js="animContainerHome1"]').offsetHeight;
                return -((containerHeight - window.innerHeight) / containerHeight * 100) + "%"
            },
            duration: 1.8,
            ease: "none",
        }, "> +0.9");
    
        mainTimeline.fromTo('[data-js="homeNumbers"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            duration: 0.5,
            delay: 0.4,
            marginTop: "0",
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="homeNumbersQuote"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            delay: 1,
            duration: 0.4,
            ease: "none",
        }, "< -0.4");
    
        mainTimeline.fromTo('[data-js="homeNumbersImg"]', {
            top: "-20%"
        }, {
            top: "0",
            duration: 3.2,
            ease: "none",
        }, "< -0.8");
    
        mainTimeline.fromTo('[data-js="homeNumbersQuote"]', {
            y: "-100%"
        }, {
            y: "50%",
            duration: 3.2,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="animContainerHome1"]', {
            top: "0",
        }, {
            top: "-100vh",
            duration: 1.2,
            ease: "none",
        }, "> -1.4");
    
        //проекты
        mainTimeline.fromTo('[data-js="mProjects"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.5,
            delay: 0.3,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="animContainerHome2"]', {
            y: "0",
        }, {
            y: "-100%",
            duration: 1,
            ease: "none",
            onUpdate: () => {
                projectsAnimation()
            },
        }, "<");
    
        mainTimeline.fromTo('[data-js="mProjectsContainer"]', {
            y: "0",
        }, {
            y: () => {
                return -(document.querySelector('[data-js="mProjectsContainer"]').offsetHeight - window.innerHeight - 95) + "px"
            },
            duration: 1,
            ease: "none",
            onUpdate: () => {
                projectsAnimation()
            },
        }, ">");
    
        mainTimeline.fromTo('[data-js="mProjectsContainer"]', {
            opacity: "1",
        }, {
            opacity: "0",
            duration: 2,
            ease: "none",
            onStart: () => {
                projectsAnimation()
            },
        }, ">");
    
        mainTimeline.fromTo('[data-js="mProjectsControls"]', {
            opacity: "1",
        }, {
            opacity: "0",
            duration: 2,
            ease: "none",
        }, "<");
    
        //как мы работаем
        mainTimeline.fromTo('[data-js="homeAbout"] [data-js="titleAnimInternal"]', {
             marginTop: "1em"
         }, {
             marginTop: 0,
             duration: 0.5,
             delay: 0.3,
             ease: "none",
         }, "<");
     
         mainTimeline.fromTo('[data-js="homeAbout"] [data-anim="heightEl"]', {
             height: 0
         }, {
             height: "100%",
             delay: 0.3,
             duration: 0.4,
             ease: "none",
         }, "< -0.3");

        mainTimeline.fromTo('[data-js="animContainerHome3"]', {
            y: "0",
        }, {
            y: "-100%",
            duration: 2,
            ease: "none",
        }, "< -0.3");
    
    
        mainTimeline.fromTo('[data-js="animContainerHome3"]', {
            y: "-100%",
        }, {
            y: "-200%",
            duration: 3,
            ease: "none",
        }, ">");
    
        //истории, контакты, текст
        mainTimeline.fromTo('[data-js="animContainerHome4"]', {
            y: "0",
        }, {
            y: "-100vh",
            duration: 1,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="homeReviews"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.4,
            delay: 0.5,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="homeReviews"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            delay: 0.5,
            duration: 0.5,
            ease: "none",
        }, "< -0.5");
    
        mainTimeline.fromTo('[data-js="animContainerHome4"]', {
            y: "-100vh",
        }, {
            y: "-100%",
            duration: 2,
            ease: "none",
        }, "> +0.1");

        mainTimeline.fromTo('[data-js="mContacts"] .m-contacts__title [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.3,
            ease: "none",
        }, "< +0.3");
    
        mainTimeline.fromTo('[data-js="mContacts"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            duration: 0.4,
            ease: "none",
        }, "<");

        mainTimeline.fromTo('[data-js="mContacts"] .m-contacts__form [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            delay: 0.3,
            duration: 0.3,
            ease: "none",
        }, "<");

        mainTimeline.fromTo('[data-js="homeDiscussion"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.4,
            delay: 0.3,
            ease: "none",
        }, ">");
    
        mainTimeline.fromTo('[data-js="homeDiscussion"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            duration: 0.4,
            ease: "none",
        }, "<");
    } else {

        ScrollTrigger.config({
            autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
        })

        //расставляем элементы
        mainTimeline.fromTo('[data-js="homeIntroFake1"]', 
            {
                scale: "1",
                top: "-13%",
                left: "12%",
                scale: "1"
            }, 
            {
                scale: "2",
                top: "-68%",
                left: "40%",        
                duration: 0.7
            }, '0')
        
            mainTimeline.fromTo('[data-js="homeIntroFake2"]', 
            {
                scale: "1",
                top: "23%",
                left: "70%"
            }, 
            {
                scale: "2",
                top: "20%",
                left: "137.5%",        
                duration: 0.7
            }, '<')
        
            mainTimeline.fromTo('[data-js="homeIntroFake3"]', 
            {
                scale: "1",
                top: "78%",
                left: "16%"
            }, 
            {
                scale: "2",
                top: "126%",
                left: "67%",
                duration: 0.7
            }, '<')
            
            mainTimeline.fromTo('[data-js="homeIntroFake4"]', 
            {
                scale: "1",
                top: "50%",
                left: "-27%"
            }, 
            {
                scale: "2",
                top: "70%",
                left: "-92%",
                duration: 0.7
            }, '<')
        
            mainTimeline.fromTo('[data-js="homeIntroFake5"]', 
            {
                scale: "1",
                top: "-4%",
                left: "-18%"
            },
            {
                scale: "2",
                top: "-8%",
                left: "-81%",
                duration: 0.7
            }, '<')
    
    
        /* убираем элементы */
       mainTimeline.fromTo('[data-js="homeIntroBg"]', 
            {
                scale: "0.58"
            }, 
            {
                scale: '1',
                duration: 1.2
            }, '> -0.4')
    
        //показываем контент
        mainTimeline.fromTo('[data-js="homeIntroTitle"] [data-js="titleAnimInternal"]', 
        {
            marginTop: "1em"
        }, 
        {
            marginTop: 0,
            duration: 0.5,
            delay: 0.2
        }, '<')
    
        mainTimeline.fromTo('[data-js="homeIntroContent"]', 
        {
            opacity: '0'
        }, 
        {
            opacity: '1',
            duration: 0.5,
            onComplete: () => {
                cookieInit()
            }
        }, '<')

        //первый экран и цифры с картинкой
        mainTimeline.fromTo('[data-js="animContainerHome1"]', {
            y: "0",
        }, {
            y: () => {
                let containerHeight = document.querySelector('[data-js="animContainerHome1"]').offsetHeight;
                return -((containerHeight - window.innerHeight) / containerHeight * 100) + "%"
            },
            duration: 1.8,
            ease: "none",
        }, "> +0.5");
    
        mainTimeline.fromTo('[data-js="homeNumbers"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            duration: 0.3,
            delay: 0.4,
            marginTop: "0",
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="homeNumbersQuote"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            delay: 1,
            duration: 0.2,
            ease: "none",
        }, "< -0.4");
    
        mainTimeline.fromTo('[data-js="homeNumbersImg"]', {
            top: "-20%"
        }, {
            top: "0",
            duration: 2.8,
            ease: "none",
        }, "< -0.6");
    
        mainTimeline.fromTo('[data-js="homeNumbersQuote"]', {
            y: "-100%"
        }, {
            y: "50%",
            duration: 2.8,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="animContainerHome1"]', {
            top: "0",
        }, {
            top: "-100vh",
            duration: 1.2,
            ease: "none",
        }, "> -1.4");
    
        //проекты
        mainTimeline.fromTo('[data-js="mProjects"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.2,
            delay: 0.1,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="animContainerHome2"]', {
            y: "0",
        }, {
            y: "-100vh",
            duration: 1.2,
            ease: "none",
            onUpdate: () => {
                projectsAnimation()
            },
        }, "<");

        mainTimeline.fromTo('[data-js="animContainerHome2"]', {
            y: "-100vh",
        }, {
            y: "-100%",
            duration: 0.8,
            ease: "none",
            onUpdate: () => {
                projectsAnimation()
            },
        }, ">");
    
        mainTimeline.fromTo('[data-js="mProjectsContainer"]', {
            y: "0",
        }, {
            y: () => {
                return -(document.querySelector('[data-js="mProjectsContainer"]').offsetHeight - window.innerHeight - 95) + "px"
            },
            duration: 3.5,
            ease: "none",
            onUpdate: () => {
                projectsAnimation()
            },
        }, ">");

        mainTimeline.fromTo('[data-js="animContainerHome2"]', {
            y: "-100%",
        }, {
            y: "-200%",
            duration: 1.8,
            ease: "none",
            onUpdate: () => {
                projectsAnimation()
            },
        }, ">");
    
        //как мы работаем
        mainTimeline.fromTo('[data-js="homeAbout"] [data-js="titleAnimInternal"]', {
             marginTop: "1em"
         }, {
             marginTop: 0,
             duration: 0.2,
             delay: 0.3,
             ease: "none",
         }, "<");
     
         mainTimeline.fromTo('[data-js="homeAbout"] [data-anim="heightEl"]', {
             height: 0
         }, {
             height: "100%",
             delay: 0.3,
             duration: 0.2,
             ease: "none",
         }, "<");

        mainTimeline.fromTo('[data-js="animContainerHome3"]', {
            y: "0",
        }, {
            y: "-100vh",
            duration: 1.1,
            ease: "none",
        }, "< -0.8");
    
    
        mainTimeline.fromTo('[data-js="animContainerHome3"]', {
            y: "-100vh",
        }, {
            y: "-100%",
            duration: 0.5,
            ease: "none",
        }, ">");

        mainTimeline.fromTo('[data-js="animContainerHome3"]', {
            y: "-100%",
        }, {
            y: "-200%",
            duration: 1.5,
            ease: "none",
        }, ">");
    
        //истории, контакты, текст
        mainTimeline.fromTo('[data-js="animContainerHome4"]', {
            y: "0",
        }, {
            y: "-100vh",
            duration: 1,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="homeReviews"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.2,
            delay: 0.3,
            ease: "none",
        }, "<");
    
        mainTimeline.fromTo('[data-js="homeReviews"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            delay: 0.3,
            duration: 0.2,
            ease: "none",
        }, "< -0.3");
    
        mainTimeline.fromTo('[data-js="animContainerHome4"]', {
            y: "-100vh",
        }, {
            y: "-100%",
            duration: 3,
            ease: "none",
        }, "> +0.5");
    
        mainTimeline.fromTo('[data-js="mContacts"] .m-contacts__title [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.3,
            ease: "none",
        }, "< +0.3");
    
        mainTimeline.fromTo('[data-js="mContacts"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            duration: 0.4,
            ease: "none",
        }, "<");

        mainTimeline.fromTo('[data-js="mContacts"] .m-contacts__form [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            delay: 0.3,
            duration: 0.3,
            ease: "none",
        }, "<");

        mainTimeline.fromTo('[data-js="homeDiscussion"] [data-js="titleAnimInternal"]', {
            marginTop: "1em"
        }, {
            marginTop: 0,
            duration: 0.2,
            ease: "none",
        }, ">");
    
        mainTimeline.fromTo('[data-js="homeDiscussion"] [data-anim="heightEl"]', {
            height: 0
        }, {
            height: "100%",
            duration: 0.4,
            ease: "none",
        }, "> +0.2");
    }

}

/** Общая анимация страницы проектов */
function projectsPageAnimation() {

    currentPage.style.height = "100vh"

    const footer = document.querySelector('[data-js="footer"]')
    footer.style.bottom = "0"
    footer.style.position = 'relative'

    //показываем контент
    if(document.querySelector('[data-js="projectsIntro"]')) {
        let tl = gsap.timeline();

        tl.to('[data-js="siteHeader"]', 
        {
            opacity: '1',
            duration: 0.5,
            delay: 0.5
        }, '0')
    
        
        tl.to('[data-js="projectsIntroTitle"] [data-js="titleAnimInternal"]', 
        {
            marginTop: 0,
            duration: 0.3,
            delay: 0.2
        }, '<')
    
        tl.to('[data-js="projectsIntroContent"]', 
        {
            opacity: '1',
            duration: 0.3,
            onComplete: () => {
                cookieInit()
            }
        }, '<')
    }

    /*if(windowWidth < 501) {
        textSpoilerControl()
    }*/

    addTime = 600

    scrollTriggerObject = ScrollTrigger.create({
        trigger: currentPage,
        pin: true,
        start: "top top",
        end: () => "+=" + addTime + "%",
        scrub: 1.5,
        animation: mainTimeline,
    })


    if(windowWidth > 1024) {
        mainTimeline.fromTo('[data-js="projectsIntroBg"]', 
            {
                top: "0",
            }, 
            {
                top: () => {
                    let projectsIntroBgHeight = document.querySelector('[data-js="projectsIntroBg"]').offsetHeight;
                    return -(projectsIntroBgHeight - window.innerHeight) + "px"
                },      
                duration: 0.7
            }, '0')

        mainTimeline.fromTo('[data-js="projectsIntroContent"]',
            {
                opacity: "1",
            }, 
            {
                opacity: "0",      
                duration: 0.4
            }, '<')

        mainTimeline.fromTo('[data-js="projectsDesc"]',
            {
                bottom: "-100%",
            }, 
            {
                bottom: "0",      
                duration: 0.5
            }, "< +0.2")
        mainTimeline.fromTo('[data-js="animContainerProjects1"]',
            {
                top: "0",
            }, 
            {
                top: "-100vh",
                duration: 1.5
            }, '>')
        mainTimeline.fromTo('[data-js="animContainerProjects2"]',
            {
                top: "100%",
            }, 
            {
                top: "0",  
                duration: 1.5,
                onUpdate: () => {
                    projectsAnimation("projects")
                },
            }, '<')
        mainTimeline.fromTo('[data-js="pProjectsContainer"]', {
                y: "0",
            }, {
                y: "-100%",
                duration: 2.5,
                ease: "none",
                onUpdate: () => {
                    projectsAnimation("projects")
                },
            }, "> -0.2");

    } else if(windowWidth > 600) {

        let animContainerProjects1Height = document.querySelector('[data-js="animContainerProjects1"]').offsetHeight;

        mainTimeline.fromTo('[data-js="animContainerProjects1"]',
            {
                top: "0",
            }, 
            {
                top: () => {
                    return -(animContainerProjects1Height - window.innerHeight) + "px"
                },  
                duration: 1
            }, '0')
        mainTimeline.fromTo('[data-js="animContainerProjects1"]',
            {
                top: () => {
                    return -(animContainerProjects1Height - window.innerHeight) + "px"
                }, 
            }, 
            {
                top: () => {
                    return -animContainerProjects1Height + "px"
                }, 
                duration: 1
            }, '>')
        mainTimeline.fromTo('[data-js="animContainerProjects2"]',
            {
                top: "100%",
            }, 
            {
                top: "0",
                duration: 1,
                onUpdate: () => {
                    projectsAnimation("projects")
                },
            }, '<')
        mainTimeline.fromTo('[data-js="pProjectsContainer"]', {
                y: "0",
            }, {
                y: "-100%",
                duration: 2.5,
                ease: "none",
                onUpdate: () => {
                    projectsAnimation("projects")
                },
            }, "> -0.2");
    } else {
        let animContainerProjects1Height = document.querySelector('[data-js="animContainerProjects1"]').offsetHeight;

        mainTimeline.fromTo('[data-js="animContainerProjects1"]',
            {
                top: "0",
            }, 
            {
                top: () => {
                    return -(animContainerProjects1Height - window.innerHeight) + "px"
                },  
                duration: 1
            }, '0')
        mainTimeline.fromTo('[data-js="animContainerProjects1"]',
            {
                top: () => {
                    return -(animContainerProjects1Height - window.innerHeight) + "px"
                }, 
            }, 
            {
                top: () => {
                    return -animContainerProjects1Height + "px"
                }, 
                duration: 1
            }, '>')
        mainTimeline.fromTo('[data-js="animContainerProjects2"]',
            {
                top: "100%",
            }, 
            {
                top: "0",
                duration: 1,
                onUpdate: () => {
                    projectsAnimation("projects")
                },
            }, '<')
        mainTimeline.fromTo('[data-js="pProjectsContainer"]', {
                y: "0",
            }, {
                y: "-100%",
                duration: 4.5,
                ease: "none",
                onUpdate: () => {
                    projectsAnimation("projects")
                },
            }, "> -0.2");
    }

}

/** Общая анимация детальной страницы проекта */
function projectPageAnimation() {

    currentPage.style.height = "100vh"

    const footer = document.querySelector('[data-js="footer"]')
    footer.style.bottom = "0"
    footer.style.position = 'relative'

    //показываем контент
    if(document.querySelector('[data-js="projectIntro"]')) {
        let tl = gsap.timeline();

        tl.to('[data-js="siteHeader"]', 
        {
            opacity: '1',
            duration: 0.5,
            delay: 0.5
        }, '0')
    
        tl.to('[data-js="projectIntroContent"]', 
        {
            opacity: '1',
            duration: 0.3,
            onComplete: () => {
                cookieInit()
            }
        }, '<')
    }

    addTime = 800

    scrollTriggerObject = ScrollTrigger.create({
        trigger: currentPage,
        pin: true,
        start: "top top",
        end: () => "+=" + addTime + "%",
        scrub: 1.5,
        animation: mainTimeline,
    })


    if(windowWidth > 1024) {
        mainTimeline.fromTo('[data-js="animContainerProject"]', 
            {
                top: "0",
            }, 
            {
                top: () => {
                    let animContainerProjectHeight = document.querySelector('[data-js="animContainerProject"]').offsetHeight;
                    return -(animContainerProjectHeight - window.innerHeight) + "px"
                },      
                duration: 1.5,
                onUpdate: () => {
                    detailedAnimation()
                },
            }, '0')
    } else if(windowWidth > 300) {
        mainTimeline.fromTo('[data-js="animContainerProject"]', 
            {
                top: "0",
            }, 
            {
                top: () => {
                    let animContainerProjectHeight = document.querySelector('[data-js="animContainerProject"]').offsetHeight;
                    return -(animContainerProjectHeight - window.innerHeight) + "px"
                },      
                duration: 1.5,
                onUpdate: () => {
                    detailedAnimation()
                },
            }, '0')

    }

}

/** Общая анимация страницы услуг */
function servicesPageAnimation() {

    currentPage.style.height = "100vh"

    const footer = document.querySelector('[data-js="footer"]')
    footer.style.bottom = "0"
    footer.style.position = 'relative'

    //показываем контент
    let tl = gsap.timeline();

    tl.to('[data-js="siteHeader"]', 
    {
        opacity: '1',
        duration: 0.5,
        delay: 0.5,
        onComplete: () => {
            cookieInit()
        }
    }, '0')

    addTime = 300

    scrollTriggerObject = ScrollTrigger.create({
        trigger: currentPage,
        pin: true,
        start: "top top",
        end: () => "+=" + addTime + "%",
        scrub: 1,
        animation: mainTimeline,
    })


    if(windowWidth > 1024) {
        mainTimeline.fromTo('[data-js="animContainerServices"]', 
            {
                top: "0",
            }, 
            {
                top: () => {
                    let animContainerServicesHeight = document.querySelector('[data-js="animContainerServices"]').offsetHeight;
                    return -(animContainerServicesHeight - window.innerHeight) + "px"
                },      
                duration: 2.5,
                onUpdate: () => {
                    projectsAnimation("services")
                },
            }, '0')

    } else if(windowWidth > 300) {

        mainTimeline.fromTo('[data-js="animContainerServices"]', 
            {
                top: "0",
            }, 
            {
                top: () => {
                    let animContainerServicesHeight = document.querySelector('[data-js="animContainerServices"]').offsetHeight;
                    return -(animContainerServicesHeight - window.innerHeight) + "px"
                },      
                duration: 2.5,
                onUpdate: () => {
                    projectsAnimation("services")
                },
            }, '0')

    }

}

/** Общая анимация страницы услуг */
function servicePageAnimation() {

    currentPage.style.height = "100vh"

    const footer = document.querySelector('[data-js="footer"]')
    footer.style.bottom = "0"
    footer.style.position = 'relative'

    //показываем контент
    let tl = gsap.timeline();

    tl.to('[data-js="siteHeader"]', 
    {
        opacity: '1',
        duration: 0.5,
        delay: 0.5,
    }, '0')
    tl.to('[data-js="serviceIntroContent"]', 
    {
        opacity: '1',
        duration: 0.5,
        delay: 0.5,
        onComplete: () => {
            cookieInit()
        }
    }, '<')

    addTime = 450

    scrollTriggerObject = ScrollTrigger.create({
        trigger: currentPage,
        pin: true,
        start: "top top",
        end: () => "+=" + addTime + "%",
        scrub: 1,
        animation: mainTimeline,
    })


    if(windowWidth > 1024) {
        mainTimeline.fromTo('[data-js="animContainerService"]', 
            {
                top: "0",
            }, 
            {
                top: () => {
                    let animContainerServicesHeight = document.querySelector('[data-js="animContainerService"]').offsetHeight;
                    return -(animContainerServicesHeight - window.innerHeight) + "px"
                },      
                duration: 2,
                onUpdate: () => {
                    projectsAnimation("service")
                },
            }, '0')

    } else if(windowWidth > 300) {
        mainTimeline.fromTo('[data-js="animContainerService"]', 
            {
                top: "0",
            }, 
            {
                top: () => {
                    let animContainerServicesHeight = document.querySelector('[data-js="animContainerService"]').offsetHeight;
                    return -(animContainerServicesHeight - window.innerHeight) + "px"
                },      
                duration: 2,
                onUpdate: () => {
                    projectsAnimation("service")
                },
            }, '0')
    }

}


/* разметка заголовков */
function titlesMarkup() {
    const titles = document.querySelectorAll('[data-anim="title"]')

    if(titles.length < 1) return

    titles.forEach(title => {
        let titleText = title.innerHTML
        let textArray = titleText.split(" ")

        let newTitleHtml = ''

        textArray.forEach(textItem => {
            newTitleHtml += ` <span class="title-anim-external"><span class="title-anim-internal" data-js="titleAnimInternal">${textItem}</span></span>`
        })

        title.innerHTML = newTitleHtml
    })
}

/* разметка анимации высоты */
function heightAnimMarkup() {
    const els = document.querySelectorAll('[data-anim="heightEl"]')

    if(els.length < 1) return

    els.forEach(el => {
        let elImg = el.querySelector('img')

        if(!elImg) {
            let contentHeight = el.querySelector('[data-anim="heightContent"]').offsetHeight
            let elWrap = el.closest('[data-anim="heightWrap"]')
    
            elWrap.style.height = contentHeight + "px"
        } else {
            if(elImg.offsetHeight > 0 ){
                let contentHeight = el.querySelector('[data-anim="heightContent"]').offsetHeight
                let elWrap = el.closest('[data-anim="heightWrap"]')
        
                elWrap.style.height = contentHeight + "px"
            } else {
                elImg.onload =  () => {
                    let contentHeight = el.querySelector('[data-anim="heightContent"]').offsetHeight
                    let elWrap = el.closest('[data-anim="heightWrap"]')
            
                    elWrap.style.height = contentHeight + "px"
                }
            }
        }
    })
}

/* анимация проектов */
function projectsAnimation(page = "home") {

    let projectsAnim = ""

    if(page == "home") {
        projectsAnim = windowWidth > 1024 
                ? document.querySelectorAll('[data-js="mProjectsSlides"] .swiper-slide-active [data-anim="projectAnim"]')
                : document.querySelectorAll('[data-anim="projectAnim"]')
    } else {
        projectsAnim = document.querySelectorAll('[data-anim="projectAnim"]')
    }

    const showPosition = windowWidth > 500 ? 200 : 200

    if(projectsAnim.length < 1) return

    projectsAnim.forEach((projectAnim)=> {
        
        let projectAnimPosition = projectAnim.getBoundingClientRect()
        let projectAnimBottomPosition = windowHeight - projectAnimPosition.top

        let projectAnimWraps = projectAnim.querySelectorAll('[data-anim="projectAnimWrap"]')

        projectAnimWraps.forEach(projectAnimWrap => {
            if(projectAnimBottomPosition > showPosition) {
                projectAnimWrap.style.height = "100%"
            } else {
                projectAnimWrap.style.height = "0%"
            }
        })
    
    })
}

/* анимация проектов */
function detailedAnimation() {
    
    detailedsAnim = document.querySelectorAll('[data-js="projectDetailsSlider"]')

    const showPosition = windowWidth > 500 ? 200 : 200

    if(detailedsAnim.length < 1) return

    detailedsAnim.forEach(detailedAnim => {
        
        let detailedAnimPosition = detailedAnim.getBoundingClientRect().top
      
        if(windowHeight - detailedAnimPosition > showPosition) {
            detailedAnim.style.opacity = "1"
            detailedAnim.style.top = "0"
        } else {
            detailedAnim.style.opacity = "0"
            detailedAnim.style.top = "50px"
        }
    
    })
}

/* анимация картинок контактов */
function cursorRunAway() {
    const cursorRunAwayBlock = document.querySelector('[data-js="cursorRunAwayBlock"]');
    const cursorRunAwayTrigger = document.querySelector('[data-js="cursorRunAwayTrigger"]');

    if(!cursorRunAwayBlock || !cursorRunAwayTrigger) return

    const cursorRunAwayItems = cursorRunAwayBlock.querySelectorAll('[data-js="cursorRunAwayBlock"] > div')

    cursorRunAwayTrigger.addEventListener("mouseenter", (e) => {
        let currentTrigger = e.target
        let itemStartPositions = []

        cursorRunAwayItems.forEach(item => {
            itemStartPositions.push(item.getBoundingClientRect())
        })
        
        currentTrigger.addEventListener('mousemove', mouseMoveHendler)
        currentTrigger.addEventListener('mouseleave', mouseLeaveHendler)

        
        function mouseMoveHendler(e) {
            cursorRunAwayItems.forEach((item, index) => {
                let itemPos = itemStartPositions[index]
                let itemPosLeft = itemPos.x
                let itemPosRight = itemPosLeft + itemPos.width
                let itemPosTop = itemPos.y
                let itemPosBottom = itemPosTop + itemPos.height
                let cursorPosX = e.clientX
                let cursorPosY = e.clientY
                
                if(itemPosLeft < cursorPosX 
                    && itemPosRight > cursorPosX
                    && itemPosTop < cursorPosY
                    && itemPosBottom > cursorPosY ) {
                        
                    item.style.transform = "scale(1.2)" 
                    
                } else {
                    item.style.transform = "scale(1)"
                }

            })
        }

        function mouseLeaveHendler(e) {
            currentTrigger.removeEventListener('move', mouseMoveHendler)

            cursorRunAwayItems.forEach(item => {
                item.style.transform = "scale(1)"
            })

            currentTrigger.removeEventListener('mouseleave', mouseLeaveHendler)
        }
    })

}

/* текстовый спойлер */
/*function textSpoilerControl() {
    const textSpoilers = document.querySelectorAll('[data-js="textSpoiler"]')

    if(textSpoilers.length < 1) return

    textSpoilers.forEach(textSpoiler => {
        const btn = textSpoiler.querySelector('[data-js="textSpoilerBtn"]')
        const show = textSpoiler.querySelector('[data-js="textSpoilerShow"]')
        const hide = textSpoiler.querySelector('[data-js="textSpoilerHide"]')
        const content = textSpoiler.querySelector('[data-js="textSpoilerContent"]')

        btn.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            if(textSpoiler.classList.contains('text-spoiler--expanded')) {
                textSpoiler.classList.remove('text-spoiler--expanded')
                $(content).hide(400)
                $(hide).hide()
                $(show).show()
                refreshPageAnimation()
            } else {
                textSpoiler.classList.add('text-spoiler--expanded')
                $(content).show(400)
                $(hide).show()
                $(show).hide()
                refreshPageAnimation()
            }
        })
    })
}*/