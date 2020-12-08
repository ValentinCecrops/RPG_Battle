var player1Box = document.getElementById("player1");
var player2Box = document.getElementById("player2");
var player3Box = document.getElementById("player3");
var player4Box = document.getElementById("player4");

var player1Health = 300;
var player2Health = 300;
var player3Health = 300;
var player4Health = 300;

var player1Mana = 100;
var player2Mana = 100;
var player3Mana = 100;
var player4Mana = 100;

var monster1 = document.getElementById("skeleton");
var monster2 = document.getElementById("minotaur");
var monster3 = document.getElementById("golem");

var monster1Health = 300;
var monster2Health = 300;
var monster3Health = 300;

var monster1Clicked = false;
var monster2Clicked = false;
var monster3Clicked = false;

var buttonAttack = document.getElementById("attack");
var buttonDefense = document.getElementById("defense");
var buttonSpecial = document.getElementById("special");

var tooltipTitle = document.getElementById("tooltipTitle");
var tooltipText = document.getElementById("tooltipText");

var player1Choice = "";
var player2Choice = "";
var player3Choice = "";
var player4Choice = "";

var gameOver = false;
var playerChose = false;

var mainDisplay = document.getElementById("mainDisplay")
var player = 1


// Evènements -------------------------------------------------------

monster1.onmouseover = function()
{
    monster1.src = "img\\skeleton_hover.png";
    monster1.style.cursor = "pointer";
    tooltipTitle.innerHTML = "Squelette";
    tooltipText.innerHTML = "Santé : " + monster1Health + " / 300";

    monster1.onmouseout = function()
    {
        monster1.src = "img\\skeleton.png";
        tooltipTitle.innerHTML = "Visez un monstre pour";
        tooltipText.innerHTML = "plus d'informations...";
    }
}


/*monster2.onmouseover = function()
{
    monster2.src = "img\\minotaur_hover.png";
    monster2.style.cursor = "pointer";
    tooltipTitle.innerHTML = "Minotaure";
    tooltipText.innerHTML = "Santé : " + monster2Health + " / 300";

    monster2.onclick = function()
    {
        monster2.src = "img\\minotaur_selected.png";
        monster2Clicked = true;
    }

    monster2.onmouseout = function()
    {
        if (monster2Clicked)
        {
            monster2.src = "img\\minotaur_selected.png";
        }
        else
        {
            monster2.src = "img\\minotaur.png";
            tooltipTitle.innerHTML = "Visez un monstre pour";
            tooltipText.innerHTML = "plus d'informations...";
        }
    }
}

monster3.onmouseover = function()
{
    monster3.src = "img\\golem_hover.png";
    monster3.style.cursor = "pointer";
    tooltipTitle.innerHTML = "Golem";
    tooltipText.innerHTML = "Santé : " + monster3Health + " / 300";

    monster3.onclick = function()
    {
        monster3.src = "img\\golem_selected.png";
        monster3Clicked = true;
    }

    monster3.onmouseout = function()
    {
        if (monster3Clicked)
        {
            monster3.src = "img\\golem_selected.png";
        }
        else
        {
            monster3.src = "img\\golem.png";
            tooltipTitle.innerHTML = "Visez un monstre pour";
            tooltipText.innerHTML = "plus d'informations...";
        }
    }
}*/


// Fonctions --------------------------------------------------------

function mainDisplayChoice(playerNum)
{
    mainDisplay.innerHTML = "Joueur " + playerNum + ", que voulez vous faire ?"
    player1Box.style.borderColor = "#fa0"
}

function attackButtonEventListener()
{
    console.log("atk");
    removeButtonEventListeners();
}

function defenseButtonEventListener()
{
    console.log("def");
    removeButtonEventListeners();
}

function specialButtonEventListener()
{
    console.log("spe");
    removeButtonEventListeners();
}

function removeButtonEventListeners()
{
    buttonAttack.removeEventListener("click", attackButtonEventListener);
    buttonDefense.removeEventListener("click", defenseButtonEventListener);
    buttonSpecial.removeEventListener("click", specialButtonEventListener);
}


while (!gameOver)
{
    mainDisplayChoice(player);

    buttonAttack.addEventListener("click", attackButtonEventListener);
    buttonDefense.addEventListener("click", defenseButtonEventListener);
    buttonSpecial.addEventListener("click", specialButtonEventListener);

    gameOver = true;
}