// When button is clicked, both icon and outline change color to indicate they have been selected

//QUERY SELECTORS//
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
var accomplishInput = document.querySelector('.accomplish-input');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input');
var accomplishErrorMessage = document.querySelector('.accomplish-error');
var minutesErrorMessage = document.querySelector('.minutes-error');
var secondsErrorMessage = document.querySelector('.seconds-error');
var studyBtnColor = document.querySelector('.study-button');
var meditateBtnColor = document.querySelector('.meditate-button');
var exerciseBtnColor = document.querySelector('.exercise-button');
var formView = document.querySelector('.form-section');
var timerView = document.querySelector('.timer-view');
var activitySection = document.querySelector('.activities-section');
var currentActivity = new Activity();
var category;
//EVENT LISTENERS//
studyBtn.addEventListener('click', activateColorStudy);
meditateBtn.addEventListener('click', activateColorMeditate);
exerciseBtn.addEventListener('click', activateColorExercise);
startActivityBtn.addEventListener('click', showTimer);

//FUNCTIONS//
function show(element) {
element.classList.remove('hidden');
}

function hide(element) {
element.classList.add('hidden');
}

function showErrorMessage() {
  var showError = false
  event.preventDefault();
    if(accomplishInput.value === '') {
      showError = true;
      accomplishErrorMessage.classList.remove('hidden');
    }
    if(minutesInput.value === '') {
      showError = true;
      minutesErrorMessage.classList.remove('hidden');
    }
    if(secondsInput.value === '') {
      showError = true;
      secondsErrorMessage.classList.remove('hidden');
    }
    return showError
}

function showTimer() {
  event.preventDefault();
  if(!showErrorMessage()) {
    hide(formView);
    show(timerView);
    var id = Date.now();
    currentActivity = new Activity(category, accomplishInput.value, minutesInput.value, secondsInput.value, id)
  }
}

function activateColorStudy() {
  event.preventDefault();
    category = studyBtn.value
    studyBtnColor.innerHTML = ``;
    studyBtnColor.innerHTML += `<div class="study-button"><button class="study" style= "border-color: #B3FD78">
      <img class="study-plain hidden" src="assests/study.svg">
      <img class="study-active" src="assests/study-active.svg">
      Study</button></div>`
  }

  function activateColorMeditate() {
    event.preventDefault();
    meditateBtnColor.innerHTML = ``;
    meditateBtnColor.innerHTML += `<div class="meditate-button">
    <button class="meditate" style= "border-color: #C278FD">
      <img class="meditate-plain hidden" src="assests/meditate.svg">
      <img class="meditate-active " src="assests/meditate-active.svg">
      Meditate</button></div>`
  }

  function activateColorExercise() {
    event.preventDefault();
    var category = "Exercise";
    exerciseBtnColor.innerHTML = ``;
    exerciseBtnColor.innerHTML += `<div class="exercise-button">
    <button class="exercise" style= "border-color: #FD8078">
      <img class="exercise-plain hidden" src="assests/exercise.svg">
      <img class="exercise-active" src="assests/exercise-active.svg">
    Exercise
  </button>
  </div>`
  }
