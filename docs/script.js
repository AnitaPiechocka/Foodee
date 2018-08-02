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
/* FUNKCJA WYKONA SIĘ PRZY SCROLLOWANIU */
    $(window).scroll(function(){
        checkPos();
    });
/* WYWOŁANIE FUNKCJI, ABY PO ODŚWIEŻENIU NAVBAR BYŁ TAM GDZIE POWINIEN */
    checkPos();

    $("#home").click(function(){
        $('html, body').animate({
            scrollTop: $("#home-section").offset().top
        }, 500);
    });

    $("#about").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top
        }, 500);
    });

    $("#menu").click(function () {
        $('html, body').animate({
            scrollTop: $("#menu-section").offset().top
        }, 500);
    });

    $("#reservation").click(function () {
        $('html, body').animate({
            scrollTop: $("#reservation-section").offset().top
        }, 500);
    });
});