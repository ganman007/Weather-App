//ROCK ,PAPER, SCISSORS

const choices = ["rock","paper","scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");

let playerScore = 0;
let computerScore = 0;

function playgame(playerchoice){

    const computerchoice = choices[Math.floor(Math.random()*3)];
    
    let result = "";

    if (playerchoice === computerchoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerchoice === "scissors") ? "You Win!":"You Lose!";
                break;
            case "paper":
                result = (computerchoice === "rock") ? "You Win!":"You Lose!";
                break;
            case "scissors":
                result = (computerchoice === "paper") ? "You Win!":"You Lose!";
                break;
        }
    }
    playerdisplay.textContent = `PLAYER: ${playerchoice}`;
    computerdisplay.textContent = `COMPUTER: ${computerchoice}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove("greentext","redtext");
    
    switch(result){
        case "You Win!":
            resultdisplay.classList.add("greentext");
            playerScore++;
            playerscoredisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultdisplay.classList.add("redtext");
            computerScore++;
            computerscoredisplay.textContent = computerScore;
            break;

    }


}