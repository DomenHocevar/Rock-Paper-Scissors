

let types = ["rock", "paper", "scissors"];
let capitalTypes = ["Rock", "Paper", "Scissors"];

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

    if (ind1 == ind2)
    {
        return "A tie!";
    }
    if ((ind1 + 1) % 3 == ind2)
    {
        return "You lose! " + capitalTypes[ind2] + " beats " + types[ind1] + ".";
    }
    if ((ind2 + 1) % 3 == ind1)
    {
        return "You win! " + capitalTypes[ind1] + " beats " + types[ind2] + ".";
    }
}


function getPlayerSelection(firstTry)
{
    let mainQuestion = "Choose your weapon (either rock, paper or scissors)."
    let selection;
    if (firstTry)
    {
        selection = window.prompt(mainQuestion, "Rock");
    } else
    {
        selection = window.prompt("Invalid answer! " + mainQuestion, "Rock");
    }
    selection = selection.toLowerCase();

    return selection;
}

function getComputerSelection(params) {
    let choice = Math.floor(Math.random() * 3);
    return types[choice];
}

function validWeapon(weapon)
{
    
    for (i = 0; i < 3; i++)
    {
        if (types[i] == weapon) return true;
    }

    
    return false;
}

function game(params) {

    let wantedRounds = window.prompt("How many rounds do you want to play?", 3);
    for (round = 0; round < wantedRounds; round++)
    {   

        let firstTry = true;
        let playerSelection = getPlayerSelection(firstTry);
        
        while (!validWeapon(playerSelection))
        {
            firstTry = false;
            playerSelection = getPlayerSelection(firstTry);
        }

        let computerSelection = getComputerSelection()
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();