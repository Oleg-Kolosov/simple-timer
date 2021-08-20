// DOM ELEMENTS
const startBtn = document.getElementById('btn-start');
const pauseBtn = document.getElementById('btn-pause');
const resetBtn = document.getElementById('btn-reset');
const timerCount = document.getElementById('timer-count');
const progressCircle = document.querySelector('.timer__progress-ring');

// CONSTANTS
const INTERVAL_TIME = 1000;

// GLOBAL
let timeCount = 0;
let intervalId = null;

// PROGRESS CIRCLE
let radius = progressCircle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = circumference;

const setProgress = percent => {
    progressCircle.style.strokeDashoffset =
        circumference - (percent / 100) * circumference;
};

// HELPER FUNCTIONS
const disableBtn = btn => btn.setAttribute('disabled', 'disabled');
const enableBtn = btn => btn.removeAttribute('disabled', 'disabled');

// ADD EVENT HANDLERS
startBtn.addEventListener('click', () => {
    // set interval and start timer
    intervalId = setInterval(() => {
        timeCount += INTERVAL_TIME / 1000;
        timerCount.textContent = timeCount;
        setProgress(timeCount * 1.666);
    }, INTERVAL_TIME);

    // change attributes buttons
    disableBtn(startBtn);
    enableBtn(pauseBtn);
    enableBtn(resetBtn);
});

pauseBtn.addEventListener('click', () => {
    // clear interval
    clearInterval(intervalId);

    // change attributes buttons
    enableBtn(startBtn);
    disableBtn(pauseBtn);
});

resetBtn.addEventListener('click', () => {
    // clear interval & update values
    clearInterval(intervalId);
    timerCount.textContent = 0;
    timeCount = 0;
    setProgress(100);

    // change attributes buttons
    disableBtn(resetBtn);
    disableBtn(pauseBtn);
    enableBtn(startBtn);
});
