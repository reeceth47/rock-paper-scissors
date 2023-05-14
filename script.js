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
const playerSelection = prompt(`Rock, Paper, Scissors`, `Shoot`).toLowerCase();
const computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection);
function winLose() {
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
winLose();