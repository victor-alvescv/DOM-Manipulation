const timerMilliSeconds = document.querySelector(".timer__milliseconds");
const timerSeconds = document.querySelector(".timer__seconds");
const timerMinutes = document.querySelector(".timer__minutes");
const startButton = document.querySelector(".stopwatch__start");
const stopButton = document.querySelector(".stopwatch__stop");
const resetButton = document.querySelector(".stopwatch__reset");

let cancelId;
let startTime;
let savedTime = 0;
const countdown = 65 * 1000;

function startTimer() {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
  startTime = Date.now();
  cancelId = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  savedTime += Date.now() - startTime;
  cancelAnimationFrame(cancelId);
}

function resetTimer() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  startTime = Date.now();
  savedTime = 0;
  timerMilliSeconds.innerHTML = "000";
  timerSeconds.innerHTML = "05";
  timerMinutes.innerHTML = "01";
}

function updateTimer() {
  let milliElapsed = Date.now() - startTime + savedTime;

  let timeLeftInMs = countdown - milliElapsed;
  if (timeLeftInMs < 0) {
    timeLeftInMs = 0;
    cancelAnimationFrame(cancelId);
    cancelId = null;
  }
  let secondsLeft = timeLeftInMs / 1000; // 1500s
  let minutesLeft = secondsLeft / 60;

  let millisText = timeLeftInMs % 1000;
  let secondsText = Math.floor(secondsLeft) % 60;
  let minutesText = Math.floor(minutesLeft) % 60;

  if (minutesText.toString().length < 2) {
    minutesText = minutesText.toString().padStart(2, "0");
  }

  if (secondsText.toString().length < 2) {
    secondsText = secondsText.toString().padStart(2, "0");
  }

  if (millisText.toString().length < 3) {
    millisText = millisText.toString().padStart(3, "0");
  }

  timerMilliSeconds.innerHTML = millisText;
  timerSeconds.innerHTML = secondsText;
  timerMinutes.innerHTML = minutesText;

  if (cancelId) {
    cancelId = requestAnimationFrame(updateTimer);
  }
}
