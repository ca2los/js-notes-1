'use strict'
// StarCraft
// Retrieve units statistics
// Confront units and retrieve updated statistics

// Initialize Battle
const start_battle = true

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

// Defining Players (new array)
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
const player_a = starCraft.firebat
const player_b = starCraft.marine

// Battle Type
function battleType() {
    if (player_a[0].unit_type && player_b[0].unit_type === 'ground') {
        console.log(`Stage #1: Selected units -> ${player_a[0].name.toUpperCase()} and ${player_b[0].name.toUpperCase()}`)
        //groundBattle(player_a, player_b)
    } else {
        console.log('No soldiers available.')
    }
}

// Start Battle
if (start_battle) {
    console.log(`Units available: ${starCraft.firebat[0].name.toUpperCase()} | ${starCraft.marine[0].name.toUpperCase()}`)
    battleType()
} else {
    console.log('No battle.')
}