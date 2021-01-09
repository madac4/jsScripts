document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    // const hero = document.querySelector('.hero');

    const headerFixed = () => {
        let scrollPos = window.scrollY;
        let headerHeight = header.offsetHeight + 150;

        // If Header is fixed use this
        (scrollPos >= headerHeight) ? header.classList.add('fixed'): header.classList.remove('fixed');


        // If Header is relative use this

        // if (scrollPos >= headerHeight) {
        //     header.classList.add('fixed')
        //     hero.style.marginTop = `${header.offsetHeight}px`;
        // } else {
        //     header.classList.remove('fixed')
        //     hero.style.marginTop = `0px`;
        // }
    };

    headerFixed();
    window.addEventListener('scroll', () => {
        headerFixed();
    });
});