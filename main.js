let playerScore = 0;
let computerScore = 0;

function computerPlay() {

    const computerSelection = Math.floor(Math.random() * 3)
    if (computerSelection === 0) {
        return 'Rock';
    } else if (computerSelection === 1 )
    {
        return 'Paper';
    } 
    else return 'Scissors';

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'Rock') {
            playerScore++;
            computerScore++;
            return `Draw, You both put ${computerSelection}`;
        }
        if (computerSelection === 'Paper') {
            computerScore++;
            return `You Lose! ${computerSelection} beats Rock`;
        }
        if (computerSelection === 'Scissors') {
            playerScore++;
            return `You Win! Rock beats ${computerSelection}`;
        }
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'Rock') {
            playerScore++;
            return `You Win! ${computerSelection} beats paper.`;
        }
        if (computerSelection === 'Paper') {
            playerScore++;
            computerScore++;
            return `Draw, You both put ${computerSelection}`;
        }
        if (computerSelection === 'Scissors') {
            computerScore++;
            return `You Lose! ${computerSelection} beats paper`;
        }
    }
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'Rock') {
            computerScore++;
            return `You Lose! ${computerSelection} beats scissors.`;
        }
        if (computerSelection === 'Paper') {
            playerScore++;
            return `You Win!, Scissors beats ${computerSelection}`;
        }
        if (computerSelection === 'Scissors') {
            playerScore++;
            computerScore++;
            return `Draw, you both put ${computerSelection}`;
        }

    }

}

function game() {
    while (Math.max(computerScore, playerScore) < 5) {
        
        let playerSelection = prompt("Choose rock, paper, or scissors");

        if (!playerSelection || playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors') {
            console.log('Please enter either rock, paper, or scissors')
            break;
        }

        let computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${playerScore}, Computer: ${computerScore}`)

    }
    
    if (Math.max(computerScore, playerScore) === 5) {
        console.log(
            (computerScore > playerScore) ? 'You Lose!' : (computerScore < playerScore) ? 'You Win!' : "It's a tie!"
        )
    } 

}

game();