var hamburgerIcon = document.getElementsByClassName('icon')[0];

hamburgerIcon.addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementsByClassName('topnav')[0].classList.toggle('responsive');
});
