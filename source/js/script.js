var nav = document.querySelector('.main-header');
var navMain = document.querySelector('.main-nav__menu');
var navToggle = document.querySelector('.main-nav__toggle');

nav.classList.remove('main-header--no-js');
navToggle.addEventListener('click', function () {
  navMain.classList.toggle('show');
  navToggle.classList.toggle('show');
});
