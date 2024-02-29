let computerScore = document.querySelector('#c-score')
let playerScore = document.querySelector('#p-score')
let output  = document.querySelector('.result')
let computer = document.querySelector('#computer-choice')
let player = document.querySelector('#player-choice')
let winner = document.querySelector('#winner')

// choice buttons 
let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
let restart = document.querySelector('#reset')



// listening to the choice, invoke play function
rock.addEventListener('click',()=> play("rock"))
paper.addEventListener('click', ()=> play("paper"))
scissors.addEventListener('click', ()=> play("scissors"))

// reset game with event listener
restart.addEventListener('click', ()=>{
  playerScore.textContent = 0
  computerScore.textContent = 0
  winner.textContent = ""
  computer.textContent = "SCORE HAS BEEN RESET"
  player.textContent = ""
})

let result = "";
// create the function play
function play(userChoice) {
    // Generate the computer's choice
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    // Determine the winner
   
    if (userChoice === computerChoice) {
      result = "It's a tie!";
      computerScore.textContent++;
      playerScore.textContent++;
      
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "You win!";
      playerScore.textContent++;
    } else {
      result = "You lose!";
      computerScore.textContent++;
    }
    player.textContent = `Player choice: ${userChoice}`
    computer.textContent = `Computer choice: ${computerChoice}`
    winner.textContent = result
}

