$(document).ready(function() {
    $('#canvas').load("main.html");
    var width = $(window).width(),
        height = $(window).height(),
        current = "";

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
    $('.btnToForm').on('click', function() {
        if (current !== "form") {
            current = "form";
            console.log("current");
            $.scrollify.disable();
            $("#nav-btns a").removeClass("active");
            $("#n1").addClass("active");
            current = "form";
            $('#canvas').removeClass("animated fadeInLeft").addClass("animated fadeOutLeft");
            setTimeout(function() {
                $('#canvas').load("form.html").removeClass("animated fadeOutLeft").addClass("animated fadeInRight");
                document.body.scrollTop = $('body').offset().top;
            }, 1000);
        }
    });

    $('#n2,#n3,#n4').on('click', function() {
        if (current == "form") {
          console.log("yeah");
            current = "";
            $.scrollify.enable();
            $("#nav-btns a").removeClass("active");
            $(this).addClass("active");
            $('#canvas').removeClass("animated fadeInLeft").addClass("animated fadeOutLeft");
            setTimeout(function() {
                $('#canvas').load("main.html").removeClass("animated fadeOutLeft").addClass("animated fadeInRight");
                document.body.scrollTop = $('body').offset().top;
            }, 1000);
        }
    });
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
            $('#second p').removeClass("invisible").addClass("animated bounceIn");
        }

        if (wScroll > $('#three').offset().top - 50) {
            $('#three .four').removeClass("invisible").addClass("animated fadeInLeft");
            $('#three .eight').removeClass("invisible").addClass("animated fadeinTop");
            $('#three .button').removeClass("invisible").addClass("animated bounceIn")

        }

        if (wScroll > $('#four').offset().top - 50) {
            $('#four .four').removeClass("invisible").addClass("animated fadeInLeft");
            $('#four .eight').removeClass("invisible").addClass("animated fadeinTop");
            $('#four .button').removeClass("invisible").addClass("animated bounceIn")
        }

        if (wScroll > $('#five').offset().top - 50) {
            $('#five .four').removeClass("invisible").addClass("animated fadeInLeft");
            $('#five .eight').removeClass("invisible").addClass("animated fadeinTop");
            $('#five .button').removeClass("invisible").addClass("animated bounceIn")
        }

        if (wScroll > $('#team').offset().top - 50) {
            $('.mentorsImage').removeClass("invisible").addClass("animated bounceIn");
            $('.mentorsName').removeClass("invisible").addClass("animated flipInX");
            $('.mTitle').removeClass("invisible").addClass("animated flipInX");
            $('#team .fa').removeClass("invisible").addClass("animated flipInX");


        }

        if (wScroll > $('.form-container').offset().top - 100) {
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
    // This will fire when document is ready:
});

function submitMessage(message) {
    console.log("reached!");
    var $toastContent = $('<span>' + message + '</span>');
    Materialize.toast($toastContent, 2000);
}
