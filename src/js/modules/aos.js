import AOS from 'aos';

export const aos = () => {
    AOS.init({
        useClassNames: true,
        once: true,
        delay: 0,
        duration: 1000,
    })
}