const timerMilliseconds = document.querySelector(".timer__milliseconds");
const timerSeconds = document.querySelector(".timer__seconds");
const timerMinutes = document.querySelector(".timer__minutes");

let cancelId;
let startTime;
let savedTime = 0;

function startTimer() {
  startTime = Date.now();
  cancelId = requestAnimationFrame(updateTimer);
}

function stopTimer() {
  cancelAnimationFrame(cancelId);
  savedTime += Date.now() - startTime;
}

function resetTimer() {
  timerMilliseconds.innerHTML = "000";
  timerSeconds.innerHTML = "00";
  timerMinutes.innerHTML = "00";
  savedTime = 0;
  startTime = Date.now();
}

function updateTimer() {
  let millisElapsed = Date.now() - startTime + savedTime;
  let secondsElapsed = millisElapsed / 1000;
  let minutesElapsed = secondsElapsed / 60;

  let minutesText = Math.floor(minutesElapsed);
  let secondsText = Math.floor(secondsElapsed % 60);
  let millisText = millisElapsed % 1000;

  if (minutesText.toString().length === 1) {
    minutesText = minutesText.toString().padStart(2, "0");
  }

  if (secondsText.toString().length === 1) {
    secondsText = secondsText.toString().padStart(2, "0");
  }

  if (millisText.toString().length < 3) {
    millisText = millisText.toString().padStart(3, "00");
  }

  timerMilliseconds.innerHTML = millisText;
  timerSeconds.innerHTML = secondsText;
  timerMinutes.innerHTML = minutesText;
  cancelId = requestAnimationFrame(updateTimer);
}
