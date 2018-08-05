var footerY = $('footer').offset().top;
var aboutY = $('#about-section').offset().top;

$("document").ready(function () {
    console.log("scroll " + scrollY);
    console.log("about " + aboutY);
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


$("document").ready(function () {
    console.log("scroll " + scrollY);
    console.log("footer " + footerY);
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