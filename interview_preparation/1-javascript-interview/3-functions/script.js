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
const multiply = (a, b) => {
    return a * b
}

// First class functions
function square(x) {
    return x * x
}
function displaySquare(fn) {
    console.log("square is: ", fn(4));

}
displaySquare(square)