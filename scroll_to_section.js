$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var blockID = $(this).data('scroll');
    var pageOffset = $(blockID).offset().top;

    $("html, body").animate({
        scrollTop: pageOffset
    })
});