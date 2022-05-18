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
            return `You Win! paper beats ${computerSelection}.`;
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

function playGame(e) {
    if (Math.max(computerScore, playerScore) < 5) {
        let computerSelection = computerPlay();
        let playerSelection = '';
    switch(e.target.id) {
        case 'rock':
            playerSelection = 'rock'
            break;
        case 'paper':
            playerSelection = 'paper'
            break;
        case 'scissors':
            playerSelection = 'scissors'
            break;
    }
    result.textContent = playRound(playerSelection, computerSelection);
    score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`
    
    if (Math.max(computerScore, playerScore) === 5) {
    
            (computerScore > playerScore) ? score.innerText += "\nYou've lost the game." : (computerScore < playerScore) ? score.innerText += "\nYou've won the game." : score.innerText += "\nIt's a tie!"

    } 
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playGame));

const result = document.querySelector('.container h2');
const score = document.querySelector('.container > p');