let levelData = {
    world: 1,
    zone: 1,
    level: 1
}

let monsterData = {
    attack: 1,
    defense: 1,
    health: 5,
    attackMultiplier: 1,
    defenseMultiplier: 1,
    healthMultiplier: 5
}

function upgradeMonster() {
    monsterData.attack += monsterData.attackMultiplier
    monsterData.defense += monsterData.defenseMultiplier
    monsterData.health += monsterData.healthMultiplier
}

function monsterDefeated() {
    if (levelData.level === 20) {
        levelData.level = 1
        levelData.zone++
        upgradeMonster()
    }
    if (levelData.zone === 10) {
        levelData.zone = 1
        levelData.world++
    }

}

