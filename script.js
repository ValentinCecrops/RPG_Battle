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
var playerChoice

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


monster2.onmouseover = function()
{
    monster2.src = "img\\minotaur_hover.png";
    monster2.style.cursor = "pointer";
    tooltipTitle.innerHTML = "Minotaure";
    tooltipText.innerHTML = "Santé : " + monster2Health + " / 300";

    monster2.onmouseout = function()
    {
        monster2.src = "img\\minotaur.png";
        tooltipTitle.innerHTML = "Visez un monstre pour";
        tooltipText.innerHTML = "plus d'informations...";
    }
}

monster3.onmouseover = function()
{
    monster3.src = "img\\golem_hover.png";
    monster3.style.cursor = "pointer";
    tooltipTitle.innerHTML = "Golem";
    tooltipText.innerHTML = "Santé : " + monster3Health + " / 300";

    monster3.onmouseout = function()
    {
        monster3.src = "img\\golem.png";
        tooltipTitle.innerHTML = "Visez un monstre pour";
        tooltipText.innerHTML = "plus d'informations...";
    }
}


// Fonctions --------------------------------------------------------

function mainDisplayChoice(playerNum)
{
    mainDisplay.innerHTML = "Joueur " + playerNum + ", que voulez vous faire ?"
    player1Box.style.borderColor = "#fa0"
}

function attackButtonEventListener()
{
    monsterChoiceEL();
    removeButtonEventListeners();
    console.log("atk");
}

function defenseButtonEventListener()
{
    removeButtonEventListeners();
    console.log("def");
}

function specialButtonEventListener()
{
    removeButtonEventListeners();
    console.log("spe");
}

function removeButtonEventListeners()
{
    buttonAttack.removeEventListener("click", attackButtonEventListener);
    buttonDefense.removeEventListener("click", defenseButtonEventListener);
    buttonSpecial.removeEventListener("click", specialButtonEventListener);
}

function monsterChoiceEL()
{
    monster1.addEventListener("click", monsterChoice1);
    monster2.addEventListener("click", monsterChoice2);
    monster3.addEventListener("click", monsterChoice3);
}

function removeMonsterChoiceEL()
{
    monster1.removeEventListener("click", monsterChoice1);
    monster2.removeEventListener("click", monsterChoice2);
    monster3.removeEventListener("click", monsterChoice3);
}

function monsterChoice1()
{
    if (player === 1)
    {
        player1Choice = "monster1";
    }
    else if (player === 2)
    {
        player2Choice = "monster1";
    }
    else if (player === 3)
    {
        player3Choice = "monster1";
    }
    else if (player === 4)
    {
        player4Choice = "monster1";
    }
    removeMonsterChoiceEL();
    console.log("m1");
}

function monsterChoice2()
{
    if (player === 1)
    {
        player1Choice = "monster2";
    }
    else if (player === 2)
    {
        player2Choice = "monster2";
    }
    else if (player === 3)
    {
        player3Choice = "monster2";
    }
    else if (player === 4)
    {
        player4Choice = "monster2";
    }
    removeMonsterChoiceEL();
    console.log("m2");
}

function monsterChoice3()
{
    if (player === 1)
    {
        player1Choice = "monster3";
    }
    else if (player === 2)
    {
        player2Choice = "monster3";
    }
    else if (player === 3)
    {
        player3Choice = "monster3";
    }
    else if (player === 4)
    {
        player4Choice = "monster3";
    }
    removeMonsterChoiceEL();
    console.log("m3");
}

function playerAttack() {
    
}

function switchPlayer()
{
    player++
    if (player > 4)
    {
        player = 1
    }
}



mainDisplayChoice(player);


buttonAttack.addEventListener("click", attackButtonEventListener);
buttonDefense.addEventListener("click", defenseButtonEventListener);
buttonSpecial.addEventListener("click", specialButtonEventListener);