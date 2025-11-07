'use strict';
/*
//Reading
document.querySelector('.message').textContent; //Give us the content
//Writing
document.querySelector('.message').textContent = 'Correct Number'; //Label
document.querySelector('.number').textContent = 13; //label
document.querySelector('.score').textContent = 10; //Labels

document.querySelector('.guess').value; //Inputs (textbox)
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', pressedButton);
function pressedButton() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!😢';
    return;
  }
  if (score <= 1) {
    document.querySelector('.message').textContent = 'You LOST the game 😢';
    score--;
    document.querySelector('.score').textContent = score;
    return;
  }
  console.log(guess, typeof guess);
  if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    return;
  }
  if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'To High';
    score--;
    document.querySelector('.score').textContent = score;
    return;
  }
  if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'To Low';
    score--;
    document.querySelector('.score').textContent = score;
    return;
  }
}
//////////////////////////////////////////
// Coding CHALLENGE #1
/*
Implement a game rest functionality, so that the
player can make a new guess! Here is how:

1. Select the element with the 'again' class and 
attach a click event handler
2. In the handler function, restore initial values of 
the score and number variables
3. Restore the initial conditions of the message, 
number, score and guess input field
4. Also restore the original background color (#222) 
and number width (15rem)

GOOD LUCK 😊
*/
document.querySelector('.again').addEventListener('click', againMethod);
function againMethod() {
  let highScore = document.querySelector('.score').textContent;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  if (score > highScore) {
    document.querySelector('.highscore').textContent = highScore;
  }
  score = 20;
}
