window.addEventListener('scroll', () => {
    let topScroll = window.scrollY;
    let burger = document.querySelector('.burger_menu');
    let menu = document.querySelector('.nav_menu');
    // console.log(topScroll)
    if (topScroll > 100) {
        burger.classList.remove('active')
        menu.classList.remove('active')
    }
});