var player1Box = document.getElementById("player1");
var player2Box = document.getElementById("player2");
var player3Box = document.getElementById("player3");
var player4Box = document.getElementById("player4");

var player1Health = 300;
var player2Health = 300;
var player3Health = 300;
var player4Health = 300;

var player1HealthDisplay = document.getElementById("player1Health");
var player2HealthDisplay = document.getElementById("player2Health");
var player3HealthDisplay = document.getElementById("player3Health");
var player4HealthDisplay = document.getElementById("player4Health");

var player1Mana = 100;
var player2Mana = 100;
var player3Mana = 100;
var player4Mana = 100;

var player1ManaDisplay = document.getElementById("player1Mana");
var player2ManaDisplay = document.getElementById("player2Mana");
var player3ManaDisplay = document.getElementById("player3Mana");
var player4ManaDisplay = document.getElementById("player4Mana");

var monster1 = document.getElementById("wraith");
var monster2 = document.getElementById("minotaur");
var monster3 = document.getElementById("golem");

var monster1Health = 300;
var monster2Health = 300;
var monster3Health = 300;

var monster1IsDead = false;
var monster2IsDead = false;
var monster3IsDead = false;

var buttonAttack = document.getElementById("attack");
var buttonDefense = document.getElementById("defense");
var buttonSpecial = document.getElementById("special");

var tooltipBox = document.getElementById("tooltip");
var tooltipTitle = document.getElementById("tooltipTitle");
var tooltipText = document.getElementById("tooltipText");

var player1ChoiceIsSpecial = false;
var player2ChoiceIsSpecial = false;

var mainDisplay = document.getElementById("mainDisplay");
var player = 0;

var player1Defense = 30;
var player2Defense = 10;
var player3Defense = 15;
var player4Defense = 20;

var player1IsDefended = false;
var player2IsDefended = false;
var player3IsDefended = false;
var player4IsDefended = false;

var player1IsDead = false;
var player2IsDead = false;
var player3IsDead = false;
var player4IsDead = false;

var poisonCounter = 0;
var poisonTarget;


// Evènements -----------------------------------------------------------------

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


// Fonctions ------------------------------------------------------------------

// Boutons

function addButtonEventListeners()
{
    buttonAttack.addEventListener("click", attackButtonEventListener);
    buttonDefense.addEventListener("click", defenseButtonEventListener);
    buttonSpecial.addEventListener("click", specialButtonEventListener);
}

function attackButtonEventListener()
{
    removeButtonEventListeners();
    addMonsterChoiceEventListeners();
    mainDisplay.innerHTML = "Choisissez un monstre à attaquer";
    console.log("atk");
}

function defenseButtonEventListener()
{
    playerDefense();
    console.log("def");
}

function specialButtonEventListener()
{
    removeButtonEventListeners();

    switch (player)
    {
        case 1:
            player1ChoiceIsSpecial = true;
            addMonsterChoiceEventListeners();
            mainDisplay.innerHTML = "Choisissez un monstre à fracasser";
            break;

        case 2:
            player2ChoiceIsSpecial = true;
            addMonsterChoiceEventListeners();
            mainDisplay.innerHTML = "Choisissez un monstre à empoisonner";
            break;

        case 3:
            player3Special();
            break;

        case 4:
            player4Special();
            break;
    }

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
    monster1.addEventListener("click", monsterChoice1EventListener);
    monster2.addEventListener("click", monsterChoice2EventListener);
    monster3.addEventListener("click", monsterChoice3EventListener);
}

function monsterChoice1EventListener()
{
    if (player1ChoiceIsSpecial)
    {
        player1Special(1)
    }
    else if (player2ChoiceIsSpecial)
    {
        player2Special(1)
    }
    else
    {
        playerAttack(1);
    }
}

function monsterChoice2EventListener()
{
    if (player1ChoiceIsSpecial)
    {
        player1Special(2)
    }
    else if (player2ChoiceIsSpecial)
    {
        player2Special(2)
    }
    else
    {
        playerAttack(2);
    }
}

function monsterChoice3EventListener()
{
    if (player1ChoiceIsSpecial)
    {
        player1Special(3)
    }
    else if (player2ChoiceIsSpecial)
    {
        player2Special(3)
    }
    else
    {
        playerAttack(3);
    }
}

function removeMonsterChoiceEventListeners()
{
    monster1.removeEventListener("click", monsterChoice1EventListener);
    monster2.removeEventListener("click", monsterChoice2EventListener);
    monster3.removeEventListener("click", monsterChoice3EventListener);
}

// Actions du joueur

function playerAttack(monster)
{
    switch (monster)
    {
        case 1:
            monster1Health -= 60;
            tooltipText.innerHTML = "Santé : " + monster1Health + " / 300";
            break;

        case 2:
            monster2Health -= 60;
            tooltipText.innerHTML = "Santé : " + monster2Health + " / 300";
            break;

        case 3:
            monster3Health -= 60;
            tooltipText.innerHTML = "Santé : " + monster3Health + " / 300";
            break;
    }

    removeMonsterChoiceEventListeners();
    switchPlayer();
    console.log(player, monster);
}

function playerDefense()
{
    switch (player)
    {
        case 1:
            player1IsDefended = true;
            break;

        case 2:
            player2IsDefended = true;
            break;

        case 3:
            player3IsDefended = true;
            break;

        case 4:
            player4IsDefended = true;
            break;
    }

    switchPlayer()
}

function player1Special(monster) // Attaque puissante
{
    switch (monster)
    {
        case 1:
            monster1Health -= 100;
            tooltipText.innerHTML = "Santé : " + monster1Health + " / 300";
            break;

        case 2:
            monster2Health -= 100;
            tooltipText.innerHTML = "Santé : " + monster2Health + " / 300";
            break;

        case 3:
            monster3Health -= 100;
            tooltipText.innerHTML = "Santé : " + monster3Health + " / 300";
            break;
    }

    player1Mana -= 50;
    player1ManaDisplay.innerHTML = "Mana : " + player1Mana + " / 100";
    player1ChoiceIsSpecial = false;

    removeMonsterChoiceEventListeners();
    switchPlayer();
    console.log(player, monster);
}

function player2Special(monster) // Poison
{
    poisonCounter = 3;
    poisonTarget = monster;

    player2Mana -= 50;
    player2ManaDisplay.innerHTML = "Mana : " + player2Mana + " / 100";
    player2ChoiceIsSpecial = false;

    removeMonsterChoiceEventListeners();
    switchPlayer();
    console.log(player, monster);
}

function player3Special() // Salve
{
    monster1Health -= 30;
    monster2Health -= 30;
    monster3Health -= 30;

    player3Mana -= 50;
    player3ManaDisplay.innerHTML = "Mana : " + player3Mana + " / 100";

    switchPlayer();
}

function player4Special() // Soin
{
    let lowestPlayerHealth = player4Health;
    let lowestPlayerHealthNum = 4;

    if (player3Health > 0 && player3Health <= lowestPlayerHealth)
    {
        lowestPlayerHealth = player3Health;
        lowestPlayerHealthNum = 3;
    }
    if (player2Health > 0 && player2Health <= lowestPlayerHealth)
    {
        lowestPlayerHealth = player2Health;
        lowestPlayerHealthNum = 2;
    }
    if (player1Health > 0 && player1Health <= lowestPlayerHealth)
    {
        lowestPlayerHealth = player1Health;
        lowestPlayerHealthNum = 1;
    }

    switch (lowestPlayerHealthNum)
    {
        case 1:
            player1Health += 60

            if (player1Health > 300)
            {
                player1Health = 300;
            }

            player1HealthDisplay.innerHTML = "Santé : " + player1Health + " / 300";
            break;

        case 2:
            player2Health += 60

            if (player2Health > 300)
            {
                player2Health = 300;
            }

            player2HealthDisplay.innerHTML = "Santé : " + player2Health + " / 300";
            break;

        case 3:
            player3Health += 60

            if (player3Health > 300)
            {
                player3Health = 300;
            }

            player3HealthDisplay.innerHTML = "Santé : " + player3Health + " / 300";
            break;

        case 4:
            player4Health += 60

            if (player4Health > 300)
            {
                player4Health = 300;
            }

            player4HealthDisplay.innerHTML = "Santé : " + player4Health + " / 300";
            break;
    }

    player4Mana -= 50;
    player4ManaDisplay.innerHTML = "Mana : " + player4Mana + " / 100";

    switchPlayer();
}

function playerPoison()
{
    poisonCounter -= 1;

    switch (poisonTarget)
    {
        case 1:
            if (monster1IsDead)
            {
                return;
            }
            monster1Health -= 30;
            mainDisplay.innerHTML = "Le poison inflige 30 de dégâts au spectre ; "  + poisonCounter + " tour(s) restant(s)";
            break;

        case 2:
            if (monster2IsDead)
            {
                return;
            }
            monster2Health -= 30;
            mainDisplay.innerHTML = "Le poison inflige 30 de dégâts au minotaure ; "  + poisonCounter + " tour(s) restant(s)";
            break;

        case 3:
            if (monster3IsDead)
            {
                return;
            }
            monster3Health -= 30;
            mainDisplay.innerHTML = "Le poison inflige 30 de dégâts au golem ; "  + poisonCounter + " tour(s) restant(s)";
            break;
    }

    if (poisonCounter <= 0)
    {
        poisonTarget = 0;
    }
}

function switchPlayer()
{
    if (!checkPlayerWin())
    {
        player++;

        if (player > 4)
        {
            player = 0;
        }

        switch (player)
        {
            case 1:
                if (player1IsDead)
                {
                    switchPlayer();
                    return;
                }
                player1Box.style.borderColor = "#fa0";
                mainDisplay.innerHTML = "Choisissez l'action du guerrier";
                buttonSpecial.innerHTML = "Attaque puissante";
                addButtonEventListeners();
                break;

            case 2:
                if (!player1IsDead)
                {
                    player1Box.style.borderColor = "white";
                }
                if (player2IsDead)
                {
                    switchPlayer();
                    return;
                }
                player2Box.style.borderColor = "#fa0";
                mainDisplay.innerHTML = "Choisissez l'action du mage";
                buttonSpecial.innerHTML = "Poison";
                addButtonEventListeners();
                break;

            case 3:
                if (!player2IsDead)
                {
                    player2Box.style.borderColor = "white";
                }
                if (player3IsDead)
                {
                    switchPlayer();
                    return;
                }
                player3Box.style.borderColor = "#fa0";
                mainDisplay.innerHTML = "Choisissez l'action de l'archer";
                buttonSpecial.innerHTML = "Salve";
                addButtonEventListeners();
                break;

            case 4:
                if (!player3IsDead)
                {
                    player3Box.style.borderColor = "white";
                }
                if (player4IsDead)
                {
                    switchPlayer();
                    return;
                }
                player4Box.style.borderColor = "#fa0";
                mainDisplay.innerHTML = "Choisissez l'action du guérisseur";
                buttonSpecial.innerHTML = "Soin";
                addButtonEventListeners();
                break;

            case 0:
                if (!player4IsDead)
                {
                    player4Box.style.borderColor = "white";
                }
                monsterAttackMain();
                break;
        }
    }
}

// Vérifications de victoire

function checkMonsterDeath(monster, monsterHealth)
{
    if (monsterHealth <= 0)
    {
        monster.style.visibility = "hidden";
        return true;
    }

    return false;
}

function checkPlayerWin()
{
    monster1IsDead = checkMonsterDeath(monster1, monster1Health);
    monster2IsDead = checkMonsterDeath(monster2, monster2Health);
    monster3IsDead = checkMonsterDeath(monster3, monster3Health);

    if (monster1IsDead && monster2IsDead && monster3IsDead)
    {
        buttonAttack.disabled = true;
        buttonDefense.disabled = true;
        buttonSpecial.disabled = true;
        mainDisplay.innerHTML = "Vous avez gagné ! Félicitations !";
        return true;
    }

    return false;
}

function checkPlayerDeath(playerHealth, playerHealthDisplay, playerBox)
{
    if (playerHealth <= 0)
    {
        playerHealthDisplay.innerHTML = "Santé : 0 / 300";
        playerBox.style.borderColor = "darkred";
        return true;
    }

    return false;
}

function checkMonsterWin()
{
    player1IsDead = checkPlayerDeath(player1Health, player1HealthDisplay, player1Box);
    player2IsDead = checkPlayerDeath(player2Health, player2HealthDisplay, player2Box);
    player3IsDead = checkPlayerDeath(player3Health, player3HealthDisplay, player3Box);
    player4IsDead = checkPlayerDeath(player4Health, player4HealthDisplay, player4Box);

    if (player1IsDead && player2IsDead && player3IsDead && player4IsDead)
    {
        buttonAttack.disabled = true;
        buttonDefense.disabled = true;
        buttonSpecial.disabled = true;
        mainDisplay.innerHTML = "Vous avez perdu. Pfff...";
        return true;
    }

    return false;
}

// Actions des monstres

async function monsterAttackMain()
{
    removeButtonEventListeners();

    if (!monster1IsDead)
    {
        monsterAttackSequence("spectre");
        checkMonsterWin();
        await new Promise(r => setTimeout(r, 3000));
    }


    if (!monster2IsDead)
    {
        monsterAttackSequence("minotaure");
        checkMonsterWin();
        await new Promise(r => setTimeout(r, 3000));
    }


    if (!monster3IsDead)
    {
        monsterAttackSequence("golem");
        checkMonsterWin();
        await new Promise(r => setTimeout(r, 3000));
    }


    if (poisonCounter > 0 && !checkMonsterWin())
    {
        playerPoison();
        await new Promise(r => setTimeout(r, 3000));
    }

    player1IsDefended = player2IsDefended = player3IsDefended = player4IsDefended = false;

    switchPlayer();
    addButtonEventListeners();
}

function monsterAttackSequence(monsterName)
{
    let randomPlayer = Math.floor(Math.random() * 4 + 1);
    let monsterAttack;

    if (!checkMonsterWin())
    {
        switch (randomPlayer)
        {
            case 1:
                if (player1IsDead)
                {
                    monsterAttackSequence(monsterName);
                    return;
                }
                if (!player1IsDefended)
                {
                    monsterAttack = 200 - player1Defense;
                    player1Health -= monsterAttack;
                    player1HealthDisplay.innerHTML = "Santé : " + player1Health + " / 300";
                    mainDisplay.innerHTML = "Le " + monsterName + " inflige " + monsterAttack + " de dommages au guerrier";
                }
                else
                {
                    mainDisplay.innerHTML = "L'attaque du " + monsterName + " a échoué";
                }
                break;

            case 2:
                if (player2IsDead)
                {
                    monsterAttackSequence(monsterName);
                    return;
                }
                if (!player2IsDefended)
                {
                    monsterAttack = 200 - player2Defense;
                    player2Health -= monsterAttack;
                    player2HealthDisplay.innerHTML = "Santé : " + player2Health + " / 300";
                    mainDisplay.innerHTML = "Le " + monsterName + " inflige " + monsterAttack + " de dommages au mage";
                }
                else
                {
                    mainDisplay.innerHTML = "L'attaque du " + monsterName + " a échoué";
                }
                break;

            case 3:
                if (player3IsDead)
                {
                    monsterAttackSequence(monsterName);
                    return;
                }
                if (!player3IsDefended)
                {
                    monsterAttack = 200 - player3Defense;
                    player3Health -= monsterAttack;
                    player3HealthDisplay.innerHTML = "Santé : " + player3Health + " / 300";
                    mainDisplay.innerHTML = "Le " + monsterName + " inflige " + monsterAttack + " de dommages à l'archer";
                }
                else
                {
                    mainDisplay.innerHTML = "L'attaque du " + monsterName + " a échoué";
                }
                break;

            case 4:
                if (player4IsDead)
                {
                    monsterAttackSequence(monsterName);
                    return;
                }
                if (!player4IsDefended)
                {
                    monsterAttack = 200 - player4Defense;
                    player4Health -= monsterAttack;
                    player4HealthDisplay.innerHTML = "Santé : " + player4Health + " / 300";
                    mainDisplay.innerHTML = "Le " + monsterName + " inflige " + monsterAttack + " de dommages au guérisseur";
                }
                else
                {
                    mainDisplay.innerHTML = "L'attaque du " + monsterName + " a échoué";
                }
                break;
        }
    }
}


// Programme principal --------------------------------------------------------

switchPlayer();
addButtonEventListeners();