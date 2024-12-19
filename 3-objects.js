"use strict";
let obj = {        // Object storing compound values
    a: "Hello World",       // Property with a string value
    b: 1986,                // Property with a number value
    c: true,                // Property with a boolean value
    d: undefined,           // Property with an undefined value
    e: null                 // Property with a null (object) value
}

let f = "e";       // New variable to access an object's property

console.log(obj.a,obj["b"],obj.c,obj["d"],obj.e) // Access to the object's properties
console.log(obj[f]) // The new variable access to one of the object´s properties
console.log(f) // The new variable will retrieve the string and not the object's value
