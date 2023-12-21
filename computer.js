

const choices = ['rock','paper','scissor']
function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)]
}


function playRound(computerSelection,playerSelection){
    let res = ""
    console.log("comp choice: "+computerSelection)
    console.log("player choice: "+playerSelection)
    let playerTemplate = "Player Won";
    let compTemplate = "Comp Won";
    if (computerSelection == choices[0] && playerSelection == choices[1]){
        res = playerTemplate + ", Paper beats Rock"
        // console.log(playerTemplate + ", Paper beats Rock")
    }
    else if(computerSelection == choices[1] && playerSelection == choices[0]){
        res = compTemplate + ", Paper beats Rock"
        // console.log(playerTemplate + ", Paper beats Rock")
    }
    else if(computerSelection == choices[1] && playerSelection == choices[2]){
        res = playerTemplate +", Scissors beats Paper"
    }
    else if(computerSelection == choices[2] && playerSelection == choices[1]){
        res = compTemplate + ", Scissors beats Paper"
    }
    else if(computerSelection == choices[2] && playerSelection == choices[0]){
        res = playerTemplate +", Rock beats paper"
    }
    else if(computerSelection == choices[0] && playerSelection == choices[2]){
        res = compTemplate + ", Rock beats paper"
    }
    else{
        res = "Draw! Play Again?"
    }
    return res
}

let scorePlayer = 0;
let scoreComp = 0;
let result = ""
let finalDisplay = undefined;

function game(playerSelection){
    computerSelection = getComputerChoice().toString().toLowerCase()
    let winner = playRound(computerSelection,playerSelection);
    let buttonContainer = document.querySelector('.buttonContainer');
    if(scorePlayer == 5){
        result = "Player has won!";
        finalDisplay = document.createElement('div');
        finalDisplay.classList.add('finalDisplay-container');
        finalDisplay.textContent = result;
        buttonContainer.appendChild(finalDisplay);
        return;
    }
    else if(scoreComp == 5){
        result = "Comp has won!";
        finalDisplay = document.createElement('div');
        finalDisplay.classList.add('finalDisplay-container');
        finalDisplay.textContent = result;
        buttonContainer.appendChild(finalDisplay);
        return;
    }
    if(winner.includes("Player Won")){
        scorePlayer++;
    }
    else if((winner.includes("Comp Won"))) {
        scoreComp ++;
    }
    let display = document.createElement('div');
    display.classList.add('display-container');
    let scoreCard = "PlayerScore: "+ scorePlayer + " ; " + "CompScore: " + scoreComp;
    display.textContent = scoreCard;
    buttonContainer.appendChild(display)
    console.log("scorePlayer: "+scorePlayer);
 
}



