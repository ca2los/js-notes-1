"use strict";
// Pizza Maker
// Give options to create a custom pizza
// Create a new value with the new pizza
// Calculate the total cost in dollars

const DELIVERY_TIP = .12

function selectIngredients(pizzaPrice) {
    let ingredients = {
        mozzarella: 4,
        mushrooms: 3,
        olives: 3,
        onion: 2,
        pepperoni: 2,
        salami: 2,
        sausage: 2
    }
    let customPizza = pizzaPrice + ingredients.mozzarella + ingredients.mushrooms
    let total = customPizza + (customPizza * DELIVERY_TIP)
    console.log("USD $", total.toFixed(2))
}

function checkoutOrder(pizzaPrice) {
    let customize = prompt("Do you want to add more ingredients?")
    if (customize.toUpperCase() === "YES" || customize.toUpperCase() === "Y") {
        selectIngredients(pizzaPrice)
    } else {
        let total = pizzaPrice + (pizzaPrice * DELIVERY_TIP)
        console.log("USD $", total.toFixed(2))
    }
}

let pizza = {
    cheese: 21.50,
    hawaiian: 20.50,
    italian: 25.99,
    mexican: 22.99,
    traditional: 23.50
}
let selection = pizza["italian"]
checkoutOrder(selection)

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