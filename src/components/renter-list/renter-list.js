void (function () {
    const renterItems = document.querySelectorAll('.renter-list__item')

    renterItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            const currentOpened = document.querySelector('.renter-list__item._opened')

            if (currentOpened === e.currentTarget) {
                e.currentTarget.classList.remove('_opened')
                return
            }
            currentOpened?.classList.remove('_opened')
            e.currentTarget.classList.add('_opened')
        })
    })
})()
