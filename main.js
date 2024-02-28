let computerScore = document.querySelector('#c-score')
let playerScore = document.querySelector('#p-score')
let output  = document.querySelector('.result')
// choice buttons 
let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
let restart = document.querySelector('.reset')


// listening to the choice, invoke play function
rock.addEventListener('click',()=> play("rock"))
paper.addEventListener('click', () =>play("paper"))
scissors.addEventListener('click', () =>play("scissors"))


// create the function play
function play(userChoice) {
    // Generate the computer's choice
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    // Determine the winner
    let result;
    if (userChoice === computerChoice) {
      result = "It's a tie!";
      console.log(userChoice)
      
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "You win!";
      console.log()
      console.log(userChoice, computerChoice)
      playerScore.textContent++;
    } else {
      result = "You lose!";
      console.log(userChoice, computerChoice)
      computerScore.textContent++;
    }
    output.textContent = result
}

// reset button that is put all to zero
restart.addEventListener('click', () =>{
    playerScore.textContent = 0
    computerScore.textContent = 0

})