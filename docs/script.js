$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('h1').css({"opacity" : "0.2"});
    } else {
      $('h1').css({"opacity" : "1"});
    }
  });
});
