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

const SHIPPING_RATE = 45;
const TAX_RATE = .15;

function shop(credits) {

    let ps5_console = 999;
    let ps5_control = 99;
    let ps5_headset = 150;

    if (ps5_console <= credits) {
        credits = receipt + ps5_console
        //credits = credits - receipt
        console.log("1 PS5 Console ordered")
        console.log("Total USD $" + receipt.toFixed(2))
    } else {
        console.log("You don't have enough credits.")
    }
}
let gift_card = 2000;
let receipt = 0;
shop(gift_card);