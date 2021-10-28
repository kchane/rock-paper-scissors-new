// computer chooses rock paper or scissors
function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let computerChoice;
    if (num == 0) {
        computerChoice = 'rock';
    } else if (num == 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

// // receive player choice and computer choice
let playerChoice = 'rock'
// const computerChoice = computerPlay();

// play 1 round
function playRound() {
    playerChoice = prompt('Rock, Paper, or Scissors')
    const computerChoice = computerPlay();
    
    let result;
// if player chooses rock    
    if (playerChoice == 'rock') {
        console.log(`You chose: Rock and I chose ${computerChoice}.`)
        if (computerChoice == 'paper') {
            result = 'You Lose';
        } else if (computerChoice == 'scissors') {
            result = 'You Win!';
        } else {
            result = 'Draw';
        }
// if player chooses paper
    } else if (playerChoice == 'paper') {
        console.log(`You chose: Paper and I chose ${computerChoice}.`)
        if (computerChoice == 'rock') {
            result = 'You Win!';
        } else if (computerChoice == 'scissors') {
            result = 'You Lose'
        } else {
            result = 'Draw';
        }
// if player chooses scissors
    } else if (playerChoice == 'scissors') {
        console.log(`You chose: Scissors and I chose ${computerChoice}.`)
        if (computerChoice == 'rock') {
            result = 'You Lose';
        } else if (computerChoice == 'paper') {
            result = 'You Win!';
        } else {
            result = 'Draw';
        }
// if player enters a different option
    } else if (playerChoice == null){
        return;
    } else {
        alert('Please enter a valid selection', '')
        playRound(playerChoice)
    } 
    return result;
}

// function to play 5 rounds determines best 2/3
function game() {
    let playerScore = 0;
    let computerScore = 0
    // while (playerScore < 3 || computerScore < 3) {
        // for (i = 0; i < 5; i++) {
        do {
            // playerChoice = prompt('Rock, paper, or scissors');
            let roundResult = playRound(playerChoice)
            // console.log(`You chose: ${playerChoice} and I chose ${computerChoice}.`)
            // console.log(result)
            if (roundResult == 'You Win!') {
                console.log(roundResult);
                playerScore++;
            } else if(roundResult == 'You Lose') {
                console.log(roundResult);
                computerScore++;
            } else {
                console.log(roundResult);
            }
            console.log(`Your score: ${playerScore}`);
            console.log(`My score: ${computerScore}`);
        } while (playerScore < 3 && computerScore < 3);
    // }
    if (playerScore == 3) {
        return console.log('Congrats, you won the game!')
    } else if (computerScore == 3) {
           return console.log('I won the game')
        }
}