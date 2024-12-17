"use strict";
// Tip Calculator
// Calculate the waitress' tip against the billing total.
// Three types of tip and a custom tip.
// An option to divide the total billing.

const LOW_TIP = .11
const REG_TIP = .13
const TOP_TIP = .15

function checkout(total) {
    if (tip === LOW_TIP || tip === REG_TIP || tip === TOP_TIP) {
        total += (total * tip)
        console.log("Total: USD$", total)
        console.log("Tip of", (tip*100),"% included.")
        checkoutHosts(total)
    } else {
        console.log("Define the tip value.")
    }
}

function checkoutHosts(total) {
    if (hosts > 1) {
        console.log("Split the check in", Number(hosts), "hosts.")
        console.log("USD $", (total/Number(hosts)).toFixed(2))
    } else if (Number(hosts) === 1) {
        console.log("Don't split the check.")
    } else {
        console.log("Define the hosts value.")
    }
}

let billTotal = "400.00"   // Input value (always string) by default is "0".
let hosts = "2"       // Input value (always string) by default is "0".
let tip = TOP_TIP       // Constant value (selected) by default is "REG_TIP"
checkout(Number(billTotal));