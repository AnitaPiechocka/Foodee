$(document).ready(function () {
    var nav = $('.navbar');
    var stickynav ="sticky";
    var headerh = $('.header').height();

    $(window).scroll(function() {
        if( $(this).scrollTop() > headerh) {
            nav.addClass(stickynav);
        }
        else {
            nav.removeClass(stickynav);
        }
    
    });
});