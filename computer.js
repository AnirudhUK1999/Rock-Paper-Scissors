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
    }
    else if(computerSelection == choices[1] && playerSelection == choices[0]){
        res = compTemplate + ", Paper beats Rock"
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

function game(){
    let scorePlayer = 0;
    let scoreComp = 0;
    //best of five
    for(let i = 0;i<5;){
        //user input
        let playerSelection = prompt("Choose !",choices[0])
        
        computerSelection = getComputerChoice().toString().toLowerCase()
        playerSelection = playerSelection.toLowerCase()
        
        let winner = playRound(computerSelection,playerSelection)
        
        console.log(winner);   // log round winner
        //determine score card     
        if(winner.includes("Player Won")){
            scorePlayer++;
        }
        else if((winner.includes("Comp Won"))) {
            scoreComp ++;
        }
        else    // if draw, replay again
            continue;
        i++;
        if(scorePlayer == 3 || scoreComp == 3 )
            break;
    }

    //final display
    if(scorePlayer > scoreComp)
        console.log("Player has beat Comp!")
    else if (scorePlayer == scoreComp)
        console.log("Its a draw ! ");
    else
        console.log("Comp has beat you, Sorry !! :(");
    
}