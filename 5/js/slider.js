const slider = document.querySelector('.slider'),
  before = slider.querySelector('.slider__slide--before'),
  beforeImg = slider.querySelector('.slider__image-wrapper'),
  change = slider.querySelector('.slider__change'),
  body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded' , () => {
  let width = slider.offsetWidth;
  beforeImg.style.width = `${width}px`;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  change.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

change.addEventListener('mousedown', () => {
	isActive = true;
});

body.addEventListener('mouseup', () => {
  isActive = false;
});

body.addEventListener('mouseleave', () => {
  isActive = false;
});

body.addEventListener('mousemove', (e) => {
  if(!isActive) {
    return;
  }

  let x = e.pageX;//значение координат мышки

  x -= slider.getBoundingClientRect().left;//убираем лишнюю область
  beforeAfterSlider(x);
});

change.addEventListener('touchstart', () => {
	isActive = true;
});

body.addEventListener('touchend', () => {
	isActive = false;
});

body.addEventListener('touchcancel', () => {
	isActive = false;
});

body.addEventListener('touchmove', (e) => {
	if (!isActive) {
		return;
	}

  let x;

  let i;
  for (i = 0; i < e.changedTouches.length; i++) {
  	x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;

  beforeAfterSlider(x);
  pauseEvents(e);
});
