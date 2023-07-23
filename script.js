function getComputerChoice()
{
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[(Math.floor(Math.random() * arr.length))];
}


function playRound(playerSelection, computerSelection)
{
    result = -1;

    switch (true)
    {
        case playerSelection === "ROCK" && computerSelection === "SCISSORS":
            console.log("You Win! Rock beats Scissors");
            result = 1;
            break;
        case computerSelection === "ROCK" && playerSelection === "SCISSORS":
            console.log("You Lose! Rock beats Scissors");
            break;
        case playerSelection === "SCISSORS" && computerSelection === "PAPER":
            console.log("You Win! Scissors beat Paper");
            result = 1;
            break;
        case computerSelection === "SCISSORS" && playerSelection === "PAPER":
            console.log("You Lose! Scissors beat Paper");
            break; 
        case playerSelection === "PAPER" && computerSelection === "ROCK":
            console.log("You Win! Paper beats Rock");
            result = 1;
            break; 
        case computerSelection === "PAPER" && playerSelection === "ROCK":
            console.log("You Lose! Paper beats Rock");
            break;
        default:
            console.log("It's a tie!"); 
            result = 0;      
    }
    return result;
}

function game()
{
    let x = 5;
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    while (x--)
    {
        console.log(`Round ${5 - x}`);
        while (true)
        {
            playerSelection = prompt("Enter rock, paper or scissors: ", "");
            playerSelection = playerSelection.toUpperCase();
            if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS")
            {
                break;
            }
            alert("Invalid choice. Try again!!!");
        }
        let computerSelection = getComputerChoice();
        computerSelection = computerSelection.toUpperCase();
        console.log(`You selected ${playerSelection}`);
        console.log(`Computer selected ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection)
        if (result == 1)
        {
            playerScore++;
        }
        else if (result == -1)
        {
            computerScore++;
        }
        console.log(`Your Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log("\n");
    }
    if (playerScore > computerScore)
    {
        console.log("Player is the winner!!!");
    }
    else if (computerScore > playerScore)
    {
        console.log("Computer is the winner!!!");
    }
    else
    {
        console.log("It is a draw. Both are winners!!!")
    }
}

game();