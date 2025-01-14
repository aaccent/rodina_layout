import { isMobile } from '@/globals/adaptive'
import { createYMap } from '@/features/maps/createYMap'

const YANDEX_MAP_KEY = '3b0f34a6-e20f-45e6-8b4f-fa2120d7244d'

void (function () {
    const mapContainer = document.querySelector('.map-container')
    if (!mapContainer) return
    mapContainer.dataset.key = YANDEX_MAP_KEY

    const options = isMobile
        ? {
              iconImageSize: [20, 50],
              iconImageOffset: [-11, -45],
              zoom: 15,
          }
        : {
              zoom: 16,
              iconImageSize: [30, 60],
              iconImageOffset: [-19, -60],
          }

    createYMap('.map-container', {
        zoom: options.zoom,
        placemarkOptions: {
            iconLayout: 'default#image',
            iconImageHref: './assets/icons/mark.svg',
            iconImageSize: options.iconImageSize,
            iconImageOffset: options.iconImageOffset,
        },
    })
})()
