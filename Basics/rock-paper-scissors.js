function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choice.length);
    let computerOutput = choice[randomIndex];
    return computerOutput;
};

function play(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Tie"
    }else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! rock beats scissors"
    }else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper"
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats  rock"
    }else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "Computer wins! rock beats scissors"
    }else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "Computer wins! scissors beats rock"
    }else if (computerSelection === "paper" && playerSelection === "rock") {
        return "Computer wins! paper beats rock"
    } else {
        return "Enter correct word please"
    }
}

function game() {
    let playerWin = 0;
    let computerWin = 0;
    for(let i = 1; i <= 5; i++){
        let computer = getComputerChoice().toLowerCase();
        let user = prompt("Enter your choice: rock, paper or scissors?")
        let result = play(user, computer);
        console.log(result)

        if(result.startsWith("You win")) {
            playerWin++;
        } else if (result.startsWith("Computer wins")) {
            computerWin++;
        }
    }

    if (playerWin > computerWin) {
        console.log("You are the overall winner")
    }else if (playerWin < computerWin) {
        console.log("Computer is the overall winner")
    } else {
        console.log("There's a tie in the final result")
    }
}

// console.log(game())
game()
