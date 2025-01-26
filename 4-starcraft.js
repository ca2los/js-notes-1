"use strict"
// StarCraft
// Retrieve units statistics
// Confront units and retrieve updated statistics

const terran = [
    {
        name: "firebat",
        health: 50,
        armor: 1,
        attack: {
            air: 0,
            ground: 8,
        },
        attack_range: 2,
        unit_type: "ground"
    },
    {
        name: "marine",
        health: 40,
        armor: 0,
        attack: {
            air: 6,
            ground: 6,
        },
        attack_range: 4,
        unit_type: "ground"
    }
]

// Confronting Units
let player_a = terran[0]
let player_b = terran[1]
let start_battle = true

function groundBattle() {
    if (player_a.health > player_b.health) {
        player_b.health -= player_a.attack
    }
}

function battleType() {
    if (player_a.unit_type === "ground" && player_b.unit_type === "ground") {
        groundBattle()
    }
}

while (start_battle) {
    if (player_a.health <= 0 || player_b.health <= 0) {
        console.log(`Player A: The winner! | Health is ${player_a.health} pts.`)
        break
    }
    battleType()
}