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

// Check if player's move is legal
function checkMove (playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return false
    }
    return true
}

// Convert string result to kind of number result for easier fetching
function getRoundResult (result) {
    if (result.indexOf("lost") != -1) {
        return -1;
    } else if (result.indexOf("won") != -1) {
        return 1;
    } else {
        return 0
    }
}

// Get results of 1 round of rock-paper-scissors game
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
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

// Play 5 rounds of the game
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let selection;
    for (let i=0; i<5; i++) {
        selection = prompt(`Round ${i + 1}. Your score: ${playerScore}, computer's score: ${computerScore}.\r\nPlease type rock, paper or scissors to make a move`);
        while (!checkMove(selection)) {
            selection = prompt(`Move ${selection} is illegal. Please type rock, paper or scissors to make a move`)
        }
        result = playRound(selection, computerTurn());
        alert(result);
        switch (getRoundResult(result)) {
            case -1:
                computerScore++;
                break;
            case 1:
                playerScore++;
                break;
            default:
                break;
        }
    }
    let finalScore = `Final score - ${playerScore}:${computerScore}`
    if (playerScore > computerScore) {
        alert("You are the winner! " + finalScore); 
    } else if (computerScore > playerScore) {
        alert ("You lost. " + finalScore);
    } else {
        alert("It's a tie. " + finalScore + ". Refresh the page to play again!");
    }
}
game();