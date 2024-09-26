let score = 0;
let timeLeft = 10;
let gameInterval;
let countdownInterval;

const tapButton = document.getElementById('tap-btn');
const startButton = document.getElementById('start-btn');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time-left');

// Event Listener untuk Tap Button
tapButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
});

// Event Listener untuk Start Button
startButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    tapButton.style.display = 'inline-block';
    startButton.style.display = 'none';

    gameInterval = setInterval(updateGame, 1000);
    countdownInterval = setInterval(updateTime, 1000);
}

function updateGame() {
    if (timeLeft === 0) {
        endGame();
    }
}

function updateTime() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(countdownInterval);
    }
}

function endGame() {
    clearInterval(gameInterval);
    tapButton.style.display = 'none';
    startButton.style.display = 'inline-block';
    alert(`Wes bar, iki skor em: ${score}`);
}