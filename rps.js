function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    const input = prompt("Rock, Paper or Scissors?", "rock");
    const choice = input.trim().toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid input. Playing rock for you since you can't make up your mind.");
        return "rock";
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    const message = humanScore >= computerScore ? `You did well! You: ${humanScore} / Computer: ${computerScore}.` : `You lose ${computerScore} against ${humanScore}.`;
    console.log(message);

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both played ${humanChoice}!`);
            humanScore++;
            computerScore++;
        } else if (humanChoice === "rock") {
            switch (computerChoice) {
                case "paper":
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                    computerScore++;
                    break;
                case "scissors":
                    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                    humanScore++;
            }
        } else if (humanChoice === "paper") {
            switch (computerChoice) {
                case "rock":
                    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                    humanScore++;
                    break;
                case "scissors":
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                    computerScore++;
            }
        } else { // humanChoice === "scissors"
            switch (computerChoice) {
                case "rock":
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                    computerScore++;
                    break;
                case "paper":
                    console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                    humanScore++;
            }
        }
    }
}
