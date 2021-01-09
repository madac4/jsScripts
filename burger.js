$('.burger-menu').click(function () {
    $('.burger-menu, .header-top-links, .header-top-search').toggleClass('active');
    $('body').toggleClass('lock');
});