import { polyfill } from './modules/polyfill'
import { accordList } from './modules/accordList'
import { aos } from './modules/aos'

document.addEventListener('DOMContentLoaded', () => {
    polyfill()
    aos()
    accordList()
})