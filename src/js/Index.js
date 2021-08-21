import { polyfill } from './modules/polyfill'
import { newList } from './modules/newList'
import { accordion } from './modules/accordion'
import { aos } from './modules/aos'

document.addEventListener('DOMContentLoaded', () => {
    polyfill()
    accordion()
    aos()
    // newList()
})