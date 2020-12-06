/*var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player3 = document.getElementById("player3");
var player4 = document.getElementById("player4");

var player1Health = 300;
var player2Health = 300;
var player3Health = 300;
var player4Health = 300;

var player1Mana = 100;
var player2Mana = 100;
var player3Mana = 100;
var player4Mana = 100;*/


var monster1 = document.getElementById("skeleton");
var monster2 = document.getElementById("minotaur");
var monster3 = document.getElementById("golem");

var tooltipTitle = document.getElementById("tooltipTitle");
var tooltipText = document.getElementById("tooltipText");

var monster1Health = 300;
var monster2Health = 300;
var monster3Health = 300;


monster1.onmouseover = function()
{
    monster1.src = "img\\skeleton_selected.png";
    tooltipTitle.innerHTML = "Squelette";
    tooltipText.innerHTML = "Santé : " + monster1Health;
}

monster1.onmouseout = function()
{
    monster1.src = "img\\skeleton_idle.png";
    tooltipTitle.innerHTML = "Visez un monstre";
    tooltipText.innerHTML = "pour plus d'informations";
}

monster2.onmouseover = function()
{
    monster2.src = "img\\minotaur_selected.png";
    tooltipTitle.innerHTML = "Minotaure";
    tooltipText.innerHTML = "Santé : " + monster2Health;
}

monster2.onmouseout = function()
{
    monster2.src = "img\\minotaur_idle.png";
    tooltipTitle.innerHTML = "Visez un monstre";
    tooltipText.innerHTML = "pour plus d'informations";
}

monster3.onmouseover = function()
{
    monster3.src = "img\\golem_selected.png";
    tooltipTitle.innerHTML = "Golem";
    tooltipText.innerHTML = "Santé : " + monster3Health;
}

monster3.onmouseout = function()
{
    monster3.src = "img\\golem_idle.png";
    tooltipTitle.innerHTML = "Visez un monstre";
    tooltipText.innerHTML = "pour plus d'informations";
}