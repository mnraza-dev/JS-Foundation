// function declarations

function add(x, y) {
    return x + y
}
function subtract(x, y) {
    return x - y
}

// function expression

const multiply = function (x, y) {
    return x * y
}
const division = function (x, y) {
    return x / y
}
// Arrow Functions
const cube = (x) => {
    return x * x * x
}
const squire = (x) => x * x


console.log(add(4, 5));
console.log(subtract(14, 5));
console.log(multiply(4, 5));
console.log(division(40, 5));
console.log(cube(4));
console.log(squire(4));
// generate random number
const random = () => {
    return Math.floor(Math.random() * 10) + 1
}
console.log("Random Number is: ", random());

setTimeout(() => {
    console.log("Hello! from set timeout");
}, 2000)