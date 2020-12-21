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

var monster1 = document.getElementById("wraith");
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

var playerChoice;

var mainDisplay = document.getElementById("mainDisplay");
var player = 0;

var player1Defense = 0.3;
var player2Defense = 0.1;
var player3Defense = 0.15;
var player4Defense = 0.2;

var poisonCounter = 0;

var tooltipBox = document.getElementById("tooltip");


// Evènements -------------------------------------------------------

monster1.onmouseover = function()
{
    monster1.src = "img\\wraith_hover.png";
    tooltipTitle.innerHTML = "Spectre";
    tooltipText.innerHTML = "Santé : " + monster1Health + " / 300";
    tooltipBox.style.visibility = "visible";

    monster1.onmouseout = function()
    {
        monster1.src = "img\\wraith.png";
        tooltipBox.style.visibility = "hidden";
    }
}


monster2.onmouseover = function()
{
    monster2.src = "img\\minotaur_hover.png";
    tooltipTitle.innerHTML = "Minotaure";
    tooltipText.innerHTML = "Santé : " + monster2Health + " / 300";
    tooltipBox.style.visibility = "visible";

    monster2.onmouseout = function()
    {
        monster2.src = "img\\minotaur.png";
        tooltipBox.style.visibility = "hidden";
    }
}

monster3.onmouseover = function()
{
    monster3.src = "img\\golem_hover.png";
    tooltipTitle.innerHTML = "Golem";
    tooltipText.innerHTML = "Santé : " + monster3Health + " / 300";
    tooltipBox.style.visibility = "visible";

    monster3.onmouseout = function()
    {
        monster3.src = "img\\golem.png";
        tooltipBox.style.visibility = "hidden";
    }
}


// Fonctions --------------------------------------------------------

// Boutons

function addButtonEventListeners()
{
    buttonAttack.addEventListener("click", attackButtonEventListener);
    buttonDefense.addEventListener("click", defenseButtonEventListener);
    buttonSpecial.addEventListener("click", specialButtonEventListener);
}

function attackButtonEventListener()
{
    addMonsterChoiceEventListeners();
    removeButtonEventListeners();
    mainDisplay.innerHTML = "Choisissez un monstre à attaquer";
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

// Choix de monstre

function addMonsterChoiceEventListeners()
{
    monster1.addEventListener("click", monsterChoice1);
    monster2.addEventListener("click", monsterChoice2);
    monster3.addEventListener("click", monsterChoice3);
}

async function monsterChoiceMain(monster)
{
    switch (player)
    {
        case 1:
            playerAttack("Le guerrier", monster);
            break;

        case 2:
            playerAttack("Le mage", monster);
            break;

        case 3:
            playerAttack("L'archer", monster);
            break;

        case 4:
            playerAttack("Le guérisseur", monster);
            break;
    }

    removeMonsterChoiceEventListeners();
    console.log(player + monster);
    switchPlayer();
    addButtonEventListeners();
}

function monsterChoice1()
{
    monsterChoiceMain(1);
}

function monsterChoice2()
{
    monsterChoiceMain(2);
}

function monsterChoice3()
{
    monsterChoiceMain(3);
}

function removeMonsterChoiceEventListeners()
{
    monster1.removeEventListener("click", monsterChoice1);
    monster2.removeEventListener("click", monsterChoice2);
    monster3.removeEventListener("click", monsterChoice3);
}

// Actions du joueur

function playerAttack(playerName, monster)
{
    switch (monster)
    {
        case 1:
            monster1Health -= 60;
            mainDisplay.innerHtml = playerName + " inflige 60 de dommages au spectre";
            break;

        case 2:
            monster2Health -= 60;
            mainDisplay.innerHtml = playerName + " inflige 60 de dommages au minotaure";
            break;

        case 3:
            monster3Health -= 60;
            mainDisplay.innerHtml = playerName + " inflige 60 de dommages au golem";
            break;
    }
}

function switchPlayer()
{
    player++;

    if (player > 4)
    {
        player = 0;
    }

    switch (player)
    {
        case 1:
            player1Box.style.borderColor = "#fa0";
            mainDisplay.innerHTML = "Choisissez l'action du guerrier";
            buttonSpecial.innerHTML = "Attaque puissante";
            break;

        case 2:
            player1Box.style.borderColor = "white";
            player2Box.style.borderColor = "#fa0";
            mainDisplay.innerHTML = "Choisissez l'action du mage";
            buttonSpecial.innerHTML = "Magie";
            break;

        case 3:
            player2Box.style.borderColor = "white";
            player3Box.style.borderColor = "#fa0";
            mainDisplay.innerHTML = "Choisissez l'action de l'archer";
            buttonSpecial.innerHTML = "Flèche empoisonnée";
            break;

        case 4:
            player3Box.style.borderColor = "white";
            player4Box.style.borderColor = "#fa0";
            mainDisplay.innerHTML = "Choisissez l'action du guérisseur";
            buttonSpecial.innerHTML = "Soin";
            break;

        case 0:
            player4Box.style.borderColor = "white";
            monsterAttackSequence();
    }
}

// Actions des monstres

function monsterAttack(monsterName)
{
    let randomPlayer = Math.floor(Math.random() * 4 + 1);
    let monsterAttack;

    switch (randomPlayer) {
        case 1:
            monsterAttack = Math.floor(30 * (1 - player1Defense));
            player1Health -= monsterAttack
            document.getElementById("player1Health").innerHTML = "Santé : " + player1Health + " / 300";
            mainDisplay.innerHTML = "Le " + monsterName + " inflige " + monsterAttack + " de dommages au guerrier";
            break;

        case 2:
            monsterAttack = Math.floor(30 * (1 - player2Defense));
            player2Health -= monsterAttack;
            document.getElementById("player2Health").innerHTML = "Santé : " + player2Health + " / 300";
            mainDisplay.innerHTML = "Le " + monsterName + " inflige " + monsterAttack + " de dommages au mage";
            break;

        case 3:
            monsterAttack = Math.floor(30 * (1 - player3Defense));
            player3Health -= monsterAttack;
            document.getElementById("player3Health").innerHTML = "Santé : " + player3Health + " / 300";
            mainDisplay.innerHTML = "Le " + monsterName + " inflige " + monsterAttack + " de dommages à l'archer";
            break;

        case 4:
            monsterAttack = Math.floor(30 * (1 - player4Defense));
            player4Health -= monsterAttack;
            document.getElementById("player4Health").innerHTML = "Santé : " + player4Health + " / 300";
            mainDisplay.innerHTML = "Le " + monsterName + " inflige " + monsterAttack + " de dommages au guérisseur";
            break;

        default:
            console.log("pb");
    }
}

async function monsterAttackSequence()
{
    monsterAttack("spectre");
    await new Promise(r => setTimeout(r, 3000));

    monsterAttack("minotaure");
    await new Promise(r => setTimeout(r, 3000));

    monsterAttack("golem");
    await new Promise(r => setTimeout(r, 3000));

    switchPlayer();
}


// Programme principal ----------------------------------------------

switchPlayer();
addButtonEventListeners();