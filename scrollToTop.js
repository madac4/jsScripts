const scrollBtn = document.querySelector('.scroll_top');

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});