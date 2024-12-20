import { isMobile } from 'globals/adaptive'

void (function () {
    const header = document.querySelector('header')
    if (!header) return

    if (isMobile) {
        const html = document.querySelector('html')
        const mobileHeader = document.querySelector('.header__mobile')
        const menuButton = mobileHeader.querySelector('.header__menu-button')

        const top = mobileHeader.offsetHeight
        const headerMobileWrapper = mobileHeader.querySelector('.header__mobile-wrapper')
        headerMobileWrapper.style.height = `calc(100svh - ${top}px)`
        headerMobileWrapper.style.top = `${top}px`

        menuButton.addEventListener('click', () => {
            mobileHeader.classList.toggle('menu-opened')
            html.classList.toggle('disabled-scroll')
            const menuOpened = mobileHeader.classList.contains('menu-opened')
            menuButton.textContent = menuOpened ? 'Закрыть меню' : 'Меню'
        })
    }
})()
