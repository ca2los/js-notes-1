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

// Start Battle
let start_battle = true

// Defining players
const player_a = starCraft.firebat
const player_b = starCraft.marine

function selected(player) {
    player = starCraft.player.map(item => {
        const container = {}
        container.name = item.name
        container.unit_type = item.unit_type
        container.health = item.health
        container.attack = item.attack.ground
        container.sight = item.sight
        // Try passing attack.air
        return container
    })
}
console.log(player_a, player_b)

function groundBattle(groundUnitA, groundUnitB) {
    // Try to map() with player_a and player_b new arrays.
    if (groundUnitA[0].sight > groundUnitB[0].sight) {
        console.log(`Stage #2: ${groundUnitA[0].unit_type.toUpperCase()} and ${groundUnitB[0].unit_type.toUpperCase()} battle type.`)
        while (true) {
            if (groundUnitA[0].health <= 0) {
                console.log(`Stage #3: Loser is ${groundUnitB[0].name.toUpperCase()} with ${groundUnitB[0].health} health points is the winner.`)
                console.log(`Stage #3: Winner is ${groundUnitA[0].name.toUpperCase()} ${groundUnitA[0].health} remaining health points is the loser.`)
                break
            } else if (groundUnitB[0].health <= 0) {
                console.log(`Stage #3: Winner is ${groundUnitA[0].name.toUpperCase()} with ${groundUnitA[0].health} health points is the winner`)
                console.log(`Stage #3: Loser is ${groundUnitB[0].name.toUpperCase()} with ${groundUnitB[0].health} remaining health points is the loser.`)
                break
            } else {
                console.log(groundUnitA)
                console.log(`Fighting! ${groundUnitA[0].name.toUpperCase()} health is ${groundUnitA[0].health} and ${groundUnitB[0].name.toUpperCase()} health is ${groundUnitB[0].health} points.`)
            }
            groundUnitA[0].health = groundUnitA[0].health - groundUnitB[0].attack.ground
            groundUnitB[0].health = groundUnitB[0].health - groundUnitA[0].attack.ground
            // The iteration is not under control
        }
    }
}

function battleType() {
    if (player_a[0].unit_type && player_b[0].unit_type === 'ground') {
        console.log(`Stage #1: Selected units -> ${player_a[0].name.toUpperCase()} and ${player_b[0].name.toUpperCase()}`)
        //groundBattle(player_a, player_b)
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