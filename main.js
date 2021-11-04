// When button is clicked, both icon and outline change color to indicate they have been selected

//VARIABLES//
var studyBtn = document.querySelector('.study');
var meditateBtn = document.querySelector('.meditate');
var exerciseBtn = document.querySelector('.exercise');
var studyPlain = document.querySelector('.study-plain');
var studyActive = document.querySelector('.study-active');
var meditatePlain = document.querySelector('.meditate-plain');
var meditateActive = document.querySelector('.meditate-active');
var exercisePlain = document.querySelector('.exercise-plain');
var exerciseActive = document.querySelector('.exercise-active');
var startActivityBtn = document.querySelector('.activity-button');
var accomplishInput = document.querySelector('.accomplish-input')
var minutesInput = document.querySelector('.minutes-input')
var secondsInput = document.querySelector('.seconds-input')
var accomplishErrorMessage = document.querySelector('.accomplish-error')
var minutesErrorMessage = document.querySelector('.minutes-error')
var secondsErrorMessage = document.querySelector('.seconds-error')
var studyBtnColor = document.querySelector('.study-button')
var meditateBtnColor = document.querySelector('.meditate-button')

//EVENT LISTENERS//
studyBtn.addEventListener('click', activateColorStudy);
meditateBtn.addEventListener('click', activateColorMeditate);
exerciseBtn.addEventListener('click', activateColorExercise);
startActivityBtn.addEventListener('click', showErrorMessage)

//FUNCTIONS//
function showErrorMessage() {
  event.preventDefault();
    if(accomplishInput.value === '')
    accomplishErrorMessage.classList.remove('hidden');
    if(minutesInput.value === '')
    minutesErrorMessage.classList.remove('hidden');
    if(secondsInput.value === '')
    secondsErrorMessage.classList.remove('hidden');
}

function activateColorStudy() {
  event.preventDefault();
    studyBtnColor.innerHTML = ``
    // studyPlain.classList.add('hidden');
    // studyActive.classList.remove('hidden');
    studyBtnColor.innerHTML += `<div class="study-button"><button class="study" style= "border-color: #B3FD78">
      <img class="study-plain hidden" src="assests/study.svg">
      <img class="study-active" src="assests/study-active.svg">
      Study</button></div>`
  }

  function activateColorMeditate() {
    event.preventDefault();
    meditateBtnColor.innerHTML = ``
    meditateBtnColor.innerHTML += `<div class="meditate-button">
    <button class="meditate" style= "color=#C278FD" "border-color: #C278FD">
      <img class="meditate-plain hidden" src="assests/meditate.svg">
      <img class="meditate-active " src="assests/meditate-active.svg">
      Meditate</button></div>`

  }

  function activateColorExercise() {
    event.preventDefault();
    exercisePlain.classList.add('hidden');
    exerciseActive.classList.remove('hidden');
  }
