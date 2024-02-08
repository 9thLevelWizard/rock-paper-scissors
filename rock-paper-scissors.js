const body = document.querySelector("body");
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

rockButton.addEventListener("click", () => {
    playRound("rock");
});
paperButton.addEventListener("click", () => {
    playRound("paper");
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors");
});

function showResult(message) {

    const resultScreen = document.createElement("div");

    resultScreen.className = "result-screen";
    resultScreen.textContent = message;
    body.append(resultScreen);
};

function countScore(winner) {
    
    let playerScore = 0;
    let computerScore = 0;
    let totalScore = `${playerScore}-${computerScore}`;

    if (winner === "player") {
        playerScore++;
    }
    else if (winner === "computer") {
        computerScore++;
    };
    
    return totalScore;
};

function showScore() {

    const scoreScreen = document.createElement("div");
    scoreScreen.className = "score-screen";

    scoreScreen.textContent = "test";
    body.append(scoreScreen);  
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