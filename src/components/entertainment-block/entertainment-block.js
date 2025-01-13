import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

void (function () {
    const entertainmentSlider = document.querySelector('.entertainment-block__slider')
    if (!entertainmentSlider) return
    new Swiper(entertainmentSlider, {
        modules: [Navigation],
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            1000: {
                slidesPerView: 5,
                initialSlide: 2,
                centeredSlides: true,
            },
        },
    })

    const slides = entertainmentSlider.querySelectorAll('.swiper-slide')
    slides.forEach((slide) => {
        slide.addEventListener('mouseover', () => {
            if (slide.classList.contains('swiper-slide-active')) return
            const activeSLide = document.querySelector('.swiper-slide-active')
            activeSLide.classList.add('_small')
        })

        slide.addEventListener('mouseleave', () => {
            if (slide.classList.contains('swiper-slide-active')) return
            const activeSLide = document.querySelector('.swiper-slide-active')
            activeSLide.classList.remove('_small')
        })
    })
})()
