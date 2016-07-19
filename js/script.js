$(document).ready(function() {

    var width = $(window).width(),
        height = $(window).height();
    console.log((width <= 800));
    
    $('select').on('focus', function() {
        document.body.scrollTop = $(this).offset().top + (height / 2);
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

    $('.scrollspy').scrollSpy();

    $.scrollify({
        section: "section",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: false,
        standardScrollElements: ".dropdown-content",
        setHeights: true,
        overflowScroll: true,
        before: function() {},
        after: function() {},
        afterResize: function() {},
        afterRender: function() {}
    });

    $('select').material_select();

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
            /*      if (!(($.scrollify.isDisabled()))) {
                    console.log((width <= 800));
                    console.log("check initiated");
                          check();
                      }*/
        }

    });
    /*
                    function check() {
                        if ((width <= 800)) {
                            console.log("mobile");
                            $.scrollify.disable();
                            $("#btnToForm").attr("href", "#form");
                            $("#btnToTeam").attr("href", "#team");
                            $("#btnToTracks").attr("href", "#three");
                            $("#btnToHome").attr("href", "#LandingPage");

                            smoothScrolling();
                        }
                    } */
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
