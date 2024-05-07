var scoreUp = 1;
var scorecom = 1;
var resetScore = 0;
const stuff = ["rock", "paper", "scissors"];
let rock1 = document.getElementById("rockclick");
let paper = document.getElementById("paperclick");
let scissors = document.getElementById("scissorclick");
let scoreplus = document.getElementById("user-score1");
let scoreplus1 = document.getElementById("user-score2");
let winorlose = document.getElementById("win-lose");
let resetThis = document.getElementById("resetbtn");
let gameOver = false;

resetThis.addEventListener("click", () => {
    scoreplus.innerHTML = 0;
    scoreplus1.innerHTML = 0;
    scoreUp = 1;
    scorecom = 1;
    winorlose.innerHTML = "Ok😊, Play Again";
    gameOver = false;
    stopAnimation();
});

let selecting;

rock1.addEventListener("click", () => {
    if (!gameOver) {
    selecting = "rock";
    console.log(selecting);
    const random = Math.floor(Math.random() * stuff.length);
    if (selecting === "rock" && stuff[random] === "rock") {
        winorlose.innerHTML = "Uff You both select rock 😒";
    } else if (selecting === "rock" && stuff[random] === "paper") {
        scoreplus1.innerHTML = scorecom++;
        winorlose.innerHTML =
        "You choose rock and computer choose paper. You lose 😞";
    } else if (selecting === "rock" && stuff[random] === "scissors") {
        scoreplus.innerHTML = scoreUp++;
        winorlose.innerHTML =
        "You choose rock and computer choose scissor. You Win 😊";
    } else {
        console.log("5 star");
    }

    if (scoreUp > 10 || scorecom > 10) {
        gameOver = true;
        if (scoreUp > 10) {
        winorlose.innerHTML = "You Won the Game! 🎉";
        startAnimation();
        } else {
        winorlose.innerHTML = "Computer Won the Game! 😔";
        }
        rock1.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    }
});

paper.addEventListener("click", () => {
    if (!gameOver) {
    selecting = "paper";
    console.log(selecting);
    const random = Math.floor(Math.random() * stuff.length);
    if (selecting === "paper" && stuff[random] === "scissors") {
        scoreplus1.innerHTML = scorecom++;
        winorlose.innerHTML =
        "You choose paper and computer choose scissor. You lose 😞";
    } else if (selecting === "paper" && stuff[random] === "rock") {
        scoreplus.innerHTML = scoreUp++;
        winorlose.innerHTML =
        "You choose paper and computer choose rock. You Win 😊";
    } else if (selecting === "paper" && stuff[random] === "paper") {
        winorlose.innerHTML = "Uff!! You both choose paper 😒";
    } else {
        console.log("5 star");
    }

    if (scoreUp > 10 || scorecom > 10) {
        gameOver = true;
        if (scoreUp > 10) {
        winorlose.innerHTML = "You Won the Game! 🎉";
        startAnimation();
        } else {
        winorlose.innerHTML = "Computer Won the Game! 😔";
        }
        rock1.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}
});

scissors.addEventListener("click", () => {
    if (!gameOver) {
    selecting = "scissor";
    const random = Math.floor(Math.random() * stuff.length);
    if (selecting === "scissor" && stuff[random] === "scissors") {
        winorlose.innerHTML = "Uff You both choose scissor😒";
    } else if (selecting === "scissor" && stuff[random] === "paper") {
        scoreplus.innerHTML = scoreUp++;
        winorlose.innerHTML =
        "You choose scissor and computer choose paper. You Win 😊";
    } else if (selecting === "scissor" && stuff[random] === "rock") {
        scoreplus1.innerHTML = scorecom++;
        winorlose.innerHTML =
        "You choose scissor and computer choose rock. You lose 😞";
    } else {
        console.log("5 Star");
    }

    if (scoreUp > 10 || scorecom > 10) {
      gameOver = true;
        if (scoreUp > 10) {
            winorlose.innerHTML = "You Won the Game! 🎉";
            startAnimation();
        }
        else {
            winorlose.innerHTML = "Computer Won the Game! 😔";
        }
        rock1.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}
});
