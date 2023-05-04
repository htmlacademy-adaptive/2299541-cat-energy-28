var nav = document.querySelector('.main-header');
var navMain = document.querySelector('.main-nav__menu');
var navToggle = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.menu');

nav.classList.remove('main-header--no-js');
navToggle.addEventListener('click', function () {
  navMain.classList.toggle('show');
  navToggle.classList.toggle('show');
});

if (!nav.classList.contains('main-header--no-js')) {
  menu.classList.remove('menu--no-js');
  navToggle.classList.remove('main-nav__toggle--no-js');
}
