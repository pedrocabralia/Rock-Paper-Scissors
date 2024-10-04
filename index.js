humanScore = 0
computerScore = 0
function getHumanChoice(){


    escolha =   prompt("Pedra, Papel ou Tesoura?")
   
   return escolha.toLowerCase();
}




function getComputerChoice(){

    const randonInt = Math.floor(Math.random() * 3);

    if(randonInt == 0){

       saida = "pedra"
       return saida
    }

    else if(randonInt == 1){
        saida = "papel"
        return saida
    }

    else{
        saida = "tesoura"
        return saida
    }

    

    

}
function playRound(humanChoice,computerChoice){
   
    

    

    if(humanChoice == computerChoice){
        alert("empate "+ humanChoice + computerChoice)
        alert("Pontuação Humanos: "+humanScore + "Pontuação Computador: "+computerScore)
    }

    else if(humanChoice == "pedra" && computerChoice == "tesoura"){
        alert("Humanos vencem: "+" Humanos: "+ humanChoice + " PC: " + computerChoice)
        humanScore = humanScore + 1
        alert("Pontuação Humanos: "+humanScore + "Pontuação Computador: "+computerScore)

    }

    else if(humanChoice == "tesoura" && computerChoice == "papel"){
        alert(" Humanos vencem: "+" Humanos: "+ humanChoice + " PC: " + computerChoice)
        humanScore = humanScore + 1
        alert("Pontuação Humanos: "+humanScore + "Pontuação Computador: "+computerScore)

    }

    else if(humanChoice == "papel" && computerChoice == "pedra"){
        alert("Humanos vencem: "+" Humanos: "+ humanChoice + " PC: " + computerChoice)
        humanScore = humanScore + 1
        alert("Pontuação Humanos: "+humanScore + "Pontuação Computador: "+computerScore)

    }

    else{

        alert("Computadores vencem: "+ " Pc: "+computerChoice + " Humanos: " + humanChoice )
        computerScore = computerScore + 1
        alert("Pontuação Humanos: "+humanScore + "Pontuação Computador: "+computerScore)

    }



}

function playGame(playRound){
 
  

    const playRounds = playRound(humanSelection,computerSelection)

    
  


}

for (i = 0 ; i<=4; i++){

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playGame(playRound)



}





