// This is a simple JavaScript code snippet demonstrating variable declaration and usage.
// Variables can be declared using let, const, or var.
// let is block-scoped, const is also block-scoped but cannot be reassigned, and var is function-scoped.
let name ;
console.log(name)
let a = 10;
let b = 20;
let c = a + b;
var age = 23;

const PI = 3.14;
let radius = 5;
let area = PI * radius * radius;

// PI = 3.14159; // This will throw an error because PI is a constant and cannot be reassigned.
// console.log(PI);

console.log("Area of the circle: " + area);

console.log(age);

console.log(c);


// Rules :
// 1. Variables declared with let and const are block-scoped.

