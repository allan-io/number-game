'use strict';
let winningNum = Math.floor(Math.random() * 20) + 1;

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const messages = document.querySelector('.message');
const input = document.querySelector('input');
const scoreLabel = document.querySelector('.score');
const highscoreLabel = document.querySelector('.highscore');
const body = document.querySelector('body');
const number = document.querySelector('.number');
let highscore = 0;
let score = 20;

checkBtn.addEventListener('click', function () {
  const inputVal = input.value;

  if (inputVal == winningNum) {
    messages.textContent = '🎉 correct number!';
    body.classList.add('win');
    number.textContent = winningNum;
    console.log(winningNum);
    console.log(inputVal);
    if (score > highscore) {
      highscore = score;
      highscoreLabel.textContent = highscore;
    }
  } else {
    console.log(winningNum);
    console.log(inputVal);
    messages.textContent =
      inputVal > winningNum
        ? `${inputVal} is too high!`
        : `${inputVal} is too low!`;
    input.value = '';
    score--;
    scoreLabel.textContent = score;
  }
});

againBtn.addEventListener('click', function () {
  messages.textContent = 'start guessing...';
  input.value = '';
  score = 20;
  scoreLabel.textContent = 20;
  winningNum = Math.floor(Math.random() * 20) + 1;
  body.classList.remove('win');
  number.textContent = '?';
});
