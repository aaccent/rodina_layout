void (function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const doorElement = entry.target.querySelector('.room-section__door-with-animation')
                if (!doorElement) return

                if (entry.isIntersecting) {
                    doorElement.classList.add('animation')
                } else {
                    doorElement.classList.remove('animation')
                }
            })
        },
        {
            threshold: 0.1,
            rootMargin: '-200px 0px -200px 0px',
        },
    )

    const roomSections = document.querySelectorAll('.room-section__bottom-wall')
    roomSections.forEach((section) => {
        observer.observe(section)
    })
})()
