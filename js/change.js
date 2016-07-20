current = "";

$('.btnToForm').on('click', function() {
    if (current !== "form") {
        current = "form";
        console.log("current");

        current = "form";
        $('#canvas').removeClass("animated fadeInLeft").addClass("animated fadeOutLeft");
        setTimeout(function() {
           $.scrollify.move(0);
           $.scrollify.disable();
           console.log("scrollify disabled - "+$.scrollify.isDisabled());
          document.body.scrollTop = $('#canvas').offset().top;
            $('#canvas').load("form.html").removeClass("animated fadeOutLeft").addClass("animated fadeInRight");
        }, 1000);
    }
});

$('.a').on('click', function() {
    if (current == "form") {
      console.log("yeah");
        current = "";
        $.scrollify.enable();
        console.log("scrollify disabled - "+$.scrollify.isDisabled());
        $('#canvas').removeClass("animated fadeInLeft").addClass("animated fadeOutLeft");
        setTimeout(function() {
            $('#canvas').load("main.html").removeClass("animated fadeOutLeft").addClass("animated fadeInRight");
            document.body.scrollTop = $('#canvas').offset().top;
        }, 1000);
      }else {

      }
});
