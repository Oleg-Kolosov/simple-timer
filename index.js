// DOM ELEMENTS
const startBtn = document.getElementById('btn-start');
const pauseBtn = document.getElementById('btn-pause');
const resetBtn = document.getElementById('btn-reset');
const timerCount = document.getElementById('timer-count');

// CONSTANTS
const INTERVAL_TIME = 1000;

// GLOBAL
let count = 0;
let intervalId = null;

// HELPER FUNCTIONS
const disableBtn = btn => btn.setAttribute('disabled', 'disabled');
const enableBtn = btn => btn.removeAttribute('disabled', 'disabled');

// ADD EVENT HANDLERS
startBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
        count += 1;
        timerCount.textContent = count;
    }, INTERVAL_TIME);

    disableBtn(startBtn);
    enableBtn(pauseBtn);
    enableBtn(resetBtn);
});

pauseBtn.addEventListener('click', () => {
    clearInterval(intervalId);

    enableBtn(startBtn);
    disableBtn(pauseBtn);
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    timerCount.textContent = 0;
    count = 0;

    disableBtn(resetBtn);
    disableBtn(pauseBtn);
    enableBtn(startBtn);
});
