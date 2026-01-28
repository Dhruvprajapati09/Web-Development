let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

const colors = ["pink", "red", "blue", "purple"];
const h2 = document.querySelector("h2");
const body = document.body;
const buttons = document.querySelectorAll(".btn");

// Start game
document.addEventListener("keypress", () => {
    if (!started) {
        started = true;
        levelUp();
    }
});

// Flash for game sequence
const gameFlash = (btn) => {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
};

// Flash for user click
const userFlash = (btn) => {
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 250);
};

// Move to next level
const levelUp = () => {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    const randIndex = Math.floor(Math.random() * colors.length);
    const randColor = colors[randIndex];
    const randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameFlash(randBtn);
};

// Check user answer
const checkAnswer = (index) => {
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        gameOver();
    }
};

// Button click handler
const handleBtnPress = function () {
    const color = this.id;
    userFlash(this);

    userSeq.push(color);
    checkAnswer(userSeq.length - 1);
};

// Game over
const gameOver = () => {
    h2.innerHTML = `Game Over! Your score is <b>${level}</b><br>Press any key to restart`;
    body.style.backgroundColor = "red";

    setTimeout(() => {
        body.style.backgroundColor = "white";
    }, 200);

    resetGame();
};

// Reset game
const resetGame = () => {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
};

// Attach events
buttons.forEach(btn => {
    btn.addEventListener("click", handleBtnPress);
});
