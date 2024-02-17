let timeLeft = 0;
let timer;

function updateTime() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    document.getElementById('time-display').innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function setTime() {
    const userInput = prompt("Enter time in HH:MM:SS format (e.g., 01:10:02):");
    const timeArray = userInput.split(':');
    const hours = parseInt(timeArray[0]) || 0;
    const minutes = parseInt(timeArray[1]) || 0;
    const seconds = parseInt(timeArray[2]) || 0;

    timeLeft = hours * 3600 + minutes * 60 + seconds;
    updateTime();
    document.getElementById('start-btn').removeAttribute('disabled');
}

function startTimer() {
    if (!timer) {
        timer = setInterval(function () {
            if (timeLeft > 0) {
                timeLeft--;
                updateTime();
            } else {
                clearInterval(timer);
                timer = null;
                alert("Time's up!");
            }
        }, 1000);
    }
}