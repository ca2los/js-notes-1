"use strict";
// Pizza Maker
// Give options to create a custom pizza
// Create a new value with the new pizza
// Calculate the total cost in dollars

const DELIVERY_TIP = .12

function selectIngredients(pizzaInput) {
    let ingredients = {
        mozzarella: 4,
        mushrooms: 3,
        olives: 3
    }
    while (true) {
        let customize = prompt("Mozzarella, Mushrooms, and Olives. Enter the ingredient(s) name of your choice:");
        if (customize.toLowerCase() === "mozzarella") {
            pizzaInput = pizzaInput + ingredients.mozzarella
        }
        else if (customize.toLowerCase() === "mushrooms") {
            pizzaInput = pizzaInput + ingredients.mushrooms
        }
        else if (customize.toLowerCase() === "olives") {
            pizzaInput = pizzaInput + ingredients.olives
        }
        else {
            checkoutOrder(pizzaInput);
            break
        }
    }
}

function checkoutOrder(pizzaInput) {
    pizzaInput = pizzaInput + (pizzaInput * DELIVERY_TIP)
    console.log("USD $", pizzaInput.toFixed(2))
}

function checkoutReview(pizzaInput) {
    let customize = prompt("Do you want to add more ingredients?")
    if (customize.toUpperCase() === "YES" || customize.toUpperCase() === "Y") {
        selectIngredients(pizzaInput)
    } else {
        checkoutOrder(pizzaInput)
    }
}

function pizzaName(pizzaInput) {
    let types_of_pizza = {
        cheese: 21.50,
        hawaiian: 20.50,
        italian: 25.99,
        mexican: 22.99,
        traditional: 23.50
    }
    if (pizzaInput.toUpperCase() === types_of_pizza.cheese ||
        pizzaInput.toUpperCase() === types_of_pizza.hawaiian ||
        pizzaInput.toUpperCase() === types_of_pizza.italian ||
        pizzaInput.toUpperCase() === types_of_pizza.mexican ||
        pizzaInput.toUpperCase() === types_of_pizza.traditional
    ) {
        checkoutReview(pizzaInput)
    }
}

let selection = prompt("Enter the type of pizza you want to order:")
pizzaName(selection)

/* Improvements
    1. Prompt for adding toppings
    2. Add "Done" once the topping has been added
    3. Loop to ask if you want to add more items
    4. Function for a shared mathematical operation
    5. Deal with more options than "Yes" in the Prompt message
    6. Rename "pizzaPrice" into something more obvious like "pizzaPrice"
    7. More pizza types
*/

/**let obj = {        // Object storing compound values
    a: "Hello World",       // Property with a string value
    b: 1986,                // Property with a number value
    c: true,                // Property with a boolean value
    d: undefined,           // Property with an undefined value
    e: null                 // Property with a null (object) value
}

let f = "e";       // New variable to access an object's property

console.log(obj.a,obj["b"],obj.c,obj["d"],obj.e) // Access to the object's properties
console.log(obj[f]) // The new variable access to one of the object´s properties
console.log(f) // The new variable will retrieve the string and not the object's value**/