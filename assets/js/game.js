var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
}

fight();

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT or 'SKIP' to choose.");

//if player choses to fight, then fight
if (promptFight ==="fight" || promptFight ==="FIGHT") {
    //remove enemy's health bu subtracting the amount set in the player Attack
    enemyHealth = enemyHealth - playerAttack;
    console.log( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value of "enemyAttack" from "playerHealth" and use that result to update value in "playerHealth"
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    //Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

// if player choses to skip
} else if (promptFight === "skip" || promptFight ==="SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney -2;
    }
    else {
        fight();
    }
} else {
    window.alert("You need to pick a valid option. Try again!");
}