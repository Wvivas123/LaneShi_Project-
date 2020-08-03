jQuery(document).ready(function ($) {
  setTimeout(function () {
    $('.intro').attr('href', 'main.html');
  }, 18000);

  //$('.box').click(function (event) {
  //  event.preventDefault();
  //});

  $('.lastflower').hide();
  $('.front').hide();

  $('button').click(function () {
    $('.moblieonly').hide('slow');
  });

  let total = [];

  let click1 = true;
  let click2 = true;
  let click3 = true;
  let counter = 0;

  $('html, body').animate({ scrollTop: $('.animation1').offset().top }, 1000);

  // On click  increment to total
  $('.rbutton').click(function () {
    counter = 0;
    click1 = true;
    click2 = true;
    click3 = true;
    $('#num1').remove();
    $('#num2').remove();
    $('#num3').remove();
    total = [];
  });

  $('.rbutton-mobile').click(function () {
    counter = 0;
    click1 = true;
    click2 = true;
    click3 = true;
    $('#num1').remove();
    $('#num2').remove();
    $('#num3').remove();
    total = [];
  });

  $('.circle').click(function () {
    if (click1 === true && counter == 0) {
      $('.int').prepend('<span id="num1">1.</span>');
      counter++;
      total.push(1);
      click1 = false;

      console.log(total);
    }
    if (click1 === true && counter == 1) {
      $('.int').prepend('<span id="num2">2.</span>');
      counter++;
      total.push(1);
      click1 = false;

      console.log(total);
    }
    if (click1 === true && counter == 2) {
      $('.int').prepend('<span id="num3">3.</span>');
      counter++;
      total.push(1);
      $('.lastflower').fadeIn('slow');
      click1 = false;

      console.log(total);
    } else {
      console.log('it works');
    }
  });

  $('#squareclick').click(function () {
    if (click2 === true && counter == 0) {
      $('.experience').prepend('<span id="num1">1.</span>');
      counter++;
      total.push(2);
      click2 = false;

      console.log(total);
    }
    if (click2 === true && counter == 1) {
      $('.experience').prepend('<span id="num2">2.</span>');
      counter++;
      total.push(2);
      click2 = false;

      console.log(total);
    }
    if (click2 === true && counter == 2) {
      $('.experience').prepend('<span id="num3">3.</span>');
      counter++;
      total.push(2);
      $('.lastflower').fadeIn('slow');

      click2 = false;

      console.log(total);
    } else {
      console.log('it works');
    }
  });

  $('.please').click(function () {
    if (click3 === true && counter == 0) {
      $('.hon').prepend('<span id="num1">1.</span>');
      counter++;
      total.push(3);
      click3 = false;

      console.log(total);
    }
    if (click3 === true && counter == 1) {
      $('.hon').prepend('<span id="num2">2.</span>');
      counter++;
      total.push(3);
      click3 = false;

      console.log(total);
    }
    if (click3 === true && counter == 2) {
      $('.hon').prepend('<span id="num3">3.</span>');
      counter++;
      total.push(3);
      $('.lastflower').fadeIn('slow');
      click3 = false;

      console.log(total);
    } else {
      console.log('it works');
    }
  });

  //On Click Dessolve the Body and display the Div
  $('.lastflower').one('click', function () {
    $('.animation1').fadeOut('slow', function () {
      // Animation complete.

      $('.front').show();
      if (
        total.indexOf(1) == 0 &&
        total.indexOf(2) == 1 &&
        total.indexOf(3) == 2
      ) {
        $('.front').append(
          '<audio id="myAudio" src="assets/123.mp3" controls autoplay></audio> <a href="last.html"><button class="replay">Play Again <span>再来一次</span> </button></a>'
        );
        $('.replay').hide();
        var aud = document.getElementById('myAudio');
        aud.onended = function () {
          $('.replay').show();
        };
      }
      if (
        total.indexOf(1) == 0 &&
        total.indexOf(2) == 2 &&
        total.indexOf(3) == 1
      ) {
        $('.front').append(
          '<audio id="myAudio" src="assets/132.mp3" controls autoplay></audio> <a href="last.html"><button class="replay">Play Again <span>再来一次</span></button></a>'
        );
        $('.replay').hide();
        var aud = document.getElementById('myAudio');
        aud.onended = function () {
          $('.replay').show();
        };
      }

      if (
        total.indexOf(1) == 1 &&
        total.indexOf(2) == 2 &&
        total.indexOf(3) == 0
      ) {
        $('.front').append(
          '<audio id="myAudio" src="assets/231.mp3" controls autoplay></audio>  <a href="last.html"><button class="replay">Play Again <span>再来一次</span></button></a>'
        );
        $('.replay').hide();
        var aud = document.getElementById('myAudio');
        aud.onended = function () {
          $('.replay').show();
        };
      }
      if (
        total.indexOf(1) == 2 &&
        total.indexOf(2) == 0 &&
        total.indexOf(3) == 1
      ) {
        $('.front').append(
          '<audio id="myAudio" src="assets/312.mp3" controls autoplay></audio>  <a href="last.html"><button class="replay">Play Again <span>再来一次</span></button></a>'
        );
        $('.replay').hide();
        var aud = document.getElementById('myAudio');
        aud.onended = function () {
          $('.replay').show();
        };
      }
      if (
        total.indexOf(1) == 2 &&
        total.indexOf(2) == 1 &&
        total.indexOf(3) == 0
      ) {
        $('.front').append(
          '<audio id="myAudio" src="assets/321.mp3" controls autoplay></audio>  <a href="last.html"><button class="replay">Play Again <span> 再来一次</span></button></a>'
        );
        $('.replay').hide();
        var aud = document.getElementById('myAudio');
        aud.onended = function () {
          $('.replay').show();
        };
      }

      if (
        total.indexOf(1) == 1 &&
        total.indexOf(2) == 0 &&
        total.indexOf(3) == 2
      ) {
        $('.front').append(
          '<audio id="myAudio" src="assets/213.mp3" controls autoplay></audio>  <a href="last.html"><button class="replay">Play Again <span>再来一次</span></button></a>'
        );
        $('.replay').hide();
        var aud = document.getElementById('myAudio');
        aud.onended = function () {
          $('.replay').show();
        };
      }
    });
  });
});
