"use strict";
// Pizza Maker
// Give options to create a custom pizza
// Create a new value with the new pizza
// Calculate the total cost in dollars

const DELIVERY_TIP = .12

function checkoutOrder(pizzaInput) {
    let total = pizzaInput + (pizzaInput * DELIVERY_TIP)
    console.log("Total USD $", total.toFixed(2))
}

function selectIngredients(pizzaInput) {
    let ingredients = {
        mozzarella: 4,
        mushrooms: 3,
        olives: 3
    }
    let toppings = prompt("Select Mozzarella, Mushrooms, Olives, or enter DONE to checkout.");
    while (true) {
        if (toppings.toLowerCase() === "done") {
            console.log("No more extra ingredients")
            checkoutOrder(pizzaInput)
            break
        }
        else if (toppings.toLowerCase() === ingredients[toppings.toLowerCase()]) {
            console.log(`Extra ${toppings} (x1): Yes`)
            pizzaInput = pizzaInput + ingredients[toppings.toLowerCase()]
        } else {
            prompt("Ingredient unavailable, only Mozzarella, Mushrooms, Olives, or enter DONE to checkout.")
            console.log("Ingredient unavailable.")
        }
    }
}

function checkoutReview(pizzaInput) {
    let customize = prompt(`Enter YES to add extra ingredients or NO to proceed with checkout.`)
    if (customize.toUpperCase() === "YES" || customize.toUpperCase() === "Y") {
        console.log("Extra Ingredients: Yes")
        selectIngredients(pizzaInput)
    } else {
        console.log("Extra Ingredients: No")
        checkoutOrder(pizzaInput)
    }
}

function pizzaName(pizzaInput) {
    let types_of_pizza = {
        cheese: 21.50,
        italian: 25.99,
        mexican: 22.99
    }
    while (true) {
        if (!types_of_pizza.hasOwnProperty(pizzaInput.toLowerCase())) {
            console.log(`${pizzaInput.toUpperCase()} pizza is unavailable.`)
            break
        }
        console.log(`You've selected ${pizzaInput} pizza.`)
        pizzaInput = types_of_pizza[pizzaInput.toLowerCase()];
        checkoutReview(pizzaInput)
    }
}

let selection = prompt("Enter Cheese, Italian, or Mexican to select your pizza.")
pizzaName(selection)