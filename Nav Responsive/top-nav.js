// Vanilla JS Version
var domReady = function (callback) {
  document.readyState === "interactive" ||
  document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function () {
  document.addEventListener('click', delegate(criteria, handler));

  function delegate(criteria, handler) {
    return function (e) {
      var el = e.target;
      debugger;

      do {
        if (!criteria(el)) {
          continue;
        }

        e.delegateTarget = el;
        handler.call(this, e);
        return false;
      } while (el = el.parentNode);
    }
  }

  function criteria(el) {
    return el instanceof HTMLElement && el.matches('.icon');
  }

  function handler(e) {
    e.preventDefault();

    document.getElementsByClassName('topnav')[0].classList.toggle('responsive');
  }
});
