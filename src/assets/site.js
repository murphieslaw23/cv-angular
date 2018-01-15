(function ($) {
    "use strict";

    /**
     *  Variables
     */
    var body = $('body');
    var windowW = $(window).width();
    var windowH = $(window).height();
    var clickEventType = ((document.ontouchstart !== null) ? 'click' : 'touchstart');

    /**
     * Detect Device Type
     */
    var isMobile;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
        $('html').addClass('mobile');
    } else {
        isMobile = false;
        $('html').addClass('desktop');
    }

    function hideSitePreloader() {
        $('#preloader').remove();
        $('body').removeClass('loading');
    }

    function openMobileNav() {
        $('body').addClass('mobile-nav-opened');
    }

    function closeMobileNav() {
        $('body').removeClass('mobile-nav-opened');
    }

    function openSidebar() {
        $('body').addClass('sidebar-opened');
    }

    function closeSidebar() {
        $('body').removeClass('sidebar-opened');
    }

    /**
     * Document Ready
     */
    $(function() {
        // Add header navigation hover lines
        if ($('.nav-wrap .nav').length > 0) {
            $('.nav-wrap .nav > ul > li > a').append('<span></span>');
        }

        // Sticky Navigation
        var header = $('.header');
        var stickyNav = $('.head-bar');
        var stickyNavHeight = 0;
        var stickyNavigationAppear = function() {
            if(stickyNav.length > 0) {
                stickyNav.addClass('animated');
                if ($(window).width() > 767 && !isMobile) {
                    if (stickyNavHeight < stickyNav.outerHeight()) {
                        stickyNavHeight = stickyNav.outerHeight();
                        header.css('min-height', stickyNavHeight + 'px');
                    }

                    if ($(window).scrollTop() > stickyNav.outerHeight()) {
                        stickyNav.addClass('head-sticky');
                    } else {
                        stickyNav.removeClass('head-sticky');
                    }
                } else {
                    stickyNav.removeClass('head-sticky');
                    header.css('min-height', '0px');
                }

            }
        };

        stickyNavigationAppear();

        $(window).scroll(function () {
            stickyNavigationAppear();
        });

        $(window).scroll(function () {
            stickyNavigationAppear();
        });

        // open/close mobile navigation
        $(document).on(clickEventType, '.btn-mobile', function () {
            if ($('body').hasClass('mobile-nav-opened')) {
                closeMobileNav();
            } else {
                openMobileNav();
            }
        });

        /** Sidebar */

        // open/close sidebar
        $(document).on(clickEventType, '.btn-sidebar', function () {
            if ($('body').hasClass('sidebar-opened')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });


        /** Overlay:
         *  the same overlay is used for fixed sidebar and for mobile navigation */
        $(document).on(clickEventType, '#overlay', function () {
            if ($('body').hasClass('mobile-nav-opened')) closeMobileNav();

            if ($('body').hasClass('sidebar-opened')) closeSidebar();
        });

        /** Window Scroll Top Button */
        var $btnScrollTop = $('.btn-scroll-top');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $btnScrollTop.fadeIn();
            } else {
                $btnScrollTop.fadeOut();
            }
        });

        $btnScrollTop.on('click', function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
    });

})(jQuery);