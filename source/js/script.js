var navMain = document.querySelector('.main-nav__menu');
var navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('show');
  navToggle.classList.toggle('show');
});