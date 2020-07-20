jQuery(document).ready(function ($) {
  let total = 0;
  let div1 = 1;
  let div2 = 3;
  let div3 = 5;

  $('html, body').animate({ scrollTop: $('.animation1').offset().top }, 1000);

  //$('.topdiv').click(function () {
  //  total++;
  // console.log(total);
  //});

  //On Click Dessolve the Body and display the Div
  $('.fire').click(function () {
    $('.animation1').fadeOut('slow', function () {
      // Animation complete.
      $('.front').append(
        '<audio src="assets/song1.mp3" controls autoplay></audio>'
      );
    });
  });
});
