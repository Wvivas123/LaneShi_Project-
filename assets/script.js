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
  $('.circle').click(function () {
    if (click1 === true) {
      total = div1 + total;
      console.log(total);
      click1 = false;
    } else {
      console.log('it works');
    }
  });
  $('.square').click(function () {
    if (click2 === true) {
      total = div2 + total;
      console.log(total);
      click2 = false;
    } else {
      console.log('it works');
    }
  });
  $('.please').click(function () {
    if (click3 === true) {
      total = div3 + total;
      console.log(total);
      click3 = false;
    } else {
      console.log('it works');
    }
  });

  //On Click Dessolve the Body and display the Div
  $('.lastflower').click(function () {
    $('.animation1').fadeOut('slow', function () {
      // Animation complete.
      if (total === 0) {
        $('.front').append(
          '<audio src="assets/song0.mp3" controls autoplay></audio>'
        );
      }
      if (total === 1) {
        $('.front').append(
          '<audio src="assets/song1.mp3" controls autoplay></audio>'
        );
      }
      if (total === 3) {
        $('.front').append(
          '<audio src="assets/song3.mp3" controls autoplay></audio>'
        );
      }
      if (total === 5) {
        $('.front').append(
          '<audio src="assets/song5.mp3" controls autoplay></audio>'
        );
      }
      if (total === 4) {
        $('.front').append(
          '<audio src="assets/song4.mp3" controls autoplay></audio>'
        );
      }
      if (total === 8) {
        $('.front').append(
          '<audio src="assets/song8.mp3" controls autoplay></audio>'
        );
      }
      if (total === 9) {
        $('.front').append(
          '<audio src="assets/song9.mp3" controls autoplay></audio>'
        );
      }
    });
  });
});
