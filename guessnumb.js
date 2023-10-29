"use strict";

// Declaring DOM elements
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const numberEl = document.querySelector(".number");
const guessEl = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const bodyEl = document.querySelector("body");
const highScoreEl = document.querySelector(".highscore");

// Crearting random number and score
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Manipulating number text content of the number element
scoreEl.textContent = score;

// Checking if our guess is correct or not
checkBtn.addEventListener("click", function () {
  const guess = +guessEl.value;

  console.log(secretNumber, "secret");
  console.log(guess, "my guess");

  // When there is no input
  if (!guess) {
    messageEl.textContent = "⛔ No Number!";

    // When player wins
  } else if (guess === secretNumber) {
    messageEl.textContent = "🎉 Correct Number";
    bodyEl.style.backgroundColor = "#60b347";
    numberEl.style.width = "300px";
    numberEl.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else if (guess > secretNumber) {
    // When guess is higher
    if (score > 1) {
      messageEl.textContent = "📈 Too High!";
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "💥 You lost the game";
      scoreEl.textContent = 0;
    }
  } else if (guess < secretNumber) {
    // When guess is lower
    if (score > 1) {
      messageEl.textContent = "📉 Too Low!";
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "💥 You lost the game";
      scoreEl.textContent = 0;
    }
  }
});

againBtn.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageEl.textContent = "Start guessing...";
  scoreEl.textContent = score;
  numberEl.textContent = "?";
  guessEl.value = "";
  numberEl.style.width = "150px";
  bodyEl.style.backgroundColor = "#222";
});