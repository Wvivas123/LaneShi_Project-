jQuery(document).ready(function ($) {
  let total = [];

  let click1 = true;
  let click2 = true;
  let click3 = true;
  let counter = 0;

  $('html, body').animate({ scrollTop: $('.animation1').offset().top }, 1000);
  // On click  increment to total
  $('.circle').click(function () {
    if (click1 === true && counter == 0) {
      $('.int').prepend('<span1.</span>');
      counter++;
      total.push(1);
      click1 = false;

      console.log(total);
    }
    if (click1 === true && counter == 1) {
      $('.int').prepend('<span>2.</span>');
      counter++;
      total.push(1);
      click1 = false;

      console.log(total);
    }
    if (click1 === true && counter == 2) {
      $('.int').prepend('<span>3.</span>');
      counter++;
      total.push(1);
      click1 = false;

      console.log(total);
    } else {
      console.log('it works');
    }
  });

  $('.square').click(function () {
    if (click2 === true && counter == 0) {
      $('.experience').prepend('<span>1.</span>');
      counter++;
      total.push(2);
      click2 = false;

      console.log(total);
    }
    if (click2 === true && counter == 1) {
      $('.experience').prepend('<span>2.</span>');
      counter++;
      total.push(2);
      click2 = false;

      console.log(total);
    }
    if (click2 === true && counter == 2) {
      $('.experience').prepend('<span>3.</span>');
      counter++;
      total.push(2);
      click2 = false;

      console.log(total);
    } else {
      console.log('it works');
    }
  });

  $('.please').click(function () {
    if (click3 === true && counter == 0) {
      $('.hon').prepend('<span>1.</span>');
      counter++;
      total.push(3);
      click3 = false;

      console.log(total);
    }
    if (click3 === true && counter == 1) {
      $('.hon').prepend('<span>2.</span>');
      counter++;
      total.push(3);
      click3 = false;

      console.log(total);
    }
    if (click3 === true && counter == 2) {
      $('.hon').prepend('<span>3.</span>');
      counter++;
      total.push(3);
      click3 = false;

      console.log(total);
    } else {
      console.log('it works');
    }
  });

  //On Click Dessolve the Body and display the Div
  $('.lastflower').click(function () {
    $('.animation1').fadeOut('slow', function () {
      // Animation complete.
      if (
        total.indexOf(1) == 0 &&
        total.indexOf(2) == 1 &&
        total.indexOf(3) == 2
      ) {
        $('.front').append(
          '<audio src="assets/song0.mp3" controls autoplay></audio>'
        );
      }
      if (
        total.indexOf(1) == 1 &&
        total.indexOf(2) == 2 &&
        total.indexOf(3) == 0
      ) {
        $('.front').append(
          '<audio src="assets/song1.mp3" controls autoplay></audio>'
        );
      }
      if (
        total.indexOf(1) == 2 &&
        total.indexOf(2) == 0 &&
        total.indexOf(3) == 1
      ) {
        $('.front').append(
          '<audio src="assets/song3.mp3" controls autoplay></audio>'
        );
      }
      if (
        total.indexOf(1) == 2 &&
        total.indexOf(2) == 1 &&
        total.indexOf(3) == 0
      ) {
        $('.front').append(
          '<audio src="assets/song4.mp3" controls autoplay></audio>'
        );
      }

      if (
        total.indexOf(1) == 1 &&
        total.indexOf(2) == 0 &&
        total.indexOf(3) == 2
      ) {
        $('.front').append(
          '<audio src="assets/song5.mp3" controls autoplay></audio>'
        );
      }
    });
  });
});
