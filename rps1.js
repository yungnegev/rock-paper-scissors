// Rock paper scissors game

///variables:

let computer_wins = 0
let player_wins = 0
let draws = 0 

const body = document.body
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

let yourScore = document.querySelector("#player-score")
let computerScore = document.querySelector("#computer-score")
let drawsScore = document.querySelector("#draws-score")
let compDiv = document.querySelector("#comp-container")


//Get computer choice:

function getComputerChoice(){
    rndint = Math.floor(Math.random()*3) // most retarded random number i have ever seen
    
    if (rndint == 0){
        return 'scissors'
    }
    else if (rndint == 1){
        return 'rock'
    }else{
        return 'paper'
    }
}

// getting player input and launching the game:

rock.addEventListener('click', () => playRound(rock.id))
paper.addEventListener('click', () => playRound(paper.id))
scissors.addEventListener('click', () => playRound(scissors.id))


// the game:

function playRound(playerSelection){
    
    let player_input = playerSelection
    let computer_pick = getComputerChoice()
        
    console.log('You chose: ' + player_input)
    console.log('The computer chose: ' + computer_pick)
        
    
    if(player_input == computer_pick){
        console.log('It\'s a draw :/')
        draws++
    }else if(player_input == 'rock' && computer_pick == 'scissors'){
        console.log('You won!')
        player_wins++
    }else if(player_input == 'scissors' && computer_pick == 'paper'){
        console.log('You won!')
        player_wins++
    }else if(player_input == 'paper' && computer_pick == 'rock'){
        console.log('You won!')
        player_wins++
    }else{
        console.log('You lost :(')
        computer_wins++
    }

    let result = `Computer chose: <img src="./images/${computer_pick}.png" height="100"> `
    
    compDiv.innerHTML = result
    yourScore.innerText = `Your score: ${player_wins}`
    computerScore.innerText = `Computer score: ${computer_wins}`
    drawsScore.innerText = `Draws: ${draws}`
}



// Animations

// (adding "chosen" which is a class with a transition css property)
rock.addEventListener('click', () => rock.classList.add("chosen"))
paper.addEventListener('click', () => paper.classList.add("chosen"))
scissors.addEventListener('click', () => scissors.classList.add("chosen"))

// (creating a function which emoves that class)
function removeTransition(e) {

    if (e.propertyName !== 'transform') return 
    this.classList.remove('chosen')
}

// (once the thransition happens call the function to remove it)
rock.addEventListener('transitionend' , removeTransition)
paper.addEventListener('transitionend' , removeTransition)
scissors.addEventListener('transitionend' , removeTransition)


