const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const battleLog = document.querySelector('#log');

let roundCounter = 0;
let gameOverState = 0;

rockButton.addEventListener('click', () => {
    if (gameOverState > 0) {
        gameReset();
    } else {
        let compChoice = computerTurn();
        let result = compare('rock', compChoice);
        postRoundResults('ROCK', compChoice, result);
    }
});

paperButton.addEventListener('click', () => {
    if (gameOverState > 0) {
        gameReset();
    } else {
        let compChoice = computerTurn();
        let result = compare('paper', compChoice);
        postRoundResults('PAPER', compChoice, result);
    }
});

scissorsButton.addEventListener('click', () => {
    if (gameOverState > 0) {
        gameReset();
    } else {
        let compChoice = computerTurn();
        let result = compare('scissors', compChoice);
        postRoundResults('SCISSORS', compChoice, result);
    }
});

function compare(player, computer) {
    if (player == 'rock') {
        switch(computer) {
            case 'rock':
                return tie();
            case 'paper':
                return loss();
            case 'scissors':
                return victory();
        }
    } else if (player == 'paper') {
        switch(computer) {
            case 'rock':
                return victory();
            case 'paper':
                return "tie"
            case 'scissors':
                return loss();
        }
    } else {
        switch(computer) {
            case 'rock':
                return loss();
            case 'paper':
                return victory();
            case 'scissors':
                return "tie"
        }
    }
}

function addToLog(text) {
    if (battleLog.textContent === "The battle is not started yet..." || battleLog.textContent === "The new battle awaits...") {
        battleLog.textContent = ''
    }
    battleLog.textContent += text + "\n";
    logScrollDown();
}

function logScrollDown() {
    battleLog.scrollTop = battleLog.scrollHeight;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let computerTurn = () => {
    switch(getRandomInt(3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Replace character in string at index
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

// 3 functions for state of the game
function victory() {
    decreaseHealth('computer');
    roundCounter++;
    return "victory"
    
}

function loss() {
    decreaseHealth('player');
    roundCounter++;
    return "loss"
}

function tie() {
    roundCounter++;
    return "tie"
}

function checkHealth(player) {
    let health = document.querySelector(`.${player} .health`);
    if (health.textContent.lastIndexOf("❤") != -1) {
        return true
    } else {
        return false
    }
}

function decreaseHealth(player) {
    let health = document.querySelector(`.${player} .health`);
    str = health.textContent;
    str = setCharAt(str, health.textContent.lastIndexOf("❤"), "🖤");
    health.textContent = str;
    if (checkHealth(player) == false) {
        switch (player) {
            case 'player':
                gameOverState=1;
                break;
            case 'computer':
                gameOverState=2;
        }
    }
}

function gameOver(player) {
    switch (player) {
        case 'computer':
            addToLog("\nCongratulations, you won the game!\nPress any button to reset the game!");
            break;
        case 'player':
            addToLog("\nComputer won the game. \nPress any button to reset the game!");
            break;
    }
    toggleButtons();
    setTimeout(() => { toggleButtons(); }, 2000);
}

function postRoundResults(playerChoice, compChoice, result) {
    addToLog(`ROUND ${roundCounter}\nYour choice: ${playerChoice.toUpperCase()} Computer's choice: ${compChoice.toUpperCase()} \nSo it's a ${result}.\n`);
    if (gameOverState != 0) {
        gameOverState == 1 ? gameOver('player') : gameOver('computer');
    }
}

function gameReset() {
    roundCounter = 0;
    gameOverState = 0;
    battleLog.textContent = "The new battle awaits...";
    healthBars = document.querySelectorAll(".health");
    healthBars[0].textContent = "❤❤❤❤❤";
    healthBars[1].textContent = "❤❤❤❤❤";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleButtons () {
    rockButton.disabled = !rockButton.disabled;
    paperButton.disabled = !paperButton.disabled;
    scissorsButton.disabled = !scissorsButton.disabled;
}