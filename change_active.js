window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (window.innerWidth > 768) {

        document.querySelectorAll('.section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.nav_menu').clientHeight <= (scrollDistance + 130)) {
                document.querySelectorAll('.nav_menu a').forEach((el) => {
                    if (el.classList.contains('current')) {
                        el.classList.remove('current');
                    }
                });

                document.querySelectorAll('.nav_menu li')[i].querySelector('a').classList.add('current');
            }
        });
    }
});