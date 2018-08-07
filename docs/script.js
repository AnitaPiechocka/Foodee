
var footerY = $('footer').offset().top;
var aboutY = $('#right').offset().top;
//Navbar
/* FUNKCJE WYKONAJĄ SIĘ DOPIERO GDY STRONA SIĘ ZAŁADUJE */
$(document).ready(function () {
    /* ZMIENNE ODNOSZĄCE SIĘ DO POZYCJI W HTML I KONKRETNYCH DANYCH NA ICH TEMAT, JAK NP. JAK DALEKO OD GÓRY ZNAJDUJE SIĘ NAVBAR */
    var nav = $("#navbar");
    var navh = $("#navbar").offset().top;
    var stickynav = "sticky";

    /* FUNKCJA SPRAWDZAJĄCA POZYCJĘ NAVBARA */
    function checkPos() {
        /* JEŚLI WARTOŚĆ PRZESUNIĘCIA BĘDZIE WIĘKSZA OD DOMYŚLNEJ POZYCJI NAVBARA, NADAJE MU KLASE "STICKY",
        KTÓRA USTALA MU POZYCJE FIXED U GÓRY EKRANU I ODBIERA MU TĘ KLASĘ GDY WARTOŚĆ TA JEST MNIEJSZA */
        if ($(this).scrollTop() > navh) {
            nav.addClass(stickynav);
        }
        else {
            nav.removeClass(stickynav);
        }
    };

    /* FUNKCJA PODŚWIETLAJĄCA POZYCJĘ W NAVBARZE, KTÓRA ODPOWIADA OBECNEJ POZYCJI NA STRONIE */
    function navHighlight(navi, sec) {
        var pos = $(sec).offset().top - 85;
        var tit = $(navi);
        var over = "oversection";
        if ($(this).scrollTop() > pos && $(this).scrollTop() < (pos + $(sec).height())) {
            tit.addClass(over);
        }
        else {
            tit.removeClass(over);
        }
    };
    /* FUNKCJA WYKONA SIĘ PRZY SCROLLOWANIU */
    $(window).scroll(function () {
        checkPos();
        navHighlight('#home', '#home-section');
        navHighlight('#about', '#about-section');
        navHighlight('#menu', '#menu-section');
        navHighlight('#reservation', '#reservation-section');
    });
    /* WYWOŁANIE FUNKCJI, ABY PO ODŚWIEŻENIU NAVBAR BYŁ TAM GDZIE POWINIEN */
    checkPos();
    /* FUNKCJE PRZEWIJAJĄCE NASZ WIDOK DO KONKRETNEJ SEKCJI NA STRONIE Z PŁYNNĄ ANIMACJĄ */
    $("#home").click(function () {
        $('html, body').animate({
            scrollTop: $("#home-section").offset().top
        }, 500);
    });

    $("#about").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top - 70
        }, 500);
    });

    $("#menu").click(function () {
        $('html, body').animate({
            scrollTop: $("#menu-section").offset().top - 70
        }, 500);
    });

    $("#reservation").click(function () {
        $('html, body').animate({
            scrollTop: $("#reservation-section").offset().top - 70
        }, 500);
    });
});

// Home section
$(document).ready(function () {
    $(window).scroll(function () {
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

$(document).ready(function () {
  $('#datetimepicker1').datetimepicker();
});

