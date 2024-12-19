import { isMobile } from 'globals/adaptive'

void (function () {
    const header = document.querySelector('header')
    if (!header) return
    console.log(isMobile)

    if (isMobile) {
        const mobileWrapper = header.querySelector('.header__mobile-wrapper')
        const menuButton = mobileWrapper.querySelector('.header__mobile-button')
        mobileWrapper.addEventListener('click', (e) => {
            if (e.target === menuButton) e.currentTarget.classList.toggle('opened')
            if (mobileWrapper.classList.contains('opened')) {
                menuButton.textContent = 'Закрыть меню'
            } else {
                menuButton.textContent = 'Меню'
            }
        })
    }
})()
