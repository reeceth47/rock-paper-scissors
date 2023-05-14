function getComputerChoice() {
    let choice = Math.random().toFixed(2);
        if (choice <= 0.3333) {
        console.log(`Rock`);
        let rock = `rock`;
        return rock;
    } else if (0.3333 < choice > 0.66) {
        console.log(`Paper`);
        let paper = `paper`;
        return paper;
    } else if (0.66 <= choice) {
        console.log(`Scissors`);
        let scissors = `scissors`;
        return scissors;
    }
    return console.log(choice);
}
let playerScore = 0;
let computerScore = 0;

function winLose() {
    let playerSelection = prompt(`Rock, Paper, Scissors`, `Shoot`).toLowerCase();
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        console.log(`Tie!`);
        console.log(playerSelection === computerSelection);
    } else if (playerSelection === `rock`) {
        if (computerSelection == `paper`) {
            computerScore++;
            console.log(`Computer won!`);
        } else {
            playerScore++;
            console.log(`You won`);
        }
    } else if (playerSelection == `paper`) {
        if (computerSelection == `scissors`) {
            computerScore++;
            console.log(`Computer won`);
        } else {
            playerScore++;
            console.log(`You won`);
        }
    } else if (playerSelection == `scissors`) {
        if (computerSelection == `rock`) {
            computerScore++;
            console.log(`Computer won!`);
        } else {
            playerScore++;
            console.log(`You won`);
        }
    }
}


function game() {
    winLose();
    if (computerScore === 5) {
        console.log(`Computer has won the tournament!`);
    } else if (playerScore === 5) {
        console.log(`You won the tournament!`);
    } else {
        game();
    }
}
game();