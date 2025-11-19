const playButton = document.querySelectorAll("button");
playButton.forEach((btn) => {
    btn.addEventListener('click', (event)=>playRound(event))
})

const div = document.querySelector(".result");
const score = document.querySelector(".score");

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

function getHumanChoice(event){
    let choice = event.target;
    return choice.className;
}

function playRound(event){
    hum_choice = getHumanChoice(event);
    comp_choice = getComputerChoice();
    switch(hum_choice){
        case "rock":{
            if (comp_choice == "paper"){
                div.textContent = "You lose, paper beats rock!";
                compScore++;
            }
            else if(comp_choice == "scissors"){
                div.textContent = "You win, rock beats scissor.";
                humanScore++;
            }
            else{
                div.textContent = "Draw!";
            }
            break;
        }

        case "paper":{
            if (comp_choice == "rock"){
                div.textContent = "You win, paper beats rock!";
                humanScore++
            }
            else if(comp_choice == "scissors"){
                div.textContent = "You lose, scissors beats paper.";
                compScore++;
            }
            else{
                div.textContent = "Draw!";
            }
            break;

        }

        case "scissors":{
            if (comp_choice == "rock"){
                div.textContent = "You lost, rock beats scissors!";
                compScore++;
            }
            else if(comp_choice == "scissors"){
                div.textContent = "Draw";
            }
            else{
                div.textContent = "You win, scissors beats paper";
                humanScore++;
            }
            break;
        }
    }
    score.textContent = `You : ${humanScore}\n
                         Computer : ${compScore}`; 
    if(compScore >= 5){
        div.textContent = "Computer Won!";
        compScore = 0;
    }
    else if(humanScore >= 5){
        div.textContent = "You Won!";
        humanScore = 0;
    }

}





