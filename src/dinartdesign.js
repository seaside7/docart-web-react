$(window).load(function () {
    $('#loader').fadeOut();
    $("#opencategory").hide();
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 60) {
        $(".navbar-custom").addClass("navbar-fixed-top");
    } else {
        $(".navbar-custom").removeClass("navbar-fixed-top");
    }
});

$(function () {
    $('.inputrating').rating();
    $('[data-toggle="tooltip"]').tooltip();

})

jQuery(document).ready(function ($) {
    $('#productImg').carousel({
        interval: 5000
    });
    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id = this.id.substr(this.id.lastIndexOf("-") + 1);
        var id = parseInt(id);
        $('#productImg').carousel(id);
    });
    // When the carousel slides, auto update the text
    $('#productImg').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
    $("#opencategory").hide();
    $("#showcategory").click(function () {
        $("#menucategory").slideToggle();
        $("#showcategory").hide();
        $("#opencategory").show();
    });
    $("#opencategory").click(function () {
        $("#menucategory").slideToggle();
        $("#showcategory").show();
        $("#opencategory").hide();
    });
});


$(document).ready(function () {
    $("#carousel-promo-harini,#carousel-makanan-minuman,#related-product,#carousel-consumer-good,#carousel-agrikultur").owlCarousel({
        items: 6,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsTabletSmall: false,
        itemsMobile: [479, 2],
        singleItem: false,
        itemsScaleUp: false,
        lazyLoad: true,
        // Navigation
        navigation: false,
        navigationText: ["prev", "next"],
        rewindNav: true,
        scrollPerPage: false,
        //Pagination
        pagination: true,
        paginationNumbers: true,
        // Responsive 
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
    });
});



$("#proses-belanja").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true
});

