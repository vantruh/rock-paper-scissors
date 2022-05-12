console.log("a");

// Get random int from 0 to max 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Randomly return "Rock", "Paper" or "Scissors"
computerTurn = () => {
    switch (getRandomInt(3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Something Went Wrong";
    }
}

// Get results of 1 round of rock-paper-scissors game
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return `There are no such move as ${playerSelection}. Please use rock, paper or scissors.`
    }
    computerSelection = computerSelection.toLowerCase();
    let result;
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    result = "Tie";
                    break;
                case "paper":
                    result = "Lose";
                    break;
                case "scissors":
                    result = "Win";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    result = "Win";
                    break;
                case "paper":
                    result = "Tie";
                    break;
                case "scissors":
                    result = "Lose"
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    result = "Lose";
                    break;
                case "paper":
                    result = "Win";
                    break;
                case "scissors":
                    result = "Tie"
                    break;
            }
            break;
    }
    switch (result) {
        case "Lose":
            return `You lost. Computer's ${computerSelection} beats your ${playerSelection}.`
        case "Tie": 
            return `It's a tie! Both computer and you chose ${computerSelection}!`
        case "Win":
            return `You won! Computer chose ${computerSelection} and your ${playerSelection} beats ${computerSelection}!`
    }
}