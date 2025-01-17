import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

new Swiper('.news-sales-section .swiper', {
    slidesPerView: 1,
    loop: false,
    breakpoints: {
        1000: {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 3,
        },
    },
    navigation: {
        prevEl: '.news-sales-section .swiper-button-prev',
        nextEl: '.news-sales-section .swiper-button-next',
    },
    modules: [Navigation],
})
