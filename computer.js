function getComputerChoice(num=3){
    const choices = ['Rock','Paper','Scissors']
    console.log("Computer Choice: "+choices[Math.floor(Math.random() * num)])
    return choices[Math.floor(Math.random() * num)]
}