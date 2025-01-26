'use strict'
// StarCraft
// Retrieve units statistics
// Confront units and retrieve updated statistics

const terran = [
    {
        name: 'firebat',
        health: 50,
        armor: 1,
        attack: {
            air: 0,
            ground: 8,
        },
        attack_range: 2,
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
        unit_type: 'ground'
    }
]

// Confronting Units
let soldier_a = terran[0]
let soldier_b = terran[1]
let start_battle = true

function groundBattle(groundUnitA, groundUnitB) {
    if (groundUnitA.attack.ground > groundUnitB.attack.ground) {
        while (true) {
            if (groundUnitA.health || groundUnitB.health <= 0) {
                console.log()
                break
            }

            let damage_a = groundUnitA.health =- groundUnitB.attack.ground
            let damage_b = groundUnitB.health =- groundUnitA.attack.ground
            damage_a++
            damage_b++
        }
    } else {
        console.log('Not a ground vs ground battle.')
    }
}

function battleType() {
    if (soldier_a.unit_type && soldier_b.unit_type === 'ground') {
        groundBattle(soldier_a, soldier_a)
    } else {
        console.log('No soldiers available.')
    }
}

if (start_battle) {
    battleType()
} else {
    console.log('No battle.')
}