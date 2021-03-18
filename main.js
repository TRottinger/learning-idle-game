let coinData = {
    coins: 0,
    coinsMultiplier: 1,
    coinsForNextUpgrade: 10
}

function updateCoinsInInventory() {
    document.getElementById("coinsInInventory").innerHTML = "Coins: " + coinData.coins
}

function updateMultiplierButton() {
    document.getElementById("upgrade").innerHTML = "Raise Multiplier (Current:" + coinData.coinsMultiplier
        + "x) Cost: " + coinData.coinsForNextUpgrade
}

function incrementCoins() {
    coinData.coins += coinData.coinsMultiplier
    updateCoinsInInventory()
}

function incrementCoinMultiplier() {
    coinData.coinsMultiplier += 1
}

function incrementNextUpgradeCost() {
    coinData.coinsForNextUpgrade *= 2
}


function upgradeCoinMultiplier() {
    if (coinData.coins < coinData.coinsForNextUpgrade) {
        console.log("Not enough coins!")
    }
    else {
        coinData.coins -= coinData.coinsForNextUpgrade
        incrementNextUpgradeCost()
        incrementCoinMultiplier()
        updateMultiplierButton()
    }

}

window.setInterval(function() {
    incrementCoins()
}, 100)