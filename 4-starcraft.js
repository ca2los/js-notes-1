'use strict'
// StarCraft
// Retrieve units statistics
// Confront units and retrieve updated statistics

const starCraft = {
    firebat: [
        {
            name: 'firebat',
            health: 50,
            armor: 1,
            attack: {
                air: 0,
                ground: 8,
            },
            attack_range: 2,
            sight: 7,
            unit_type: 'ground'
        }
    ],
    marine: [
        {
            name: 'marine',
            health: 40,
            armor: 0,
            attack: {
                air: 6,
                ground: 6,
            },
            attack_range: 4,
            sight: 6,
            unit_type: 'ground'
        }
    ]
}

// Confronting Units
let soldier_a = starCraft.firebat
let soldier_b = starCraft.marine
let start_battle = true

// Defining New Array
const player_a = soldier_a.map(item => {
    const container = {}
    container.name = item.name
    container.health = item.health
    return container
})
const player_b = soldier_b.map(item => {
    const container = {}
    container.name = item.name
    container.health = item.health
    return container
})
// ToDo: Tomorrow pass more values to player_a and player_b to interact with groundBattle()
console.log(player_a, player_b)

function groundBattle(groundUnitA, groundUnitB) {
    // Try to map() with player_a and player_b new arrays.
    if (groundUnitA[0].sight > groundUnitB[0].sight) {
        console.log(`Stage #2: ${soldier_a[0].unit_type.toUpperCase()} and ${soldier_b[0].unit_type.toUpperCase()} battle type.`)
        while (true) {
            if (groundUnitA[0].health <= 0) {
                console.log(`${groundUnitB[0].name.toUpperCase()} with ${groundUnitB[0].health} health points is the winner.`)
                console.log(`${groundUnitA[0].name.toUpperCase()} with ${groundUnitA[0].health} remaining health points is the loser.`)
                break
            } else if (groundUnitB[0].health <= 0) {
                console.log(`Stage #3: Winner is ${groundUnitA[0].name.toUpperCase()} with ${groundUnitA[0].health} remaining health points.`)
                console.log(`Stage #3: Loser is ${groundUnitB[0].name.toUpperCase()} with ${groundUnitB[0].health} remaining health points.`)
                break
            } else {
                console.log(groundUnitA)
                console.log(`Fighting! ${groundUnitA[0].name.toUpperCase()} health is ${groundUnitA[0].health} and ${groundUnitB[0].name.toUpperCase()} health is ${groundUnitB[0].health} points.`)
            }
            groundUnitA[0].health = groundUnitA[0].health - groundUnitB[0].attack.ground
            groundUnitB[0].health = groundUnitB[0].health - groundUnitA[0].attack.ground
        }
    }
    if (groundUnitB[0].sight > groundUnitA[0].sight) {}
    if (groundUnitA[0].sight === groundUnitB[0].sight) {}
    // Try air units
}

function battleType() {
    if (soldier_a[0].unit_type && soldier_b[0].unit_type === 'ground') {
        console.log(`Stage #1: ${soldier_a[0].name.toUpperCase()} and ${soldier_b[0].name.toUpperCase()} units selected.`)
        groundBattle(soldier_a, soldier_b)
    } else {
        console.log('No soldiers available.')
    }
}

if (start_battle) {
    battleType()
} else {
    console.log('No battle.')
}
// Arrow functions to execute battle actions