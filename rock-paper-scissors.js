function getComputerChoice() {
    
    let randomChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1); // Stores a random number between 1 and 3, inclusive, to use as the computer's choice
    let computerChoice;

    switch (randomChoice) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
        default:
            break;
    }

    return computerChoice;
}