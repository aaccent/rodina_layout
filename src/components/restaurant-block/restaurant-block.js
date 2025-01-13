import Swiper from 'swiper'
import { Navigation, EffectFade } from 'swiper/modules'

void (function () {
    const restaurantSlider = document.querySelector('.restaurant-block__slider.swiper')
    if (!restaurantSlider) return
    const swiper = new Swiper(restaurantSlider, {
        effect: 'fade',
        modules: [Navigation, EffectFade],
        fadeEffect: {
            crossFade: true,
        },
        autoHeight: true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
    })
})()
