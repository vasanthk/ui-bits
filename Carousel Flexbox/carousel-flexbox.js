var $carousel = $('.carousel');
var $seats = $('.carousel-seat');

function next($el) {
  if ($el.next().length > 0) {
    return $el.next();
  } else {
    return $seats.first();
  }
}

function prev($el) {
  if ($el.prev().length > 0) {
    return $el.prev();
  } else {
    return $seats.last();
  }
}

$('.toggle').on('click', function (e) {
  var $newSeat;
  var $el = $('.is-ref');
  var $currSliderControl = $(e.currentTarget);
  // Info: e.target is what triggers the event dispatcher to trigger and e.currentTarget is what you assigned your listener to.

  $el.removeClass('is-ref');
  if ($currSliderControl.data('toggle') === 'next') {
    $newSeat = next($el);
    $carousel.removeClass('is-reversing');
  } else {
    $newSeat = prev($el);
    $carousel.addClass('is-reversing');
  }
  $newSeat.addClass('is-ref').css('order', 1);
  for (var i = 2; i <= $seats.length; i++) {
    $newSeat = next($newSeat).css('order', i);
  }

  $carousel.removeClass('is-set');
  return setTimeout(function () {
    return $carousel.addClass('is-set');
  }, 50);
});
