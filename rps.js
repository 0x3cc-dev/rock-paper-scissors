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

    const buttons = document.querySelectorAll(".choice-buttons");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            playRound(button.id, getComputerChoice());
        });
    });

    const messages = document.querySelector(".messages");

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            messages.textContent = `It's a tie! You both played ${humanChoice}!`;
            humanScore++;
            computerScore++;
        } else if (humanChoice === "rock") {
            switch (computerChoice) {
                case "paper":
                    messages.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
                    computerScore++;
                    break;
                case "scissors":
                    messages.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                    humanScore++;
            }
        } else if (humanChoice === "paper") {
            switch (computerChoice) {
                case "rock":
                    messages.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                    humanScore++;
                    break;
                case "scissors":
                    messages.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
                    computerScore++;
            }
        } else { // humanChoice === "scissors"
            switch (computerChoice) {
                case "rock":
                    messages.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
                    computerScore++;
                    break;
                case "paper":
                    messages.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                    humanScore++;
            }
        }
    }
}
