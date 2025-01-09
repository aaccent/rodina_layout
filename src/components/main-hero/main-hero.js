import Swiper from 'swiper'
import { EffectFade, Autoplay } from 'swiper/modules'

void (function () {
    const mainHeroSlider = document.querySelector('.main-hero')
    if (!mainHeroSlider) return

    new Swiper('.main-hero.swiper', {
        modules: [EffectFade, Autoplay],
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true,
        },
        // autoplay: {
        //     delay: 4000,
        //     pauseOnMouseEnter: true,
        // },
    })

    const circleImages = mainHeroSlider.querySelectorAll('.main-hero__slide-image')

    circleImages.forEach((circle) => {
        circle.addEventListener('mouseenter', () => {
            const mainCircle = mainHeroSlider.querySelector('.main-hero__slide-image.main')
        })
    })
})()
