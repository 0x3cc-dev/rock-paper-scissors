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
    messages.textContent = "Welcome to Rock - Paper - Scissors!";

    const humanScoreDisplay = document.querySelector(".human-score");
    const computerScoreDisplay = document.querySelector(".computer-score");

    humanScoreDisplay.textContent = `You: ${humanScore}`;
    computerScoreDisplay.textContent = `CPU: ${computerScore}`;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            messages.textContent = `It's a tie! You both played ${humanChoice}!`;
            humanScore++;
            computerScore++;
            humanScoreDisplay.textContent = `You: ${humanScore}`;
            computerScoreDisplay.textContent = `CPU: ${computerScore}`;
        } else if (humanChoice === "rock") {
            switch (computerChoice) {
                case "paper":
                    messages.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
                    computerScore++;
                    computerScoreDisplay.textContent = `CPU: ${computerScore}`;
                    break;
                case "scissors":
                    messages.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                    humanScore++;
                    humanScoreDisplay.textContent = `You: ${humanScore}`;
            }
        } else if (humanChoice === "paper") {
            switch (computerChoice) {
                case "rock":
                    messages.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                    humanScore++;
                    humanScoreDisplay.textContent = `You: ${humanScore}`;
                    break;
                case "scissors":
                    messages.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
                    computerScore++;
                    computerScoreDisplay.textContent = `CPU: ${computerScore}`;
            }
        } else { // humanChoice === "scissors"
            switch (computerChoice) {
                case "rock":
                    messages.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
                    computerScore++;
                    computerScoreDisplay.textContent = `CPU: ${computerScore}`;
                    break;
                case "paper":
                    messages.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                    humanScore++;
                    humanScoreDisplay.textContent = `You: ${humanScore}`;
            }
        }

        if (humanScore === 5 || computerScore === 5) {
            if (humanScore === computerScore) {
                messages.textContent = "The game is over, and it's a tie!";
            } else if (humanScore > computerScore) {
                messages.textContent = "The game is over, and you won!";
            } else {
                messages.textContent = "The game is over, and you lost!";
            }

            buttons.forEach((button) => {
                button.disabled = "true";
            });
        }
    }
}
