// Rock paper scissors game

///variables:

let computer_wins = 0
let player_wins = 0
let draws = 0 
let options = {rock:'rock', paper:'paper', scissors:'scissors'}

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

//gettign player input:

function getPlayerChoice(){
    let choice = window.prompt('Type Rock/Paper/Scissors or Q to quit: ').toLowerCase()
    return choice
}

// the game:

function playgame(){
      
    while (true){

        let player_input = getPlayerChoice()
        let computer_pick = getComputerChoice()
        
        console.log('You chose: ' + player_input)
        console.log('The computer chose: ' + computer_pick)
        
        if(player_input == 'q'){
            console.log(`You won ${player_wins} times.`)
            console.log(`The computer won ${computer_wins} times.`)
            console.log(`Draws:  ${draws} `)
            console.log('Goodbye!')
            break
        }else if(player_input in options == false){
            console.log('Sorry that is not a valid input')
            continue
        }else if(player_input == computer_pick){
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
    }
}

// playgame()