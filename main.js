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
    studyPlain.classList.add('hidden');
    studyActive.classList.remove('hidden');
  }

  function activateColorMeditate() {
    event.preventDefault();
    meditatePlain.classList.add('hidden');
    meditateActive.classList.remove('hidden');
  }

  function activateColorExercise() {
    event.preventDefault();
    exercisePlain.classList.add('hidden');
    exerciseActive.classList.remove('hidden');
  }
