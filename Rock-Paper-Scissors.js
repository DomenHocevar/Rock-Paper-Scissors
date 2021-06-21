

let types = ["rock", "paper", "scissors"];
let capitalTypes = ["Rock", "Paper", "Scissors"];

let wantedRounds;
let roundsPlayed;
let playerScore;
let computerScore;

let currentResultDisplayText;

function toggleGameScore(on) {
    const gameScore = document.querySelector("#gameScore");
    if (on)
    {
        gameScore.style.display = "block";
    } else
    {
        gameScore.style.display = "none";
    }
}

function toggleSection (wanted) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => 
    {
        if (section.id == wanted)
        {
            section.style.display = "block";

        } else
        {
            section.style.display = "none";
        }
    });
}

function ending() {
    toggleSection("ending");
    toggleGameScore(true);

    const endingMessage = document.querySelector("#endingMessage");
    if (playerScore > computerScore)
    {
        endingMessage.textContent = "You win the game!";
    }
    if (playerScore == computerScore)
    {
        endingMessage.textContent = "It's a tie game!";
    }
    if (playerScore < computerScore)
    {
        endingMessage.textContent = "You lose the game!";
    }
}



function setScore()
{
    let playerSpan = document.querySelector("#scorePlayer");
    let computerSpan = document.querySelector("#scoreComputer");
    playerSpan.innerHTML = playerScore;
    computerSpan.innerHTML = computerScore;
}

function playRound(playerSelection, computerSelection)
{
    let ind1 = -1;
    let ind2 = -1;
    for (i = 0; i < 3; i++)
    {
        if (types[i] == playerSelection)
        {
            ind1 = i;
        }
        if (types[i] == computerSelection)
        {
            ind2 = i;
        }
    }

    roundsPlayed++;

    if (ind1 == ind2)
    {
        return "A tie!";
    }
    if ((ind1 + 1) % 3 == ind2)
    {
        computerScore++;
        return "You lose! " + capitalTypes[ind2] + " beats " + types[ind1] + ".";
    }
    if ((ind2 + 1) % 3 == ind1)
    {
        playerScore++;
        return "You win! " + capitalTypes[ind1] + " beats " + types[ind2] + ".";
    }
}

function getComputerSelection() {
    let choice = Math.floor(Math.random() * 3);
    return types[choice];
}


function afterErasing() {
    console.log(this.style.opacity);
    console.log(this.style.transition);
    if (this.style.opacity == "0")
    {
        
        this.style.transition = "opacity 1s";
        this.style.opacity = "1";
        this.textContent = currentResultDisplayText;
    }
}

function handlePlayerSelection(e) {
    let playerSelection = this.textContent;
    playerSelection = playerSelection.toLowerCase();

    let computerSelection = getComputerSelection();

    let result = playRound(playerSelection, computerSelection);
    setScore();
    const resultDisplay = document.querySelector("#resultDisplay");
    currentResultDisplayText = result;
    resultDisplay.style.transition = "opacity 0.000001s";
    resultDisplay.style.opacity = "0";
    
    

    
    
    

    if (roundsPlayed == wantedRounds)
    {
        ending();
    }
}

function game() {

    toggleSection("game");
    toggleGameScore(true);

    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    const resultDisplay = document.querySelector("#resultDisplay");
    currentResultDisplayText = "";
    resultDisplay.textContent = currentResultDisplayText;

    const buttons = document.querySelectorAll(".choiceButton");
    buttons.forEach(button => button.addEventListener("click", handlePlayerSelection));
}


function handleSubmitRounds(e)
{
    const textField = document.querySelector("#roundsNumber");
    let num = Number(textField.value);
    
  

    if (!textField.value || Number.isNaN(num))
    {
        alert("That's not a number!");
    } else
    {
        textField.placeholder = "number of rounds";
        wantedRounds = num;
        game();
    }
}



function setup() {
    toggleSection("setup");
    toggleGameScore(false);

    const textField = document.querySelector("#roundsNumber");
    const button = document.querySelector("#roundsNumberSubmit");
    button.addEventListener("click", handleSubmitRounds);

    const resultDisplay = document.querySelector("#resultDisplay");
    resultDisplay.addEventListener("transitionend", afterErasing);
}

setup();





