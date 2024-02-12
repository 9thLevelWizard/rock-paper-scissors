const body = document.querySelector("body");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const scoreScreen = document.querySelector(".score-screen");
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", playRock = function() {
    let winner = playRound("rock");
    updateScore(winner);
});
paperButton.addEventListener("click", playPaper = function() {
    let winner = playRound("paper");
    updateScore(winner);
});
scissorsButton.addEventListener("click", playScissors = function() {
    let winner = playRound("scissors");
    updateScore(winner);
});

function showResult(message) {

    const resultScreen = document.createElement("div");

    resultScreen.className = "result-screen";
    resultScreen.textContent = message;
    body.append(resultScreen);
};

function updateScore(winner) {

    if (winner === "player") {
        playerScore++;
    };
    if (winner === "computer") {
        computerScore++;
    };

    scoreScreen.textContent = `${playerScore} - ${computerScore}`;

    if (playerScore >= 5) {
        const endScreen = document.createElement("div");
        endScreen.className = "end-screen";
        endScreen.textContent = "You won the match! Congratulations!";
        scoreScreen.after(endScreen);

        rockButton.removeEventListener("click", playRock);
        paperButton.removeEventListener("click", playPaper);
        scissorsButton.removeEventListener("click", playScissors);
    };
    if (computerScore >= 5) {
        const endScreen = document.createElement("div");
        endScreen.className = "end-screen";
        endScreen.textContent = "You lost the match! Better luck next time!";
        scoreScreen.after(endScreen);

        rockButton.removeEventListener("click", playRock);
        paperButton.removeEventListener("click", playPaper);
        scissorsButton.removeEventListener("click", playScissors);
    };
};

function getComputerChoice() {
    
    let randomChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1); // Stores a random number between 1 and 3, inclusive, to use as the computer's choice
    let computerChoice;

    switch (randomChoice) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
        default:
            break;
    }

    return computerChoice;
};

function playRound(playerChoice) {

    const computerChoice = getComputerChoice();
    let winner;

    switch (true) {
        // Win cases
        case (playerChoice === "rock" && computerChoice === "scissors") 
        || (playerChoice === "paper" && computerChoice === "rock")
        || (playerChoice === "scissors" && computerChoice === "paper"):
            showResult(`You win! ${playerChoice} beats ${computerChoice}!`);
            winner = "player";
            break;
        // Loss cases
        case (playerChoice === "rock" && computerChoice === "paper")
        || (playerChoice === "paper" && computerChoice === "scissors")
        || (playerChoice === "scissors" && computerChoice === "rock"):
            showResult(`You lose! ${computerChoice} beats ${playerChoice}!`);
            winner = "computer";
            break;
        // Tie cases
        case (playerChoice === "rock" && computerChoice === "rock")
        || (playerChoice === "paper" && computerChoice === "paper")
        || (playerChoice === "scissors" && computerChoice === "scissors"):
            showResult(`You tie! ${playerChoice} ties ${computerChoice}!`);
            winner = "tie";
            break;
        default:
            break;
    };

    return winner;
};