import Swiper from 'swiper'
import { Navigation, EffectFade, Autoplay, Pagination } from 'swiper/modules'

void (function () {
    const aboutHeroSlider = document.querySelector('.about-hero__slider.swiper')
    if (!aboutHeroSlider) return

    new Swiper(aboutHeroSlider, {
        modules: [EffectFade, Navigation, Autoplay, Pagination],
        autoHeight: true,
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true,
        },
        // autoplay: {
        //     delay: 4000,
        //     pauseOnMouseEnter: true,
        // },
        pagination: {
            el: '.swiper-pagination',
        },
    })
})()
