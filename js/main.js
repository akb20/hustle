$(function() {
    $('.mobile-menu').on('click', function(e) {
        e.stopPropagation();
        $('nav').toggleClass('active').toggleClass('animated fadeIn');
    });
    $(window).scroll(function() {
        var sc = $(window).scrollTop()
        if (sc > 450) {
            $(".logo").addClass("small")
        } else {
            $(".logo").removeClass("small")
        }
        if (sc > 450) {
            $("header").addClass("transparent")
        } else {
            $("header").removeClass("transparent")
        }
        if (sc > 450) {
            $(".nav-links").addClass("small")
        } else {
            $(".nav-links").removeClass("small")
        }
    });
});
