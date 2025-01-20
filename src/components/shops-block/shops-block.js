void (function () {
    const shopsSlider = document.querySelector('.shops-block__slider')
    if (!shopsSlider) return

    const sliderInner = shopsSlider.querySelector('.shops-block__slider-inner')

    sliderInner.querySelector('.shops-block__slide:first-child').classList.add('_active')

    const nextButton = shopsSlider.querySelector('.shops-block__navigation-next')

    nextButton.addEventListener('click', () => {
        const active = sliderInner.querySelector('._active')
        const newActive = active.nextElementSibling
        active.classList.remove('_active')
        newActive.classList.add('_active')

        sliderInner.append(sliderInner.querySelector('.shops-block__slide:first-child'))
    })

    const prevButton = shopsSlider.querySelector('.shops-block__navigation-prev')

    prevButton.addEventListener('click', () => {
        const active = sliderInner.querySelector('._active')
        const newActive = sliderInner.querySelector('.shops-block__slide:last-child')
        active.classList.remove('_active')
        newActive.classList.add('_active')

        sliderInner.prepend(newActive)
    })
})()
