function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

buttonStart.disabled = false;
buttonStop.disabled = true;
let timerID = null;
const delay = 1000;

function changeBgColor() {
  body.style.backgroundColor = getRandomHexColor();
}

buttonStart.addEventListener('click', onButtonStartClick);

function onButtonStartClick() {
  timerID = setInterval(changeBgColor, delay);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
}

buttonStop.addEventListener('click', onButtonStopClick);

function onButtonStopClick() {
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  clearInterval(timerID);
}
