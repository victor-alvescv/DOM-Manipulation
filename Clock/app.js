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

  const extraHourAngle = minutes * 0.5;
  const hoursAngle = hours * 30 + extraHourAngle;
  
  const extraMinutesAngle = seconds * 0.1;
  const minutesAngle = minutes * 6 + extraMinutesAngle;

  hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
  minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
  secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
}
