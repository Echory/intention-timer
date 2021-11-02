// When button is clicked, both icon and outline change color to indicate they have been selected
var studyBtn = document.querySelector('.study');
var studyPlain = document.querySelector('.study-plain');
var studyActive = document.querySelector('.study-active');

studyBtn.addEventListener('click', activateColor);

function activateColor() {
  event.preventDefault();
  studyPlain.classList.add('hidden');
  studyActive.classList.remove('hidden');
}