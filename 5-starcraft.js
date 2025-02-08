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
    unit = starCraft.unit["valueOf"].map(item => {
        const container = {}
        container.name = item.name
        container.unit_type = item.unit_type
        container.health = item.health
        container.attack = item.attack.ground
        container.sight = item.sight
        return container
    })
    console.log(`New array: ${unit[0].name.toUpperCase()} -> Ready for combat!`)
    console.log(unit)
}

// Select Units
function selectUnits() {
    let player_a = 'firebat'
    //let player_b = 'marine'

    // Creating independent arrays
    function selected(unit_a) {
        console.log(`Player #1 typed: ${unit_a.toUpperCase()}`)

        if (unit_a.toLowerCase()  === starCraft.firebat[0].name) {
            newArray(unit_a)
        } else if (unit_a.toLowerCase() === starCraft.marine[0].name) {
            newArray(unit_a)
        }
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