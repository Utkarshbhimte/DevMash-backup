$(document).ready(function() {

    function submitMessage(status, message) {
        console.log("reached!");
        var $toastContent = $('<span>' + message + '</span>');
        var $toastContent = $('<span>' + message + '</span>');
        Materialize.toast($toastContent, 5000); +
        if (status = 'pass') {
            console.log("1");
            $(".nav").css("background-color", "green");
            Materialize.toast($toastContent, 100000);
        } else if (status = 'fail') {
            console.log("2");
            $(".nav").css("background-color", "red");
        }

    }
}

$('.scrollspy').scrollSpy();

$.scrollify({
    section: "section",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: false,
    standardScrollElements: ".dropdown-content",
    interstitialSection: ".header,footer",
    setHeights: true,
    overflowScroll: true,
    before: function() {},
    after: function() {},
    afterResize: function() {},
    afterRender: function() {}
});



$('a[href^="#"]').click(function() {
    var target = $(this.hash);
    if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
    if (target.length == 0) target = $('html');
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 500);
    return false;
});


$('select').material_select();


$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    //      console.log("a   :" + wScroll);
    //        console.log(wScroll > $('#form').offset().top -50);
    //      console.log("b   :" + ($('#form').offset().top - 50));

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
        $('.mentorsImage').removeClass("invisible").addClass("animated bounceIn")
        $('.mentorsName').removeClass("invisible").addClass("animated flipInX")
        $('.mTitle').removeClass("invisible").addClass("animated flipInX")
        $('#team .fa').removeClass("invisible").addClass("animated flipInX")
    }

    if (wScroll > $('.form-container').offset().top - 50) {
        $('.form-container').removeClass("invisible").addClass("animated slideInDown")
    }

    if (wScroll > $('.form-container:nth-child(2)').offset().top - 50) {
        $('.form-container:nth-child(2) form').removeClass("invisible").addClass("animated slideInDown")
        $('footer').removeClass("invisible").addClass("animated slideInRight")
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
