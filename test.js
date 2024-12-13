function greetUser(name) {
    return `Welcome, ${name}!`;
}
let greeting = greetUser("Carlos");
console.log(greeting);


// Conversion
a = "42";
b = Number(a);
console.log(a);
console.log(b);

// Variables
const SHIPPING_COST = 15;
var amount = 42;
amount *= 2;
if (amount < 100) {
    amount += SHIPPING_COST;
    console.log("$" + amount.toFixed(2));
} else {
    console.log("$" + amount.toFixed(2));
}

const TAX_RATE = .15;
var laptop = 5000;
var bank_account = 5100;
var cart = (laptop * TAX_RATE) + laptop;
if (cart <= bank_account) {
    console.log("Thank you for your purchase.");
} else {
    console.log("Insuffient credits.");
}