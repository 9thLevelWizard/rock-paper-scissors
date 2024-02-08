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
        // Rock outcomes
        case playerChoice === "rock" && computerChoice === "paper":
            showResult("You lose! Paper beats Rock!");
            winner = "computer";
            break;
        case playerChoice === "rock" && computerChoice === "scissors":
            showResult("You win! Rock beats Scissors!");
            winner = "player";
            break;
        case playerChoice === "rock" && computerChoice === "rock":
            showResult("You tie! Rock and Rock hang out!");
            winner = "tie";
            break;
        // Paper outcomes
        case playerChoice === "paper" && computerChoice === "rock":
            showResult("You win! Paper beats Rock!");
            winner = "player";
            break;
        case playerChoice === "paper" && computerChoice === "scissors":
            showResult("You lose! Scissors beats Paper!");
            winner = "computer";
            break;
        case playerChoice === "paper" && computerChoice === "paper":
            showResult("You tie! Paper and Paper make a document!");
            winner = "tie";
            break;
        // Scissors outcomes
        case playerChoice === "scissors" && computerChoice === "rock":
            showResult("You lose! Rock beats Scissors!");
            winner = "computer";
            break;
        case playerChoice === "scissors" && computerChoice === "paper":
            showResult("You win! Scissors beats Paper!");
            winner = "player";
            break;
        case playerChoice === "scissors" && computerChoice === "scissors":
            showResult("You tie! Scissors and Scissors are put away safely...!");
            winner = "tie";
            break;
        // Default outcome
        default:
            showResult("Invalid game! You're making up objects! Only rock, paper and scissors allowed!");
            break;
    }

    return winner;
};