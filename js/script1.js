$(document).ready(function() {
    $('#canvas').load("main.html");

    smoothScrolling();

    var width = $(window).width(),
        height = $(window).height();
    current = "home";

    console.log("mobile - " + (width <= 800));



    function smoothScrolling() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    }



    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();

        if (wScroll > $('#second').offset().top - 50) {
            $('#3-tracksvg img').removeClass("invisible").addClass("animated bounceIn");
        }

        if (wScroll > $('#three').offset().top - height / 3) {
            $('#three .four').removeClass("invisible").addClass("animated fadeInLeft");
            $('#three .eight').removeClass("invisible").addClass("animated fadeinTop");
            $('#three .button').removeClass("invisible").addClass("animated bounceIn");

        }

        if (wScroll > $('#four').offset().top - height / 3) {
            $('#four .four').removeClass("invisible").addClass("animated fadeInLeft");
            $('#four .eight').removeClass("invisible").addClass("animated fadeinTop");
            $('#four .button').removeClass("invisible").addClass("animated bounceIn")
        }

        if (wScroll > $('#five').offset().top - height / 3) {
            $('#five .four').removeClass("invisible").addClass("animated fadeInLeft");
            $('#five .eight').removeClass("invisible").addClass("animated fadeinTop");
            $('#five .button').removeClass("invisible").addClass("animated bounceIn")
        }

        if (wScroll > $('#team').offset().top - height / 3) {
          $('.mentorsImage').removeClass("invisible").addClass("animated fadeInLeft");
          $('.mentorsName').removeClass("invisible").addClass("animated fadeinTop");
          $('.mTitle').removeClass("invisible").addClass("animated bounceIn")
          $('.fa').removeClass("invisible").addClass("animated bounceIn")
        }

        if (wScroll > $('#partners').offset().top - 100) {
            $('#partners h1').removeClass("invisible").addClass("animated slideInDown");
            $('#partners hr').removeClass("invisible").addClass("animated bounceIn");
            $('#partners img').removeClass("invisible").addClass("animated slideInUp");
        }

    });


    $('body').on('keydown', 'input, select, textarea', function(e) {
        var self = $(this),
            form = self.parents('form:eq(0)'),
            focusable, next;
        if (e.keyCode == 13) {
            focusable = form.find('input,a,select,button,textarea').filter(':visible');
            next = focusable.eq(focusable.index(this) + 1);
            if (next.length) {
                next.focus();
            } else {
                form.submit();
            }
            return false;
        }
    });

});
