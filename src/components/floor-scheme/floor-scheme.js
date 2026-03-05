import Swiper from 'swiper'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'

void (function () {
    const schemeSlider = document.querySelector('.scheme-slider')
    if (!schemeSlider) return
    new Swiper(schemeSlider, {
        modules: [Pagination, Navigation, EffectFade],
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        slidesPerView: 1,
        pagination: {
            el: '.scheme__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>'
            },
        },
        navigation: {
            nextEl: '.scheme__next',
            prevEl: '.scheme__prev',
        },
    })

    const scalePlus = document.querySelector('.scheme__zoom-in')
    const scaleMinus = document.querySelector('.scheme__zoom-out')
    scalePlus.addEventListener('click', () => {
        const svgScheme = document.querySelector('.scheme-slide.swiper-slide-active .scheme-slide__rooms svg')
        const scale = Number(svgScheme.style.scale) || 1
        const newScale = scale + 0.1
        svgScheme.setAttribute('style', `scale:${newScale}`)
    })

    scaleMinus.addEventListener('click', () => {
        const svgScheme = document.querySelector('.scheme-slide.swiper-slide-active .scheme-slide__rooms svg')
        const scale = Number(svgScheme.style.scale) || 1
        if (scale === 1) return
        const newScale = scale - 0.1
        svgScheme.setAttribute('style', `scale:${newScale}`)
    })
})()
