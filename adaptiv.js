// ADAPTIV
$(window).resize(function() {
    adaptive_function();
});

function adaptive_header(w,h) {
    var headerMenu = $('.burger-menu');
    var headerSearch = $('.header-top-search');
    
    if (w<768) {
        if (!headerSearch.hasClass('done')) {
            headerSearch.addClass('done').appendTo(headerMenu);
        }
    }else{
        if (headerSearch.hasClass('done')) {
            headerSearch.removeClass('done').appendTo($('.header-top'));
        }
    }
    if (w<768) {
        if (!$('.header-top-links, .header-bottom-links').hasClass('done')) {
            $('.header-top-links, .header-bottom-links').addClass('done').appendTo(headerMenu);
        }
    }else{
        if ($('.header-top-links, .header-bottom-links').hasClass('done')) {
            $('.header-top-links, .header-bottom-links').removeClass('done').appendTo($('.header-bottom'));
        }
    }
}

function adaptive_function() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header(w,h);
}
    adaptive_function();