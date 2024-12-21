const { calculateSum,name, multiply } = require('./calculate')
// console.log(global);
// console.log(this); //empty object
// console.log(globalThis); //global object
// console.log(global === globalThis);

let a = 10;
let b = 21;
console.log("Name is: ", name);

console.log("the value of calculateSum is: ", calculateSum(a, b));
console.log("the value of Multiply is: ", multiply(a, b));




