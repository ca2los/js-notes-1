'use strict'
// StarCraft
// Retrieve units statistics
// Confront units and retrieve updated statistics

// Units
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

// New array
function newArray(unit) {
    unit = unit.map(item => {
        const container = {}
        container.name = item.name
        container.health = item.health
        container.armor = item.armor
        container.attack = item.attack.ground
        container.attack_range = item.attack_range
        container.sight = item.sight
        container.unit_type = item.unit_type
        return container
    })
    console.log(`Stage #2: Player A new array for ${unit[0].name.toUpperCase()} unit ->`)
    console.log(unit)
}

// Select Units
function selectUnits() {
    let player_a = starCraft.firebat

    // Creating independent arrays
    function selected(unit_a, unit_b) {
        console.log(`Stage #1: Player A selected a ${(unit_a[0].name).toUpperCase()} unit`)
        newArray(unit_a, unit_b)
    }
    selected(player_a)
}

// Start Battle
function startBattle(initialize) {
    if (initialize === true) {
        console.log('Starting battle...')
        selectUnits()
    } else {
        console.log('No battle.')
    }
}

// Initialize Battle
const start_battle = true
startBattle(start_battle)