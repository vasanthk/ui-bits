document.addEventListener('click', delegate(tabHeaderCheck, tabSwitch));

function delegate(criteria, handler) {
  return function (e) {
    var elem = e.target;
    do {
      if (!criteria(elem)) {
        continue;
      }
      e.delegateTarget = elem;
      handler.call(this, e);
      return;
    } while ((elem = elem.parentNode))
  }
}

function tabHeaderCheck(elem) {
  return (elem instanceof HTMLElement) && elem.matches('.tab-header');
}

function tabSwitch(e) {
  var elem = e.delegateTarget;
  var tabHeaders = [].slice.call(elem.parentNode.children);
  var tabIndex = parseInt(elem.dataset.index, 10);
  var tabContents = [].slice.call(document.getElementsByClassName('tab-content'));
  // Set Tab header active
  tabHeaders.forEach(function (el, index) {
    if (index !== tabIndex) {
      el.classList.remove('active');
    } else {
      if (!el.classList.contains('active')) {
        el.classList.add('active');
      }
    }
  });

  // Set corresponding tab content to be visible
  tabContents.forEach(function (el, index) {
    if (index !== tabIndex) {
      el.classList.remove('visible');
      el.classList.add('hidden');
    } else {
      el.classList.remove('hidden');
      el.classList.add('visible');
    }
  });
}
