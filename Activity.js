class Activity {
  constructor(category, description, minutes, seconds, id) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }
  countdown() {
    //begin a timer that counts down by seconds from input time
  }
  markComplete() {
    // when timer is done, change time display to say complete
  }
  saveToStorage() {
    //when we click log activity, save to local storage
  }
}
