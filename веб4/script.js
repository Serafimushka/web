let score = 0;
const scoreDisplay = document.getElementById('score');
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = score;
  clearAnimations();
});

function clearAnimations() {
  document.querySelectorAll('.selection').forEach(img => {
    img.classList.remove('shake', 'win', 'lose', 'draw');
  });
}

const altMap = {
  rock: 'Камень',
  paper: 'Бумага',
  scissors: 'Ножницы'
};

function makeSelection(playerSelection) {
  clearAnimations();

  const playerImg = document.querySelector(`.you img[alt="${altMap[playerSelection]}"]`);
  playerImg.classList.add('shake');

  const options = ['rock', 'paper', 'scissors'];
  const computerSelection = options[Math.floor(Math.random() * 3)];
  const computerImg = document.querySelector(`.computer img[alt="${altMap[computerSelection]}"]`);

  setTimeout(() => {
    computerImg.classList.add('shake');
  }, 500);

  setTimeout(() => {
    playerImg.classList.remove('shake');
    computerImg.classList.remove('shake');

    const winCombos = ['rockscissors', 'paperrock', 'scissorspaper'];
    const loseCombos = ['rockpaper', 'paperscissors', 'scissorsrock'];

    if (playerSelection === computerSelection) {
      playerImg.classList.add('draw');
      computerImg.classList.add('draw');
    } else if (winCombos.includes(playerSelection + computerSelection)) {
      score++;
      playerImg.classList.add('win');
      computerImg.classList.add('lose');
    } else if (loseCombos.includes(playerSelection + computerSelection)) {
      score--;
      playerImg.classList.add('lose');
      computerImg.classList.add('win');
    }

    scoreDisplay.textContent = score;
  }, 1100);
}