import { polyfill } from './modules/polyfill'
import { accordion } from './modules/accordion'
import { aos } from './modules/aos'

document.addEventListener('DOMContentLoaded', () => {
    polyfill()
    accordion()
    aos()
})