
const workTime = 25* 60;
const breakTime = 5* 60;

let timerInterval = null;
let work = true;
let currentTime = workTime;
const timerText = document.getElementById("timer");

function updateTimer() {
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;

    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    timerText.textContent = minutes + ":"+ seconds;
}

function startTimer(){
    if (timerInterval)  return;
    timerInterval = setInterval(() => {
        currentTime--;

        if(currentTime <= 0) {
            if (work) {
                currentTime = breakTime;
                document.getElementById("state").textContent = "Перерыв";
            }
            else{
                currentTime = workTime;
                document.getElementById("state").textContent = "Работа";
            }
            work = !work;
            }

        updateTimer();
    },1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    currentTime = workTime;
    document.getElementById("state").textContent = "Работа";
    updateTimer();
}



