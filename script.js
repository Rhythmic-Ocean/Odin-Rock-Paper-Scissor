humanScore = 0;
compScore = 0;

function getMove(rand_num){
    switch(rand_num){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}


function getComputerChoice(){
    rand_num = Math.floor((Math.random() * 3));
    console.log(rand_num);
    return getMove(rand_num);
}

function getHumanChoice(){
    let move = prompt("Your move!");
    return move;
}

function playRound(human_choice, computer_choice){
    hum_choice = human_choice();
    comp_choice = computer_choice();
    switch(hum_choice){
        case "rock":{
            if (comp_choice == "paper"){
                console.log("You lose, paper beats rock!");
                compScore++;
            }
            else if(comp_choice == "scissors"){
                console.log("You win, rock beats scissor.");
                humanScore++;
            }
            else{
                console.log("Draw!");
            }
            break;
        }

        case "paper":{
            if (comp_choice == "rock"){
                console.log("You win, paper beats rock!");
                humanScore++
            }
            else if(comp_choice == "scissors"){
                console.log("You lose, scissors beats paper.");
                compScore++;
            }
            else{
                console.log("Draw!");
            }
            break;

        }

        case "scissors":{
            if (comp_choice == "rock"){
                console.log("You lost, rock beats scissors!");
                compScore++;
            }
            else if(comp_choice == "scissors"){
                console.log("Draw");
            }
            else{
                console.log("You win, scissors beats paper");
                humanScore++;
            }
            break;
        }
    }

}

function playGame(){
    for(let i = 0; i < 5; i++){
    let hum_choice = getHumanChoice;
    let comp_choice = getComputerChoice;
        playRound(hum_choice, comp_choice);
    }

    if(humanScore > compScore){
        console.log("You win");
    }
    else if(humanScore < compScore){
        console.log("You lose");
    }
    else{
        console.log("Draw");
    }
}

playGame();

