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
// let computerChoice = computerPlay();
// play 1 round
function playRound(playerChoice) {
    let result;   
    let computerChoice = computerPlay();
    if (playerChoice == 'rock') {
        console.log(`You chose: Rock and I chose ${computerChoice}.`)
        if (computerChoice == 'paper') {
            result = 'You Lose';
        } else if (computerChoice == 'scissors') {
            result = 'You Win!';
        } else {
            result = 'Draw';
        }
    } else if (playerChoice == 'paper') {
        console.log(`You chose: Paper and I chose ${computerChoice}.`)
        if (computerChoice == 'rock') {
            result = 'You Win!';
        } else if (computerChoice == 'scissors') {
            result = 'You Lose'
        } else {
            result = 'Draw';
        }
    } else if (playerChoice == 'scissors') {
        console.log(`You chose: Scissors and I chose ${computerChoice}.`)
        if (computerChoice == 'rock') {
            result = 'You Lose';
        } else if (computerChoice == 'paper') {
            result = 'You Win!';
        } else {
            result = 'Draw';
        }
    }
    if (roundOver) {
        dupeComputerChoice(computerChoice);
    }    
    return result;
}  

const choices = document.querySelectorAll('.choice');
const pscoreDisplay = document.querySelector('.pscore .scorenumber');
const cscoreDisplay = document.querySelector('.cscore .scorenumber');
const restart = document.querySelector('.restart');
// const rock = document.querySelector('div .rock');
const pchoiceDisplay = document.querySelector('.pchoice');
const cchoiceDisplay = document.querySelector('.cchoice');
const roundDisplay = document.querySelector('.display')
const counterDisplay = document.querySelector('.counter')
let roundOver = true;
let pscore = 0;
let cscore = 0;

for (const choice of choices) {
    choice.addEventListener('click', function (e) {
        let result = playRound(e.target.className);
        if (roundOver) { 
            roundOver = false;
            roundDisplay.textContent = result;
            dupeChoice(e.target.className);
            countDown();
            if (result == 'You Win!') {
                pscore++;
                pscoreDisplay.textContent = pscore;
                pchoiceDisplay.lastChild.classList.add('winner');
                cchoiceDisplay.lastChild.classList.add('loser')
            } else if (result == 'You Lose') {
                cscore++;
                cscoreDisplay.textContent = cscore;
                pchoiceDisplay.lastChild.classList.add('loser');
                cchoiceDisplay.lastChild.classList.add('winner')
            } else {
                pchoiceDisplay.lastChild.classList.add('draw');
                cchoiceDisplay.lastChild.classList.add('draw')
            }
            setTimeout(function() {
                roundDisplay.textContent = '';
                removeAllChildren(pchoiceDisplay);
                removeAllChildren(cchoiceDisplay);
                counterDisplay.textContent = '';
                roundOver = true;
            }, 3000)
        } 
    })
}
restart.addEventListener('click', function (e) {
    resetGame();
})

function resetGame() {
    pscore = 0;
    cscore = 0;
    pscoreDisplay.textContent = pscore;
    cscoreDisplay.textContent = cscore;
    roundOver = true;
}

// duplicates elements to put in the section that displays the round choices and outcome
function dupeChoice(choice) {
    const div = document.createElement('div');
    div.classList.add(choice);
    const pic = document.createElement('img');
    pic.classList.add(choice);
    pic.src = `images/icon-${choice}.svg`
    div.appendChild(pic);
    pchoiceDisplay.textContent = 'Your Choice';
    pchoiceDisplay.appendChild(div);
}

function dupeComputerChoice(choice) {
    const div = document.createElement('div');
    div.classList.add(choice);
    const pic = document.createElement('img');
    pic.classList.add(choice);
    pic.src = `images/icon-${choice}.svg`
    div.appendChild(pic);
    cchoiceDisplay.textContent = 'My Choice';
    cchoiceDisplay.appendChild(div);
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function countDown() {
    let i = 2;
    counterDisplay.textContent = 'Next Round in... ' + 3
    const counter = setInterval(() => {
        if (i <= 0) {
            clearInterval(counter)
        } else {
            counterDisplay.textContent = 'Next Round in... ' + i;
            i--;
        }
    }, 1000);
}