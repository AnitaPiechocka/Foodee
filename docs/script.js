/* FUNKCJE WYKONAJĄ SIĘ DOPIERO GDY STRONA SIĘ ZAŁADUJE */
$(document).ready(function () {
/* ZMIENNE ODNOSZĄCE SIĘ DO POZYCJI W HTML I KONKRETNYCH DANYCH NA ICH TEMAT, JAK NP. JAK DALEKO OD GÓRY ZNAJDUJE SIĘ NAVBAR */
    var nav = $("#navbar");
    var navh = $("#navbar").offset().top;
    var stickynav ="sticky";
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
        var pos = $(sec).offset().top-85;
        var tit = $(navi);
        var over = "oversection";
        if($(this).scrollTop() > pos && $(this).scrollTop() < (pos + $(sec).height())) {
            tit.addClass(over);
        }
        else {
            tit.removeClass(over);
        }
    };
/* FUNKCJA WYKONA SIĘ PRZY SCROLLOWANIU */
    $(window).scroll(function(){
        checkPos();
        navHighlight('#home', '#home-section');
        navHighlight('#about', '#about-section');
        navHighlight('#menu', '#menu-section');
        navHighlight('#reservation','#reservation-section');
    });
/* WYWOŁANIE FUNKCJI, ABY PO ODŚWIEŻENIU NAVBAR BYŁ TAM GDZIE POWINIEN */
    checkPos();
/* FUNKCJE PRZEWIJAJĄCE NASZ WIDOK DO KONKRETNEJ SEKCJI NA STRONIE Z PŁYNNĄ ANIMACJĄ */
    $("#home").click(function(){
        $('html, body').animate({
            scrollTop: $("#home-section").offset().top
        }, 500);
    });

    $("#about").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top-70
        }, 500);
    });

    $("#menu").click(function () {
        $('html, body').animate({
            scrollTop: $("#menu-section").offset().top-70
        }, 500);
    });

    $("#reservation").click(function () {
        $('html, body').animate({
            scrollTop: $("#reservation-section").offset().top-70
        }, 500);
    });
});