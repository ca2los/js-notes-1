"use strict";
// Tip Calculator
// Calculate the waitress' tip against the billing total.
// Three types of tip and a custom tip.
// An option to divide the total billing.

const LOW_TIP = .11
const REG_TIP = .13
const TOP_TIP = .15

function checkout(total) {
    if (tip === LOW_TIP) {
        total = total + (total * LOW_TIP)
        console.log("Total: USD$", total)
        checkoutHostess(total)
    } else if (tip === REG_TIP) {
        total = total + (total * REG_TIP)
        console.log("Total: USD$", total)
        checkoutHostess(total)
    } else if (tip === TOP_TIP) {
        total = total + (total * TOP_TIP)
        console.log("Total: USD$", total)
        checkoutHostess(total)
    } else {
        console.log("Define the tip.")
    }
}

function checkoutHostess(total) {
    while (true) {
        if (hostess > 1) {
            console.log("Hostess paying: ", Number(hostess))
            console.log("Each host: USD $", (total/Number(hostess)).toFixed(2))
            break
        } else if (Number(hostess) === 1) {
            console.log("Paid by one host.")
            break
        } else if (Number(hostess) <= 0) {
            console.log("Define hostess.")
            break
        } else {
            console.log("Unreachable operation!")
        }
    }
}

let ticket = "400.00"   // Input value (always string) by default is "0".
let hostess = "6"       // Input value (always string) by default is "0".
let tip = TOP_TIP       // Constant value (selected) by default is "REG_TIP"
checkout(Number(ticket));