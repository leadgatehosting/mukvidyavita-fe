/* eslint-disable no-undef */
export const initLegacyScripts = () => {
    // Wait for jQuery to be available
    if (typeof window.jQuery === 'undefined') {
        setTimeout(initLegacyScripts, 100);
        return;
    }

    (function ($) {
        "use strict";

        // Re-init AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'slide'
            });
        }

        // Stellar
        if ($.fn.stellar) {
            $(window).stellar({
                responsive: false,
                parallaxBackgrounds: true,
                parallaxElements: true,
                horizontalScrolling: false,
                hideDistantElements: false,
                scrollProperty: 'scroll'
            });
        }

        // Full Height
        var fullHeight = function () {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height());
            });
        };
        fullHeight();

        // Loader
        var loader = function () {
            setTimeout(function () {
                if ($('#ftco-loader').length > 0) {
                    $('#ftco-loader').removeClass('show');
                }
            }, 1);
        };
        loader();

        // Scrollax
        if ($.Scrollax) {
            $.Scrollax();
        }

        // Carousel
        var carousel = function () {
            if ($.fn.owlCarousel) {
                $('.carousel-cause').owlCarousel({
                    autoplay: true,
                    center: true,
                    loop: true,
                    items: 1,
                    margin: 30,
                    stagePadding: 0,
                    nav: true,
                    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
                    responsive: {
                        0: {
                            items: 1,
                            stagePadding: 0
                        },
                        600: {
                            items: 2,
                            stagePadding: 50
                        },
                        1000: {
                            items: 3,
                            stagePadding: 100
                        }
                    }
                });
            }
        };
        carousel();

        // Navbar Dropdown
        $('nav .dropdown').hover(function () {
            var $this = $(this);
            $this.addClass('show');
            $this.find('> a').attr('aria-expanded', true);
            $this.find('.dropdown-menu').addClass('show');
        }, function () {
            var $this = $(this);
            $this.removeClass('show');
            $this.find('> a').attr('aria-expanded', false);
            $this.find('.dropdown-menu').removeClass('show');
        });

        $('#dropdown04').on('show.bs.dropdown', function () {
            console.log('show');
        });

        // Scroll Window
        var scrollWindow = function () {
            $(window).scroll(function () {
                var $w = $(this),
                    st = $w.scrollTop(),
                    navbar = $('.ftco_navbar'),
                    sd = $('.js-scroll-wrap');

                if (st > 150) {
                    if (!navbar.hasClass('scrolled')) {
                        navbar.addClass('scrolled');
                    }
                }
                if (st < 150) {
                    if (navbar.hasClass('scrolled')) {
                        navbar.removeClass('scrolled sleep');
                    }
                }
                if (st > 350) {
                    if (!navbar.hasClass('awake')) {
                        navbar.addClass('awake');
                    }
                    if (sd.length > 0) {
                        sd.addClass('sleep');
                    }
                }
                if (st < 350) {
                    if (navbar.hasClass('awake')) {
                        navbar.removeClass('awake');
                        navbar.addClass('sleep');
                    }
                    if (sd.length > 0) {
                        sd.removeClass('sleep');
                    }
                }
            });
        };
        scrollWindow();

        // Counter
        var counter = function () {
            if ($('#section-counter').length > 0 && $.fn.waypoint) {
                $('#section-counter').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                        $('.number').each(function () {
                            var $this = $(this),
                                num = $this.data('number');
                            $this.animateNumber(
                                {
                                    number: num,
                                    numberStep: comma_separator_number_step
                                }, 7000
                            );
                        });
                    }
                }, { offset: '95%' });
            }
        }
        counter();

        // Content Waypoint (Animations)
        var contentWayPoint = function () {
            var i = 0;
            if ($.fn.waypoint) {
                $('.ftco-animate').waypoint(function (direction) {
                    if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                        i++;
                        $(this.element).addClass('item-animate');
                        setTimeout(function () {
                            $('body .ftco-animate.item-animate').each(function (k) {
                                var el = $(this);
                                setTimeout(function () {
                                    var effect = el.data('animate-effect');
                                    if (effect === 'fadeIn') {
                                        el.addClass('fadeIn ftco-animated');
                                    } else if (effect === 'fadeInLeft') {
                                        el.addClass('fadeInLeft ftco-animated');
                                    } else if (effect === 'fadeInRight') {
                                        el.addClass('fadeInRight ftco-animated');
                                    } else {
                                        el.addClass('fadeInUp ftco-animated');
                                    }
                                    el.removeClass('item-animate');
                                }, k * 50, 'easeInOutExpo');
                            });
                        }, 100);
                    }
                }, { offset: '95%' });
            }
        };
        contentWayPoint();

        // Magnific Popup
        if ($.fn.magnificPopup) {
            $('.image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                },
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300
                }
            });

            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }

    })(window.jQuery);
};
