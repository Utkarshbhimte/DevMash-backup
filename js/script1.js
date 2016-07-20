$(document).ready(function() {
    $('#canvas').load("main.html");

    smoothScrolling();

    var width = $(window).width(),
        height = $(window).height();
    current = "home";

    console.log("mobile - " + (width <= 800));

    $('.btnToForm').on('click', function() {
        if (current !== "form") {
            current = "form";
            console.log("current");
            $.scrollify.disable();
            current = "form";
            $('#canvas').removeClass("animated fadeInLeft").addClass("animated fadeOutLeft");
            setTimeout(function() {
                $('#canvas').load("form.html").removeClass("animated fadeOutLeft").addClass("animated fadeInRight");
                document.body.scrollTop = $('#canvas').offset().top;
            }, 1000);
        }
    });

    $('.btnToHome').on('click', function() {
        if (current !== "home") {

            current = "home";
            $('#canvas').addClass("animated fadeOutUp");
            setTimeout(function() {
                document.body.scrollTop = $('body').offset().top;
                $('#canvas').load("content.html").removeClass("animated fadeOutUp").addClass("animated fadeInUp");
            }, 1000);
        }
    });

    $('.btnToTracks').on('click', function() {
        if (current !== "tracks") {

            current = "tracks";
            $('#canvas').addClass("animated fadeOutUp");

            setTimeout(function() {
                document.body.scrollTop = $('body').offset().top;
                $('#canvas').load("tracks.html");
                setTimeout(function() {
                    $('#canvas').removeClass("animated fadeOutUp").addClass("animated fadeInUp");
                }, 1000);
            }, 1000);
        }
    });

    $('.btnToTeam').on('click', function() {
        if (current !== "team") {

            current = "team";
            $('#canvas').addClass("animated fadeOutUp");
            setTimeout(function() {
                document.body.scrollTop = $('body').offset().top;
                $('#canvas').load("team.html");

                setTimeout(function() {
                    $('#canvas').removeClass("animated fadeOutUp").addClass("animated fadeInUp");

                    setTimeout(function() {
                        $('.mentorsImage').removeClass("invisible").addClass("animated bounceIn");
                        $('.mentorsName').removeClass("invisible").addClass("animated flipInX");
                        $('.mTitle').removeClass("invisible").addClass("animated flipInX");
                        $('#team .fa').removeClass("invisible").addClass("animated flipInX");
                        $('.part-logo').removeClass("invisible").addClass("animated flipInX");

                    }, 1000);
                }, 200);
            }, 1000);
        }
    });




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
            $('.form-container').removeClass("invisible").addClass("animated slideInDown");
            $('footer').removeClass("invisible").addClass("animated slideInLeft");
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
