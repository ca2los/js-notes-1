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

// Define Battle
function battleType(type_a, type_b) {
    // Get unit type (if)
    // Get unit sight (if)
    // Battle type logic (while)
    // Battle advantage by sight (comparison)
    // Battle iteration (loop)
    // Battle result (break)
}

// New array
function newArray(array_a, array_b) {
    let unitBlock = item => {
        const container = {}
        container.name = item.name
        container.health = item.health
        container.armor = item.armor
        container.attack = item.attack.ground
        container.attack_range = item.attack_range
        container.sight = item.sight
        container.unit_type = item.unit_type
        return container
    }

    // Create Arrays For Battle
    array_a = array_a.map(unitBlock)
    array_b = array_b.map(unitBlock)
    console.log(`Stage #2: Player A|B new arrays for -> ${array_a[0].name.toUpperCase()} & ${array_b[0].name.toUpperCase()}`)
    console.log(array_a, array_b)
    battleType(array_a, array_b)
}

// Select Units
function selectUnits() {
    let player_a = starCraft.firebat
    let player_b = starCraft.marine

    // Confirm Units
    if (player_a && player_b) {
        function selected(unit_a, unit_b) {
            console.log(`Stage #1: Player A selected unit is -> ${(unit_a[0].name).toUpperCase()}`)
            console.log(`Stage #1: Player B selected unit is -> ${(unit_b[0].name).toUpperCase()}`)
            newArray(unit_a, unit_b)
        }
        selected(player_a, player_b)
    }
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