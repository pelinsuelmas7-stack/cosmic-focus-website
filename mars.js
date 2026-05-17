//ELEMENTLER
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

const modeText = document.getElementById("mode-text");

//SOUND ELEMENTS
const rain = document.getElementById("rainSound");
const fire = document.getElementById("fireSound");
const noise = document.getElementById("noiseSound");

// PROGRESS BAR
const progressBar = document.querySelector(".progress-bar");

// TIMER STATE
let workTime = 40 * 60;
let breakTime = 10 * 60;

let timeLeft = workTime;

let timer = null;

let isRunning = false;
let isBreak = false;


// DISPLAY 
function updateDisplay() {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerEl.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


// PROGRESS 
function updateProgress() {

    if (!progressBar) return;

    const total = isBreak ? breakTime : workTime;

    const percent = ((total - timeLeft) / total) * 100;

    progressBar.style.width = percent + "%";
}


// TIMER START 
startBtn.addEventListener("click", () => {

    if (isRunning) return;

    isRunning = true;

    timer = setInterval(() => {

        timeLeft--;

        updateDisplay();
        updateProgress();

        if (timeLeft <= 0) {

            clearInterval(timer);
            isRunning = false;

            if (!isBreak) {

                isBreak = true;
                modeText.textContent = "BREAK MODE";
                timeLeft = breakTime;

                alert("☕ Mola zamanı!");

            } else {

                isBreak = false;
                modeText.textContent = "WORK MODE";
                timeLeft = workTime;

                alert("🚀 Tekrar çalışma zamanı!");
            }

            updateDisplay();
            updateProgress();
        }

    }, 1000);
});


//PAUSE
pauseBtn.addEventListener("click", () => {

    clearInterval(timer);
    isRunning = false;

});


// RESET
resetBtn.addEventListener("click", () => {

    clearInterval(timer);

    isRunning = false;
    isBreak = false;

    timeLeft = workTime;

    modeText.textContent = "WORK MODE";

    updateDisplay();
    updateProgress();

});


// SOUND SYSTEM 

function stopAll() {

    if (rain) { rain.pause(); rain.currentTime = 0; }
    if (fire) { fire.pause(); fire.currentTime = 0; }
    if (noise) { noise.pause(); noise.currentTime = 0; }
}

document.querySelectorAll(".sound-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        stopAll();

        const type = btn.dataset.sound;

        if (type === "rain") rain.play();
        if (type === "fire") fire.play();
        if (type === "noise") noise.play();

    });

});
// MUTE SYSTEM
const muteBtn = document.getElementById("muteBtn");

let isMuted = false;

muteBtn.addEventListener("click", () => {

    if (!isMuted) {

        stopAll(); // tüm sesleri kapat

        isMuted = true;
        muteBtn.textContent = "🔇 Muted";

    } else {

        isMuted = false;
        muteBtn.textContent = "🔇 Sound Off";

    }

});
// INIT
updateDisplay();
updateProgress();