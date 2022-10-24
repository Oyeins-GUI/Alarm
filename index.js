const currnetTimeDisplay = document.getElementById("current-time-display");
const alarmTimeDisplay = document.getElementById("alarm-time-display");
const alarmMessageDisplay = document.getElementById("alarm-message-display");
const setAlarmBtn = document.getElementById("set-alarm-button");
const stopAlarmBtn = document.getElementById("stop-alarm-button");
const audio = new Audio("alarm-song.mp3");

let currentTime = null
let alarmTime = null

setAlarmBtn.addEventListener("click", setAlarm);
stopAlarmBtn.addEventListener("click", stopAlarm);

function renderCurrentTime() {
    setInterval(() => {
        let date = new Date();
        let seconds = date.getSeconds();
        let minutes = date.getMinutes();
        let hours = date.getHours();

        if (seconds < 10) {
            seconds = `0${date.getSeconds()}` 
        }
        if (minutes < 10) {
            minutes = `0${date.getMinutes()}` 
        }
        if (hours < 10) {
            hours = `0${date.getHours()}` 
        }

        currentTime = `${hours}:${minutes}:${seconds}`;
        currnetTimeDisplay.textContent = currentTime;

        alarmChecker();
    }, 1000);
}
renderCurrentTime();

function setAlarm(e) {
    e.preventDefault();

    let wakeyHours = document.getElementById("hours-input").value;
    let wakeyMinutes = document.getElementById("minutes-input").value;

    if (wakeyHours / 10 < 1) {
        wakeyHours = `0${wakeyHours}`
    }
    if (wakeyMinutes / 10 < 1) {
        wakeyMinutes = `0${wakeyMinutes}`
    }

    alarmTime = `${wakeyHours}:${wakeyMinutes}:00`;
    alarmTimeDisplay.textContent = alarmTime;
}

function alarmChecker() {
    if (currentTime == alarmTime) {
        audio.play();
    } 
}

function stopAlarm() {
    audio.pause();
}
