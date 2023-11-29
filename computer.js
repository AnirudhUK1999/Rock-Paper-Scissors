const choices = ['rock','paper','scissors']
function getComputerChoice(){
    // console.log("Computer Choice: "+choices[Math.floor(Math.random() * 3)])
    return choices[Math.floor(Math.random() * 3)]
}

// function getComputerChoice(){
//     console.log("Computer Choice: "+choices[Math.floor(Math.random() * 3)])
//     return choices[Math.floor(Math.random() * 3)]
// }

function result(choice){
    let res = ""
    let choiceComp = getComputerChoice().toString().toLowerCase()
    let choicePlayer = choice.toString().toLowerCase()
    // console.log(getComputerChoice().toString().toLowerCase())
    console.log(choiceComp)
    console.log(choicePlayer)
    if (choiceComp == choices[0] && choicePlayer == choices[1]){
        res = "Player Won, Paper beats Rock"
    }
    else if(choiceComp == choices[1] && choicePlayer == choices[0]){
        res = "Comp Won, Paper beats Rock"
    }
    else if(choiceComp == choices[1] && choicePlayer == choices[2]){
        res = "Player Won, Scissors beats Paper"
    }
    else if(choiceComp == choices[2] && choicePlayer == choices[1]){
        res = "Comp Won, Scissors beats Paper"
    }
    else if(choiceComp == choices[2] && choicePlayer == choices[0]){
        res = "Player Won, Rock beats paper"
    }
    else if(choiceComp == choices[0] && choicePlayer == choices[2]){
        res = "Comp Won, Rock beats paper"
    }
    else{
        res = "Draw! Play Again?"
    }
    return res
}