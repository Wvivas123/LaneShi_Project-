jQuery(document).ready(function ($) {
  let total = 0;
  let div1 = 1;
  let div2 = 3;
  let div3 = 5;
  let click1 = true;
  let click2 = true;
  let click3 = true;

  $('html, body').animate({ scrollTop: $('.animation1').offset().top }, 1000);
  // On click  increment to total
  $('.topdiv').click(function () {
    if (click1 === true) {
      total = div1 + total;
      console.log(total);
      click1 = false;
    } else {
      console.log('it works');
    }
  });
  $('.leftvid').click(function () {
    if (click2 === true) {
      total = div2 + total;
      console.log(total);
      click2 = false;
    } else {
      console.log('it works');
    }
  });
  $('.rightvid').click(function () {
    if (click3 === true) {
      total = div3 + total;
      console.log(total);
      click3 = false;
    } else {
      console.log('it works');
    }
  });

  //On Click Dessolve the Body and display the Div
  $('.fire').click(function () {
    $('.animation1').fadeOut('slow', function () {
      // Animation complete.
      if (total === 0) {
        $('.front').append(
          '<audio src="assets/track0.mp3" controls autoplay></audio>'
        );
      } else {
        $('.front').append(
          '<audio src="assets/song1.mp3" controls autoplay></audio>'
        );
      }
    });
  });
});
