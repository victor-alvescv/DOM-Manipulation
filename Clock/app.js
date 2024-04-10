const secondHandle = document.querySelector(".handle__second");
const minuteHandle = document.querySelector(".handle__minute");
const hourHandle = document.querySelector(".handle__hour");

setInterval(() => {
  setHandles();
}, 1000);

function setHandles() {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const extraMinutesAngle = seconds * 0.1;
  const extraHoursAngle = minutes * 0.5;
  const minutesAngles = minutes * 6 + extraMinutesAngle;
  const hoursAngles = hours * 30 + extraHoursAngle;

  hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngles}deg)`;
  minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngles}deg)`;
  secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
}
