'use strict';

// function check_number() {
//   const guess = Number(document.querySelector('.guess').value);
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔️ No Number!';
//   }
// }
function change_text(class_name, text) {
  document.querySelector(`${class_name}`).textContent = text;
}

function change_style() {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
}

const secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    change_text('.message', '⛔️ No Number!');
  } else if (guess === secret_number) {
    document.querySelector('.number').textContent = secret_number;
    change_text('.message', '🎉 Correct Number');
    change_style();
  } else if (score > 1) {
    if (guess > secret_number) {
      change_text('.message', '📈Too High!');
      score--;
      change_text('.score', score);
    } else if (guess < secret_number) {
      change_text('.message', '📉Too Low!');
      score--;
      change_text('.score', score);
    }
  } else {
    score--;
    change_text('.score', score);
    change_text('.message', '💥You Lost The Game');
  }
});
