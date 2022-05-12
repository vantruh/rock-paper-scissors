console.log("a");

// Get random int from 0 to max */
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