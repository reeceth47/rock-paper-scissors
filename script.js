function getComputerChoice() {
    let choice = Math.random().toFixed(2);
        if (choice <= 0.3333) {
        console.log(`Rock`);
        let shoot = `rock`;
        return shoot;
    } else if (0.3333 < choice > 0.66) {
        console.log(`Paper`);
        let shoot = `paper`;
        return shoot;
    } else if (0.66 <= choice) {
        console.log(`Scissors`);
        let shoot = `scissors`;
        return shoot;
    }
    return console.log(choice);
}

const rock = true;
const paper = false;
const scissors = undefined;
let playerSelection = prompt(`Rock, Paper, Scissors`, `Shoot`)

function winLose(playerSelection, getComputerChoice) {

}
