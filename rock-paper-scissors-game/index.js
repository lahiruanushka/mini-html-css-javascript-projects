const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);

    playerChoiceEl.textContent = `You: ${playerChoice}`;
    computerChoiceEl.textContent = `Computer: ${computerChoice}`;

    resultEl.textContent = result;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
