playGame();

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

function playRound() {

    const playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase(); // Asks the user for their choice and makes sure it parses as lower-cased
    const computerChoice = getComputerChoice();
    let winner;

    switch (true) {
        // Rock outcomes
        case playerChoice === "rock" && computerChoice === "paper":
            console.log("You lose! Paper beats Rock!");
            winner = "computer";
            break;
        case playerChoice === "rock" && computerChoice === "scissors":
            console.log("You win! Rock beats Scissors!");
            winner = "player";
            break;
        case playerChoice === "rock" && computerChoice === "rock":
            console.log("You tie! Rock and Rock hang out!");
            winner = "tie";
            break;
        // Paper outcomes
        case playerChoice === "paper" && computerChoice === "rock":
            console.log("You win! Paper beats Rock!");
            winner = "player";
            break;
        case playerChoice === "paper" && computerChoice === "scissors":
            console.log("You lose! Scissors beats Paper!");
            winner = "computer";
            break;
        case playerChoice === "paper" && computerChoice === "paper":
            console.log("You tie! Paper and Paper make a document!");
            winner = "tie";
            break;
        // Scissors outcomes
        case playerChoice === "scissors" && computerChoice === "rock":
            console.log("You lose! Rock beats Scissors!");
            winner = "computer";
            break;
        case playerChoice === "scissors" && computerChoice === "paper":
            console.log("You win! Scissors beats Paper!");
            winner = "player";
            break;
        case playerChoice === "scissors" && computerChoice === "scissors":
            console.log("You tie! Scissors and Scissors are put away safely...!");
            winner = "tie";
            break;
        // Default outcome
        default:
            console.log("Invalid game! You're making up objects! Only rock, paper and scissors allowed!");
            break;
    }

    return winner;
}

function playGame() {

    let score = 0;

    for (let i = 1; i <= 5; i++) {
        let winner = playRound();
        if (winner === "player") {
            score++;
        }
    }

    if (score >= 3) {
        console.log(`You won ${score} out of 5 rounds. You won the match!`);
    }
    else {
        console.log(`You won ${score} out of 5 rounds. You lost the match!`);
    }
}