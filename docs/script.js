var footerY = $('footer').offset().top;
var aboutY = $('#right').offset().top;
// Home section
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 60) {
      $('#f1').fadeOut("f1")
    } else {
      $('#f1').fadeIn("f1");
    }
  });
});
//About section
$("document").ready(function () {
    var animate = function () {
        var scrollY = $(window).scrollTop() + 650;
        console.log("scroll " + scrollY);
        if (scrollY > aboutY) {
            $('#about-header h2').animate({
                opacity: "1",
                bottom: "10px"
            }, 500);
            $('#about-content').delay(200).animate({
                opacity: "1",
                bottom: "10px"
            }, 500);
            $('#get-in-touch').delay(400).animate({
                opacity: "1",
                bottom: "10px"
            }, 500);
        }
    };

    animate();

    $(window).scroll(function () {
        animate();
    });
});

//Footer
$("document").ready(function () {
    var animate = function () {
        var scrollY = $(window).scrollTop() + 650;
        console.log("scroll " + scrollY);
        if (scrollY > footerY) {
            $('#copyright').animate({
                opacity: "1"
            }, 500);
            $('#link').delay(100).animate({
                opacity: "1"
            }, 500);

            $('#fb').animate({
                opacity: "1",
                bottom: "20px"
            }, 500);
            $('#tw').delay(250).animate({
                opacity: "1",
                bottom: "20px"
            }, 500);
            $('#ig').delay(500).animate({
                opacity: "1",
                bottom: "20px",
            }, 500);
        }
    };

    animate();

    $(window).scroll(function () {
        animate();
    });
});


$("document").ready(function () {
    $('#go-to-top').click(function () {
        $('html, body').animate({
            scrollTop: $("#home-section").offset().top
        }, 1000);
    });
});