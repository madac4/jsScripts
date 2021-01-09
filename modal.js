const btn = document.querySelector('.share_btn');
const modalOverlay = document.querySelector('.modal_overlay');
const modal = document.querySelector('.modal_window');
const modalClose = document.querySelector('.fa-times');

btn.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    document.querySelector(`[data-target="${path}"]`).classList.add('modal_window_visible');
    modalOverlay.classList.add('modal_overlay_visible');
});

modalClose.addEventListener('click', (e) => {
    modalOverlay.classList.remove('modal_overlay_visible')
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal_overlay_visible');
    }
});