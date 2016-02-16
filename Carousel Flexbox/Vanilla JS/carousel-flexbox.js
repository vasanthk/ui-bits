// http://madewithenvy.com/ecosystem/articles/2015/exploring-order-flexbox-carousel/
var $carousel = document.querySelector('.carousel');
var $seats = document.querySelectorAll('.carousel-seat');
var $toggle = document.getElementsByClassName('toggle');

document.addEventListener("click", delegate(toggleFilter, toggleHandler));

// Common helper for event delegation.
function delegate(criteria, listener) {
  return function (e) {
    var el = e.target;
    do {
      if (!criteria(el)) {
        continue;
      }
      e.delegateTarget = el;
      listener.call(this, e);
      return;
    } while ((el = el.parentNode));
  };
}

// Custom filter to check for required DOM elements
function toggleFilter(elem) {
  return (elem instanceof HTMLElement) && elem.matches(".toggle");
  // OR
  // For < IE9
  // return elem.classList && elem.classList.contains('btn');
}

// Custom event handler function
function toggleHandler(e) {
  var $newSeat;
  var $el = document.querySelector('.is-ref');
  var $currSliderControl = e.delegateTarget;
  // Info: e.target is what triggers the event dispatcher to trigger and e.currentTarget is what you assigned your listener to.

  $el.classList.remove('is-ref');
  if ($currSliderControl.getAttribute('data-toggle') === 'next') {
    $newSeat = next($el);
    $carousel.classList.remove('is-reversing');
  } else {
    $newSeat = prev($el);
    $carousel.classList.add('is-reversing');
  }

  $newSeat.classList.add('is-ref');
  $newSeat.style.order = 1;
  for (var i = 2; i <= $seats.length; i++) {
    $newSeat = next($newSeat);
    $newSeat.style.order = i;
  }

  $carousel.classList.remove('is-set');
  return setTimeout(function () {
    return $carousel.classList.add('is-set');
  }, 50);

  function next($el) {
    if ($el.nextElementSibling) {
      return $el.nextElementSibling;
    } else {
      return $carousel.firstElementChild;
    }
  }

  function prev($el) {
    if ($el.previousElementSibling) {
      return $el.previousElementSibling;
    } else {
      return $carousel.lastElementChild;
    }
  }
}
