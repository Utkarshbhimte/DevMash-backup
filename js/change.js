current = "";

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

$('#n2,#n3,#n4').on('click', function() {
    if (current == "form") {
      console.log("yeah");
        current = "";
        $.scrollify.enable();

        $('#canvas').removeClass("animated fadeInLeft").addClass("animated fadeOutLeft");
        setTimeout(function() {
            $('#canvas').load("main.html").removeClass("animated fadeOutLeft").addClass("animated fadeInRight");
            document.body.scrollTop = $('#canvas').offset().top;
        }, 1000);
      }else {

      }
});
