/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons.
 The "active" class is used to add a background color to the current button when its belonging panel is open.
 The "show" class is used to open the specific accordion panel */

// Event delegation
document.addEventListener("click", delegate(accFilter, accHandler));

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
function accFilter(elem) {
  return (elem instanceof HTMLElement) && elem.matches(".accordion");
  // OR
  // For < IE9
  // return elem.classList && elem.classList.contains('btn');
}

// Custom event handler function
function accHandler(e) {
  var acc = e.delegateTarget;
  acc.classList.toggle("active");
  acc.nextElementSibling.classList.toggle("show");

  var otherAccordions = getSiblings(acc.nextElementSibling, '.panel');
  otherAccordions.forEach(function (otherAcc) {
    otherAcc.classList.remove('show');
    otherAcc.previousElementSibling.classList.remove("active");
  })
}

// Get siblings that matches selection criteria.
// Reference: http://gomakethings.com/ditching-jquery/#get-sibling-elements
function getSiblings(elem, matchesSelector) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  for (; sibling; sibling = sibling.nextSibling) {
    if (sibling instanceof HTMLElement && sibling !== elem && sibling.matches(matchesSelector)) {
      siblings.push(sibling);
    }
  }
  return siblings;
}
