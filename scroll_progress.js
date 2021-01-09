document.addEventListener('DOMContentLoaded', () => {
    const line = document.querySelector('.progress_line_item');

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        let windowHeight = window.innerHeight;
        let pageHeight = document.documentElement.scrollHeight;

        let progressBar = Math.floor(scrollPos / (pageHeight - windowHeight) * 100);

        line.style.width = `${progressBar}%`;
    });
});