import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

void (function () {
    const squareSlider = document.querySelector('.square-section__list.swiper')
    if (!squareSlider) return

    new Swiper(squareSlider, {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 35,
        navigation: {
            nextEl: '.square-section__list-nav .square-section__list-next',
            prevEl: '.square-section__list-nav .square-section__list-prev',
        },
        breakpoints: {
            1000: {
                slidesPerView: 3,
            },
        },
    })
})()
