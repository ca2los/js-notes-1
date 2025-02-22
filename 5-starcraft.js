'use strict'
// StarCraft
// Retrieve units statistics
// Confront units and retrieve updated statistics

// Units
const starCraft = {
    battlecruiser: [
        {
            name: 'battlecruiser',
            health: 500,
            armor: 3,
            attack: {
                air: 25,
                ground: 25
            },
            attack_range: 6,
            sight: 11,
            unit_type: 'air'
        }
    ],
    firebat: [
        {
            name: 'firebat',
            health: 50,
            armor: 1,
            attack: {
                air: 0,
                ground: 8
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
                ground: 6
            },
            attack_range: 4,
            sight: 6,
            unit_type: 'ground'
        }
    ],
    ghost: [
        {
            name: 'ghost',
            health: 45,
            armor: 0,
            attack: {
                air: 10,
                ground: 10
            },
            attack_range: 7,
            sight: 9,
            unit_type: 'ground'
        }
    ],
    wraith: [
        {
            name: 'wraith',
            health: 120,
            armor: 0,
            attack: {
                air: 20,
                ground: 8
            },
            attack_range: 5,
            sight: 7,
            unit_type: 'air'
        }
    ]
}

// Ground VS Ground
function battleGG(ground_a, ground_b) {

    // ToDo: Air VS Air
    // ToDo: Air VS Ground || Ground VS Air

    function sightIs(char1, char2) {
        let advantage = char1[0].attack.ground * (char1[0].sight - char2[0].sight)
        char2[0].health -= advantage
        console.log(`In range: ${char2[0].name.toUpperCase()} has been detected by ${char1[0].name.toUpperCase()}.`)
        console.log(`Attacked: ${char2[0].name.toUpperCase()} has ${char2[0].health} points.`)
        while (true) {
            if (char1[0].health <= 0 || char2[0].health <= 0) {
                console.log('Stage #4: Ground battle has finished.')
                console.log(`Score: ${char1[0].name.toUpperCase()} unit ended with ${char1[0].health} points.`)
                console.log(`Score: ${char2[0].name.toUpperCase()} unit ended with ${char2[0].health} points.`)
                console.log(char1, char2)
                break
            }
            char1[0].health = (char1[0].health + char1[0].armor) - char2[0].attack.ground
            char2[0].health = (char2[0].health + char2[0].armor) - char1[0].attack.ground
            console.log(`Attacked: ${char1[0].name.toUpperCase()} has ${char1[0].health} points.`)
            console.log(`Attacked: ${char2[0].name.toUpperCase()} has ${char2[0].health} points.`)
        }
    }

    if (ground_a[0].sight > ground_b[0].sight) {
        sightIs(ground_a, ground_b)
    }
    if (ground_b[0].sight > ground_a[0].sight) {
        sightIs(ground_b, ground_a)
    }
    if (ground_a[0].sight === ground_b[0].sight) {
        sightIs(ground_a, ground_b)
    }
}

// Define Battle
function battleType(type_a, type_b) {
    if (type_a[0].unit_type === 'ground' && type_b[0].unit_type === 'ground') {
        console.log(`Stage #3: This is a ${type_a[0].unit_type.toUpperCase()} vs ${type_b[0].unit_type.toUpperCase()} battle.`)
        battleGG(type_a, type_b)
    }
}

// New array
function newArray(array_a, array_b) {
    let unitBlock = item => ({
        name: item.name,
        health: item.health,
        armor: item.armor,
        attack: { ground: item.attack.ground, air: item.attack.air }, // air and ground are duplicated
        attack_range: item.attack_range,
        sight: item.sight,
        unit_type: item.unit_type
    })

    array_a = array_a.map(unitBlock) // It Create New Arrays For Battle
    array_b = array_b.map(unitBlock) // It Create New Arrays For Battle

    console.log(`Stage #2: Player A|B new arrays for -> ${array_a[0].name.toUpperCase()} & ${array_b[0].name.toUpperCase()}`)
    console.log(array_a, array_b)

    battleType(array_a, array_b)
}

// Select Units
function selectUnits() {
    let player_a = starCraft.firebat // ghost or marine
    let player_b = starCraft.marine //ghost or firebat

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