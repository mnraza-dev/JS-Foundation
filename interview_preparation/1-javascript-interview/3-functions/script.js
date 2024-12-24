// Functions in javascript

// function declaration 
function add(a, b) {
    return a + b
}
// function expression
const sub = function (a, b) {
    return a - b
}

// Arrow functions
// const multiply = (a, b) => {
//     return a * b
// }

// First class functions
// function square(x) {
//     return x * x
// }
// function displaySquare(fn) {
//     console.log("square is: ", fn(4));

// }
// displaySquare(square)

// IIFE

// (function square(x) {
//     console.log("Square is: ", x * x);

// })(2)

// Output based questions

// (function (x) {
//     return (
//         function (y) {
//             console.log(x);

//         }(2)
//     )
// })(4)

// 4

// Function scope 

// var num1 = 10;
// num2 = 30;
// name = "MN Raza";

// function add() {
//     var num2 = 20;
//     console.log(num1 + num2);
// }
// add();  // 30

// A nested function example
// function getScore() {
//     var num1 = 2;
//     num2 = 3;

//     function add() {
//         return name + " scored " + (num1 + num2);
//     }

//     return add();
// }

// console.log(getScore()); //MN Raza scored 5

// Function Scope - O/P Based Questions
// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);

//     }, i * 1000);
// } // it will print every time 5 

//1.  The for loop runs from i = 0 to i < 5.
//2.  Each iteration sets up a setTimeout that logs i after i * 1000 milliseconds.
//3.  Because var declares i with function scope, there is only one shared i for all iterations.
//4.  By the time the setTimeout callbacks execute, the loop has already completed, and i has the final value of 5.

// Correcting the Code

// To capture the correct value of i for each setTimeout, 
// you can use either let or an IIFE (Immediately Invoked Function Expression).

// for (var i = 0; i < 5; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);

//     })(i)

// }

// using let instead of IIFE

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);

//     }, i * 1000);
// }

// Output
// 0
// 1
// 2    
// 3
// 4

// Function Hoisting

// fnName();

// function fnName() {
//     console.log("Function is called");

// }

// console.log(x); //undefined because it is hoisted
// var x = 5;

// Function Hoisting - O/P Based Questions

// var x = 5;
// function fnName() {
//     console.log(x);
//     var x = 10;
// }
// fnName();  //undefined


// Params vs Arguments

// a and b are parameters
function add(...nums) { // ...nums is a rest parameter
    console.log(nums[0] + nums[1]);
}
var arr = [ 4, 5];
add(...arr); 
// ...arr is called spread operator
//9  //arguments

// a and b are arguments





