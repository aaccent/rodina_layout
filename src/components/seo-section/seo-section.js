import { isMobile } from 'globals/adaptive'

document.querySelectorAll('.seo-section').forEach((section) => {
    const button = section.querySelector('.seo-section__read-more')

    const contentHeight = section.querySelector('.seo-section__inner').offsetHeight
    const isHeightTooBig = isMobile ? contentHeight > 270 : contentHeight > 150

    if (!isHeightTooBig) return

    section.classList.add('show-button')

    button.addEventListener('click', () => section.classList.remove('show-button'))
})
