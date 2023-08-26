function getComputerChoice()
{
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[(Math.floor(Math.random() * arr.length))];
}


function playRound(playerSelection, computerSelection)
{
    result = -1;
    results = document.querySelector(".result");
    switch (true)
    {
        case playerSelection === "ROCK" && computerSelection === "SCISSORS":
            results.textContent = "You Win! Rock beats Scissors";
            result = 1;
            break;
        case computerSelection === "ROCK" && playerSelection === "SCISSORS":
            results.textContent = "You Lose! Rock beats Scissors";
            break;
        case playerSelection === "SCISSORS" && computerSelection === "PAPER":
            results.textContent = "You Win! Scissors beat Paper";
            result = 1;
            break;
        case computerSelection === "SCISSORS" && playerSelection === "PAPER":
            results.textContent = "You Lose! Scissors beat Paper";
            break; 
        case playerSelection === "PAPER" && computerSelection === "ROCK":
            results.textContent = "You Win! Paper beats Rock";
            result = 1;
            break; 
        case computerSelection === "PAPER" && playerSelection === "ROCK":
            results.textContent = "You Lose! Paper beats Rock";
            break;
        default:
            results.textContent = "It's a tie!"; 
            result = 0;      
    }
    return result;
}

let playerScore = 0;
let computerScore = 0;
let playerSelection;

images = document.querySelectorAll("img");

images.forEach((image) => {
    image.addEventListener('click', () => {
        if (playerScore === 5 || computerScore === 5)
        {
            alert("Game is over, refresh to start a new one.");
            return;
        }
        playerSelection = image.getAttribute('id');
        console.log(playerSelection);
        let computerSelection = getComputerChoice();
        computerSelection = computerSelection.toUpperCase();
        player = document.querySelector(".player-selected");
        player.textContent = `You selected ${playerSelection}`;
        computer = document.querySelector(".computer-selected");
        computer.textContent = `Computer selected ${computerSelection}`;
        let result = playRound(playerSelection, computerSelection);
        if (result == 1)
        {
            playerScore++;
        }
        else if (result == -1)
        {
            computerScore++;
        }
        playerPoints = document.querySelector(".player-score");
        computerPoints = document.querySelector(".computer-score");
        playerPoints.textContent = `Your Score: ${playerScore}`;
        computerPoints.textContent = `Computer Score: ${computerScore}`;
        if (playerScore === 5)
        {
            results = document.querySelector(".result")
            results.textContent = "Player is the winner!!!";
        }
        else if (computerScore === 5)
        {
            results = document.querySelector(".result")
            results.textContent = "Computer is the winner!!!";
        }
    })
})