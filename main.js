// make the computer make a choice
function getComputerChoice(){
    // make it a 33% chance to get 1 2 3
    let number = Math.ceil(Math.random() * 3);
    //return the value one of (rock, paper, scissors)
    if (number === 1){
        choice = "rock"
    } else if(number === 2){
        choice = "paper"
    } else{
        choice = "scissors"
    }
    console.log(number)
    console.log(choice)
    return choice;
}

function getHumanChoice(){
    choice = prompt("rock, paper or scissors? Enter your pick: ").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        alert("Its a Tie")
    }else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        alert(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore
    }else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "rock" && computerChoice === "paper") 
    ){
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore
    }

}

function playGame(){
    humanScore = 0
    computerScore = 0
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if(humanScore > computerScore){
        alert(`Score was: Human: ${humanScore} Computer: ${computerScore}`)
        alert("You won the game!!! with $10000000 ")
    }else if (humanScore < computerScore){
        alert(`Score was Human: ${humanScore} Computer: ${computerScore}`)
        alert("You lost!!! computer won pay me $1000000 or die")
    } else{
        alert(`Score was Human: ${humanScore} Computer: ${computerScore}`)
        alert("tie but you still die sorry")
    }

}

playGame()