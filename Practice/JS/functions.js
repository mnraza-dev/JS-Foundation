function hello() {
  console.log("Hi there");
}
hello();

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(2, 3));

function sayHi(name = "MN Raza") {
  return `Hi, ${name}`;
}
console.log(sayHi());

// IIFE
(async function () {
  console.log("hello IFFE");
})();

// greet();
// greet1(); // Cannot access 'greet1' before initialization

// function greet() {
//   console.log("Hi there");
// }
// const greet1 = () => {
//   console.log("Hi there");
// };