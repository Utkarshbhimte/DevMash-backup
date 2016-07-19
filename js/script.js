$(document).ready(function() {
    $('#canvas').load("main.html");
    var width = $(window).width(),
        height = $(window).height();

    console.log((width <= 800));
    smoothScrolling();

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

    /*
        $('#n2','#n3','#n4').on('click', function() {
            if (current !== "") {
                current = "";
                $("#nav-btns a").removeClass("active");
                $(this).addClass("active");
                $('#canvas').removeClass("animated fadeInRight").addClass("animated fadeOutRight");
                setTimeout(function() {
                    $('#mainPage').css('display','auto');
                    $('#canvas').load("form.html").removeClass("animated fadeOutRight").addClass("animated fadeInLeft");
                    document.body.scrollTop = $('body').offset().top;
                    $.scrollify.enable();
                }, 1000);
            }
        });*/



    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();

        if (wScroll > $('#second').offset().top - 50) {
            $('#3-tracksvg').removeClass("invisible").addClass("animated fadeinTop");
            $("#nav-btns a").removeClass("active");
            $('#n3').addClass("active");
        }

        if (wScroll > $('#three').offset().top - 50) {
            $('#three .four').removeClass("invisible").addClass("animated fadeInLeft");
            $('#three .eight').removeClass("invisible").addClass("animated fadeinTop");
            $('#three .button').removeClass("invisible").addClass("animated bounceIn");
            $("#nav-btns a").removeClass("active");
            $('#n3').addClass("active");

        }

        if (wScroll > $('#four').offset().top - 50) {
            $('#four .four').removeClass("invisible").addClass("animated fadeInLeft");
            $('#four .eight').removeClass("invisible").addClass("animated fadeinTop");
            $('#four .button').removeClass("invisible").addClass("animated bounceIn");
            $("#nav-btns a").removeClass("active");
            $('#n3').addClass("active");
        }

        if (wScroll > $('#five').offset().top - 50) {
            $('#five .four').removeClass("invisible").addClass("animated fadeInLeft");
            $('#five .eight').removeClass("invisible").addClass("animated fadeinTop");
            $('#five .button').removeClass("invisible").addClass("animated bounceIn");
            $("#nav-btns a").removeClass("active");
            $('#n3').addClass("active");
        }

        if (wScroll > $('#team').offset().top - 50) {
            $('.mentorsImage').removeClass("invisible").addClass("animated bounceIn");
            $('.mentorsName').removeClass("invisible").addClass("animated flipInX");
            $('.mTitle').removeClass("invisible").addClass("animated flipInX");
            $('#team .fa').removeClass("invisible").addClass("animated flipInX");
            $("#nav-btns a").removeClass("active");
            $('#n3').addClass("active");


        }

        if (wScroll > $('#partners').offset().top - 100) {
            $('.form-container').removeClass("invisible").addClass("animated slideInDown");
            $('footer').removeClass("invisible").addClass("animated slideInLeft");
            $("#nav-btns a").removeClass("active");
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
    // This will fire when document is ready:
});

function submitMessage(message) {
    console.log("reached!");
    var $toastContent = $('<span>' + message + '</span>');
    Materialize.toast($toastContent, 2000);
}
