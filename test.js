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

function cart(cost) {
    return "$" + cost;
}
let price = 499.00;
price *= 2;
cart(price);
console.log(cart(price));