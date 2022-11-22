jQuery(function ($) {
    jQuery(document).ready(function () {

        // Mobile menu
        $(".hamburger").click(function () {
            $(this).toggleClass("is-active");
            $(".menu-breakpoint").toggleClass("is-active");
        });

        // Slider
        $(".banner_slider").slick({
            infinite: true,
            dots: true,
            appendDots: $(".slider-dots"),
            speed: 300,
            arrows: true,
            prevArrow: $('.slick-next'),
            nextArrow: $('.slick-prev'),
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        });
    });
})





