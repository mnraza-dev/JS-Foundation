// Data Types
/**
 *  Primitive
 *    - Number
 *    - Bigint
 *    - String
 *    - Boolean
 *    - Undefined
 *    - Null
 *    - Symbol
 *
 *  Non Primitive
 *    - Object
 */
// Functions and arrays are simply objects

// Undefined is default value
// Null is explicit value

// eg:
var myName;
console.log(myName);

var myName = null;
console.log(myName);

function test0(n) {
  console.log("running test0()", n);
}
test0();

function test(n = null) {
  console.log("running test()", n);
}
test();

// Number

console.log("Maximum numbers - ", Number.MAX_SAFE_INTEGER);
console.log("Minimum numbers - ", Number.MIN_SAFE_INTEGER);

// If we'll add more than Max number , it will add the 000 at the end
console.log("Maximum numbers - ", Number.MAX_SAFE_INTEGER + 200);

let num = 22;
let bignums = 12n; //bigInt number
console.log(num);
console.log(bignums);

// String
let a = "Hi there";
let b = "hi";
console.log(a);

// Boolean
let isRaining = true;
console.log(isRaining);

// Symbol
// It generates unique id
// Two symbols can't be same
console.log(Symbol());
console.log(Symbol() == Symbol()); //false

const symb3 = Symbol("xyz");
console.log("Symbol Desc - ",symb3.description);


const obj = {};
obj.name = "mnraza";
obj[Symbol()] = 123;

console.log(obj);
console.log(Object.keys(obj)); //symbol key can't be seen , but it exists

// There are three ways to create Symbol()

// 1.  const symb = Symbol();
// 2.  const symb2 = Symbol("mysimb");
// 3.  const symb2 = Symbol.for("xyz");

// Object
// Objects works on reference basis 
// 

const person = {
  "name": "mnraza",
  "age": 30,
};

console.log(person["name"]);
console.log(person.age);

// Arrays

const arr = []
const arr1 = arr;
arr1.push(12)
console.log(arr);
console.log(arr1);
