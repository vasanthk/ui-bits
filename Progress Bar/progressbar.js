// Vanilla JS Version
var domReady = function (callback) {
  document.readyState === "interactive" ||
  document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function () {
  var submitButton = document.getElementById('submit-vanilla');
  var progressBar = document.getElementById('progress-bar-vanilla');
  var tempWidth;
  submitButton.addEventListener('click', function () {
    var intervalTimer = setInterval(function () {
      if (progressBar.offsetWidth >= window.innerWidth) {
        clearInterval(intervalTimer);
        progressBar.style.width = '0%';
      } else {
        tempWidth = (progressBar.offsetWidth / window.innerWidth) * 100;
        progressBar.style.width = (Math.round(tempWidth + 5) + '%');
      }
    }, 200);
  });
});


// jQuery Version
$(document).ready(function () {
  var $window = $(window);
  var $progressBar = $('#progress-bar');
  var currWindowWidth;
  var currProgressWidth;
  var tempWidth;
  $('#submit').on('click', function () {
    var intervalTimer = setInterval(function () {
      currWindowWidth = $window.width();
      currProgressWidth = $progressBar.width();
      if (currProgressWidth >= currWindowWidth) {
        clearInterval(intervalTimer);
        $progressBar.width('0%');
      } else {
        tempWidth = (currProgressWidth / currWindowWidth) * 100;
        $progressBar.width(Math.round(tempWidth + 5) + '%');
      }
    }, 200);
  });
});
