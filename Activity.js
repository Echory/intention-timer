class Activity {
  constructor(category, description, minutes, seconds, id) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
    this.timerId;
  }
  countdown() {
    this.timerId = setInterval(startTimer, 1000);
  }
  
  markComplete() {
    this.completed = true;
  }

  saveToStorage() {
    var stringifiedArray = JSON.stringify(savedActivities);
    window.localStorage.setItem('array', stringifiedArray);
  }
}
