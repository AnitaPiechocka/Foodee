$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#f1').fadeOut("f1")
    } else {
      $('#f1').fadeIn("f1");
    }
  });
});
