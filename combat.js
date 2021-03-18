let combatData = {
    attack: 1,
    defense: 1,
    health: 10,
    attackMultiplier: 1,
    defenseMultiplier: 1,
    healthMultiplier: 5
}
let upgradeCost = {
    attackCost: 10,
    defenseCost: 10,
    healthCost: 20
}

function incrementAttack() {
    combatData.attack += combatData.attackMultiplier
}

function incrementDefense() {
    combatData.defense += combatData.defenseMultiplier
}

function incrementHealth() {
    combatData.health += combatData.healthMultiplier
}

function updateAttack() {
    document.getElementById("attackStat").innerHTML = "Attack: " + combatData.attack
    document.getElementById("upgradeAttack").innerHTML = "Improve Attack. Cost: " + upgradeCost.attackCost
}

function updateDefense() {
    document.getElementById("defenseStat").innerHTML = "Defense: " + combatData.defense
    document.getElementById("upgradeDefense").innerHTML = "Improve Defense. Cost: " + upgradeCost.defenseCost
}

function updateHealth() {
    document.getElementById("healthStat").innerHTML = "Health: " + combatData.health
    document.getElementById("upgradeHealth").innerHTML = "Improve Health. Cost: " + upgradeCost.healthCost
}

function upgradeAttack() {
    if (coinData.coins < upgradeCost.attackCost) {
        console.log("Not enough coins!")
    }
    else {
        coinData.coins -= upgradeCost.attackCost
        incrementAttack()
        upgradeCost.attackCost *= 2
        combatData.attackMultiplier += 1
        updateAttack()
    }

}

function upgradeDefense() {
    if (coinData.coins < upgradeCost.defenseCost) {
        console.log("Not enough coins!")
    }
    else {
        coinData.coins -= upgradeCost.defenseCost
        incrementDefense()
        upgradeCost.defenseCost *= 2
        combatData.defenseMultiplier += 1
        updateDefense()
    }

}

function upgradeHealth() {
    if (coinData.coins < upgradeCost.healthCost) {
        console.log("Not enough coins!")
    }
    else {
        coinData.coins -= upgradeCost.healthCost
        incrementHealth()
        upgradeCost.healthCost *= 2
        combatData.healthMultiplier += 1
        updateHealth()
    }

}


