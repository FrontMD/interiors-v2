document.addEventListener('DOMContentLoaded', () => {
    // скролл по странице
    const anchors = document.querySelectorAll('a[href*="#"]')

    if(anchors.length > 0) {   
      anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = anchor.getAttribute('href')

          gsap.to(window, { duration: 2, scrollTo: { y: blockID, offsetY: -250 } });
          
        })
      })
    }

    // блоки с обратным ховером
    const reversHoversItems = document.querySelectorAll('[data-js="reversHoversItem"]')

    if(reversHoversItems.length > 0) {
      reversHoversItems.forEach(item => {
        const currentBlock = item.closest('[data-js="reversHoversBlock"]')
        const currentItems = currentBlock.querySelectorAll('[data-js="reversHoversItem"]')

        item.addEventListener('mouseenter', function(e) {
          if(item.classList.contains('site-footer__link--noLink')) return
          currentItems.forEach(currentItem => {
            if(e.target != currentItem) {
              currentItem.classList.add('noHovered')
            }
          })
        })

        item.addEventListener('mouseleave', function(e) {
          currentItems.forEach(currentItem => {
            currentItem.classList.remove('noHovered')
          })
        })
      })
    }

    /* селекты */
    $("[data-js='projectsSelect']").select2({
      allowClear: true
    });
  
    $("[data-js='projectsSelect']").on('select2:open', () => {
      $(".select2-dropdown").addClass("select2-dropdown--projects")
    })

    //Инициализация фансибокса
    Fancybox.bind("[data-fancybox]", {
        placeFocusBack: false,
        mainClass: 'my-fancybox',
        idle: false,
        Carousel: {
            transition: "crossfade",
            Navigation: {
                prevTpl: '<svg><use xlink:href=img/sprites/sprite.svg#fancybox_arrow></use></svg>',
                nextTpl: '<svg><use xlink:href=img/sprites/sprite.svg#fancybox_arrow></use></svg>',
              },
        },
        Thumbs: {
            type: "classic",
        },
        Toolbar: {
            enabled: true,
            display: {
                left: [],
                middle: [],
                right: [
                  "close",
                ],
            },
        }

    });
  
})