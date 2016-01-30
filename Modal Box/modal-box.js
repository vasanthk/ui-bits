// Vanilla JS Version
var domReady = function (callback) {
  document.readyState === "interactive" ||
  document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function () {
  var modal = document.getElementById('demo-modal');
  var btn = document.getElementById('open-modal');
  var close = modal.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal.
  btn.onclick = function () {
    modal.style.display = 'block';
  };

  // When the user clicks on 'X', close the modal
  close.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks outside the modal -- close it.
  window.onclick = function (event) {
    if (event.target == modal) {
      // Which means he clicked somewhere in the modal (background area), but not target = modal-content
      modal.style.display = 'none';
    }
  }
});
