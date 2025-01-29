'use strict'
// StarCraft
// Retrieve units statistics
// Confront units and retrieve updated statistics

const starCraft = [
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
    },
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

// Confronting Units
let soldier_a = starCraft[0]
let soldier_b = starCraft[1]
let start_battle = true

function groundBattle(groundUnitA, groundUnitB) {
    if (groundUnitA.sight > groundUnitB.sight) {
        console.log('Ground VS Ground battle.')
        while (true) {
            if (groundUnitA.health <= 0) {
                console.log(`${groundUnitB.name.toUpperCase()} with ${groundUnitB.health} health points is the winner.`)
                console.log(`${groundUnitA.name.toUpperCase()} with ${groundUnitA.health} remaining health points is the loser.`)
                break
            } else if (groundUnitB.health <= 0) {
                console.log(`${groundUnitA.name.toUpperCase()} with ${groundUnitA.health} health points is the winner.`)
                console.log(`${groundUnitB.name.toUpperCase()} with ${groundUnitB.health} health points is the loser.`)
                break
            } else {
                console.log('Fighting')
            }
            groundUnitA.health = groundUnitA.health - groundUnitB.attack.ground
            groundUnitB.health = groundUnitB.health - groundUnitA.attack.ground
            /*
            const stats_a = groundUnitA.map(item => {
                const container = {}
                container.item.name = item.name
                container.item.health = item.health
                console.log(container)
                return container
            })
            const stats_b = groundUnitB.map(item => {
                const container = {}
                container.item.name = item.name
                container.item.health = item.health
                console.log(container)
                return container
            })
            console.log(stats_a)
            // Try with an independent map() instruction
            */
        }
    }
    if (groundUnitB.sight > groundUnitA.sight) {}
    if (groundUnitA.sight === groundUnitB.sight) {}
}

function battleType() {
    if (soldier_a.unit_type && soldier_b.unit_type === 'ground') {
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
// Simulate the units selected by the user
// Create a battle array to map the battle values
// Arrow functions to execute battle actions