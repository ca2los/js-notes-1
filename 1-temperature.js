/**
let storehouse = 10;
for (let user_cart = 0;user_cart <= storehouse;user_cart++ ) {
    console.log(user_cart);
}**/

/**
let storehouse = 10;
let user_cart = 0;
while (true){
    if (user_cart > storehouse) {
        break;
    }
    console.log(user_cart);
    user_cart++
}**/

/**
let storehouse = 10;
let user_cart = 0;
do {
    if (user_cart > storehouse) {
        console.log("No more than 10 items.");
        break;
    }
    console.log(user_cart);
    user_cart++;
} while (true);**/

/**
function printAmount() {                        // The statement is function named as "printAmount" with no parameters,
    console.log("$" + amount.toFixed(2));
}
let amount = 99.99;
amount *= 2;
printAmount();**/

/**
function cart(cost) {
    return "$" + cost;
}
let price = 499.00;
price *= 2;
cart(price);
console.log(cart(price));**/

// Intelligent oven
// The user wants to cook a turkey for Christmas.
// The oven pre-heat ideal temperature for turkey is 50°C.
// Once the oven is ready at 50°C it's time to introduce the turkey for 90 minutes.

"use strict";

const TURKEY_TEMP = 50;
const TURKEY_TIME = 90;

function oven(temperature) {
    do {
        if (temperature > TURKEY_TEMP) {
            console.log("Oven temperature is ready!")
            time(prepTime)
            break
        }
        console.log("Preheat temperature: ", temperature + "°C")
        temperature++
    } while (true)
}

function time(minutes) {
    while (true) {
        if (minutes >= TURKEY_TIME) {
            console.log("The turkey is ready!")
            break
        }
        console.log(minutes + " minute(s) lapsed")
        minutes++
    }
}

let currentTemperature = 0;     // User's bank account
let prepTime = 0;

oven(currentTemperature);