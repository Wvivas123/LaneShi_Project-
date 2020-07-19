jQuery(document).ready(function ($) {
  $('html, body').animate({ scrollTop: $('.animation1').offset().top }, 1000);

  $('.fire').click(function () {
    $('.animation1').fadeOut('slow', function () {
      // Animation complete.
    });
  });
});
