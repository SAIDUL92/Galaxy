(function($) {
    "use strict";

    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767"
    });

    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });


    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });



    // mainSlider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            fade: false,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i> </button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i> </button>',
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();


    // owlCarousel
    $('.details-slider-active').owlCarousel({
        loop: true,
        autoplay: false,
        autoplaySpeed: false,
        margin: 0,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })


    // Reading-slider-active

    $('.Reading-slider-active').owlCarousel({
        loop: true,
        autoplay: false,
        autoplaySpeed: false,
        margin: 30,
        items: 1,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            576: {
                items: 2,
                nav: false,
                margin: 10,
            },

            992: {
                items: 3
            },
            1200: {
                items: 3
            },
            1500: {
                items: 4
            }
        }
    })

    // blog-slider-active

    $('.blog-slider-active').owlCarousel({
        loop: true,
        autoplay: false,
        autoplaySpeed: false,
        margin: 40,
        items: 1,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },

            576: {
                items: 2,
                nav: false,
            },

            992: {
                items: 3
            }
        }
    })

    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="ti-angle-double-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // WOW active
    new WOW().init();


})(jQuery);