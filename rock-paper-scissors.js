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
}

let playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase(); // Asks the user for their choice and makes sure it parses as lower-cased

function playRound(playerChoice, computerChoice) {

    let winner;

    switch (true) {
        // Rock outcomes
        case playerChoice === "rock" && computerChoice === "paper":
            winner = "You lose! Paper beats Rock!";
            break;
        case playerChoice === "rock" && computerChoice === "scissors":
            winner = "You win! Rock beats Scissors!";
            break;
        case playerChoice === "rock" && computerChoice === "rock":
            winner = "You tie! Rock and Rock hang out!";
            break;
        // Paper outcomes
        case playerChoice === "paper" && computerChoice === "rock":
            winner = "You win! Paper beats Rock!";
            break;
        case playerChoice === "paper" && computerChoice === "scissors":
            winner = "You lose! Scissors beats Paper!";
            break;
        case playerChoice === "paper" && computerChoice === "paper":
            winner = "You tie! Paper and Paper make a document!";
            break;
        // Scissors outcomes
        case playerChoice === "scissors" && computerChoice === "rock":
            winner = "You lose! Rock beats Scissors!";
            break;
        case playerChoice === "scissors" && computerChoice === "paper":
            winner = "You win! Scissors beats Paper!";
            break;
        case playerChoice === "scissors" && computerChoice === "scissors":
            winner = "You tie! Scissors and Scissors are put away safely...!";
            break;
        // Default outcome
        default:
            winner = "Invalid game! You're making up objects! Only rock, paper and scissors allowed!";
            break;
    }

    return winner;
}