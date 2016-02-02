var $first = $('.item').first();
var $last = $('.item').last();
var slideWidth = $first.width();
var $carousel = $('.carousel');

// Add last slide before first and first one after last.
// This is to keep the slide navigation smooth.
// The order now is: 4-1-2-3-4-1
$carousel.prepend($last.clone()).append($first.clone());
// Re-assign total carousel width by including the 2 newly cloned slides.
$carousel.width(slideWidth * $('.item').length);
// Move the carousel position to the first slide
$carousel.css({
  left: -slideWidth
});

// Event Handlers for Prev/Next clicks
$('.prev').on('click', function (e) {
  e.preventDefault(); // Prevent Default action of <a> tag click.
  $carousel.animate({
    left: '+=' + slideWidth
  }, 300, function () {
    if (Math.abs($carousel.position().left) < 2) {
      // If in slide 1 - which is 4 from the order 4-1-2-3-4-1
      // then shift position to 4 in end - 2;
      $carousel.css({
        left: -slideWidth * ($carousel.children().length - 2)
      });
    }
  });
  return false;
});

$('.next').on('click', function (e) {
  e.preventDefault();
  $carousel.animate({
    left: '-=' + slideWidth
  }, 300, function () {
    if (Math.abs($carousel.position().left + slideWidth * ($carousel.children().length - 1)) < 2) {
      $carousel.css({
        left: -slideWidth
      });
    }
  });
  return false;
});
