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
var descriptionCountdown = document.querySelector('.description-countdown');
var greenBtn = document.querySelector('.green-button');
var purpleBtn = document.querySelector('.purple-button');
var redBtn = document.querySelector('.red-button');
var startTimerBtn = document.querySelector('.start-timer-button');
var logActivityBtn = document.querySelector('.log-activity-btn');
var savedActivitiesSection = document.querySelector('.no-activities');
var createActivityBtn = document.querySelector('.create-new-activity')
var createContainer = document.querySelector('.create-container');
var line = document.querySelector('.line');

var currentActivity = new Activity();
var savedActivities = [];
var time = 0;
var category;

//EVENT LISTENERS//
studyBtn.addEventListener('click', activateColorStudy);
meditateBtn.addEventListener('click', activateColorMeditate);
exerciseBtn.addEventListener('click', activateColorExercise);
startActivityBtn.addEventListener('click', showTimer);
startTimerBtn.addEventListener('click', callCountdown);
logActivityBtn.addEventListener('click', logActivity);
createActivityBtn.addEventListener('click', createNewActivity);
window.addEventListener('DOMContentLoaded', retrieveArray);
retrieveArray();

//FUNCTIONS//
function show(element) {
element.classList.remove('hidden');
};

function hide(element) {
element.classList.add('hidden');
};

function clearInputs() {
  accomplishInput.value = '';
  minutesInput.value = '';
  secondsInput.value = '';
}

function retrieveArray() {
  var retrievedArray = window.localStorage.getItem('array');
  var array = JSON.parse(retrievedArray)
  if(array.length >= 1) {
    savedActivitiesSection.innerHTML = ``;
  for (var i = 0; i < savedActivities.length; i++) {
    savedActivitiesSection.innerHTML += `<section class= "saved-container">
    <article class="saved-info">
      <p class= "saved-category">${savedActivities[i].category}</p>
      <p class="saved-time">${savedActivities[i].minutes} MIN ${savedActivities[i].seconds} SECONDS</p>
      <p class="saved-description">${savedActivities[i].description}</p>
    </article>
    <article class="line-container">
      <div class="line line-${savedActivities[i].category}"></div>
    </article>
  </section>`
  }
  }
  savedActivities = array;
};

function createNewActivity() {
  hide(timerView);
  hide(createContainer);
  show(formView);
  clearInputs();
};

function logActivity() {
  savedActivities.push(currentActivity);
  savedActivitiesSection.innerHTML = ``;
  for (var i = 0; i < savedActivities.length; i++) {
    savedActivitiesSection.innerHTML += `<section class= "saved-container">
    <article class="saved-info">
      <p class= "saved-category">${savedActivities[i].category}</p>
      <p class="saved-time">${savedActivities[i].minutes} MIN ${savedActivities[i].seconds} SECONDS</p>
      <p class="saved-description">${savedActivities[i].description}</p>
    </article>
    <article class="line-container">
      <div class="line line-${savedActivities[i].category}"></div>
    </article>
  </section>`
  currentActivity.saveToStorage();
  hide(timerView);
  show(createContainer);
  }
};

function startTimer() {
  time--;
  createTime();
  if(time === 0 && category === studyBtn.value) {
    clearInterval(currentActivity.timerId);
    startTimerBtn.innerHTML = `<button class="green-button complete">YOU CRUSHED IT!</button>`
    show(logActivityBtn)
  }else if(time === 0 && category === meditateBtn.value) {
    clearInterval(currentActivity.timerId);
    startTimerBtn.innerHTML = `<button class="purple-button complete">WOOSAH!</button>`
    show(logActivityBtn)
  } else if(time === 0 && category === exerciseBtn.value){
    clearInterval(currentActivity.timerId);
    startTimerBtn.innerHTML = `<button class="red-button complete">SLAY QUEEN!</button>`
    show(logActivityBtn)
  }
};

function callCountdown() {
  currentActivity.countdown();
};

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
    if(secondsInput.value === '' || secondsInput.value === '0') {
      showError = true;
      secondsErrorMessage.classList.remove('hidden');
    }
    return showError
};

function changeButtonColor() {
  if(category === studyBtn.value) {
   show(greenBtn);
  }
  if(category === meditateBtn.value) {
    show(purpleBtn);
  }
  if(category === exerciseBtn.value) {
    show(redBtn);
  }
};

function showTimer() {
  event.preventDefault();
  if(!showErrorMessage()) {
    hide(formView);
    show(timerView);
    var id = Date.now();
    time = parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);
    //step 2 parseInt so we do math on a number
    createTime();
    currentActivity = new Activity(category, accomplishInput.value, minutesInput.value, secondsInput.value, id);
    changeButtonColor();
  }
};

function createTime() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  var secondsColon = seconds < 10 ? '0' + seconds : seconds;
  descriptionCountdown.innerHTML = ``
  descriptionCountdown.innerHTML += `<p class="timer-category">${accomplishInput.value}</p><p class="timer-time">${minutes}:${secondsColon}</p>`
};

function activateColorStudy() {
  event.preventDefault();
    category = studyBtn.value;
    studyBtnColor.innerHTML = ``;
    studyBtnColor.innerHTML += `<div class="study-button"><button class="study" style="border-color: #B3FD78">
      <img class="study-plain hidden" src="assests/study.svg">
      <img class="study-active" src="assests/study-active.svg">
      <p style="color:#B3FD78">Study</p>
      </button></div>`
  };

  function activateColorMeditate() {
    event.preventDefault();
    category = meditateBtn.value;
    meditateBtnColor.innerHTML = ``;
    meditateBtnColor.innerHTML += `<div class="meditate-button">
    <button class="meditate" style= "border-color: #C278FD">
      <img class="meditate-plain hidden" src="assests/meditate.svg">
      <img class="meditate-active " src="assests/meditate-active.svg">
      <p style="color:#C278FD">Meditate</p>
      </button></div>`
  };

  function activateColorExercise() {
    event.preventDefault();
    category = exerciseBtn.value;
    exerciseBtnColor.innerHTML = ``;
    exerciseBtnColor.innerHTML += `<div class="exercise-button">
    <button class="exercise" style= "border-color: #FD8078">
      <img class="exercise-plain hidden" src="assests/exercise.svg">
      <img class="exercise-active" src="assests/exercise-active.svg">
      <p style="color:#FD8078">Exercise</p>
    </button>
   </div>`
  };
