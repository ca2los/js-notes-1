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
const TAX_RATE = .15;
var amount = 42;
amount /= 2;
amount = amount * TAX_RATE;
console.log(amount);

amount = "$" + String(amount);
console.log(amount);