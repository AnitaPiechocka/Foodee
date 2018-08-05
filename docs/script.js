$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#f1').css({"opacity" : "0.2"});
    } else {
      $('#f1').css({"opacity" : "1"});
    }
  });
});
