// let age = [];
// console.log(typeof age);
// console.log(typeof null); //object - it is legacy bug

// Type Conversion 
console.log("24" - 2); // string to number - 22
console.log("24" + 2); // string concatenation - "242"
console.log("24" * 2); // string to number - 48
console.log("24" / 2); // string to number - 12

let num = 24;
// let num2 = 4 + num++;
// console.log(num2); // 28

// let num3 = 4 + num--;
// console.log(num3); // 28

// let num4 = 44 - --num;
// console.log(num4); // 21

// let num6 = 44 - num--;
// console.log(num6); // 20

// let num5 = 44 - ++num;
// console.log(num5); // 19

// There are 6 falsy values in JavaScript:
// 1. false
// 2. 0
// 3. "", '', `` (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)
let isTrue = false;
if (isTrue) {
    console.log("This is true");
}
else {
    console.log("This is false");
}
let isFalse = 0;
if (isFalse) {
    console.log("This is true");
}
else {
    console.log("This is false");
}
let isEmptyString = "";
if (isEmptyString) {
    console.log("This is true");
}
else {
    console.log("This is false");
}

let isNull = null;
if (isNull) {
    console.log("This is true");
}   
else {
    console.log("This is false");
}

let isUndefined;
if (isUndefined) {
    console.log("This is true");
}
else {
    console.log("This is false");
}
let isNaN = NaN;
if (isNaN) {
    console.log("This is true");
}
else {
    console.log("This is false");
}
// Truthy values in JavaScript are all values that are not falsy.
// This includes:
// 1. true
// 2. Any non-zero number (e.g., 1, -1, 3.14)
// 3. Any non-empty string (e.g., "hello", '0', `world`)
let isTrueValue = true;
if (isTrueValue) {
    console.log("This is true");
}
else {
    console.log("This is false");

}
let isNonZeroNumber = 1;
if (isNonZeroNumber) {  
    console.log("This is true");
}   
else {
    console.log("This is false");
}

let isNonEmptyString = "hello";
if (isNonEmptyString) {
    console.log("This is true");
}
else {
    console.log("This is false");
}

let isNonEmptyString2 = '0';
if (isNonEmptyString2) {

    console.log("This is true");
}
else {
    console.log("This is false");
}


let isNan = `world`;
if (isNan) {
    console.log("This is true");
}
else {
    console.log("This is false");
}
// NaN (Not a Number) is a special value in JavaScript that represents a value that is not a valid number. It is often the result of an operation that cannot produce a meaningful numeric result, such as dividing zero by zero or trying to parse a non-numeric string as a number.
// NaN is unique in that it is not equal to any value, including itself. This means that if you compare NaN to NaN using the equality operator (==) or the strict equality operator (===), the result will be false. To check if a value is NaN, you can use the isNaN() function or the Object.is() method.
console.log(NaN == NaN); // false - NaN is not equal to itself
console.log(NaN === NaN); // false - NaN is not equal to itself
console.log(Object.is(NaN, NaN)); // true - Object.is checks for Nan
console.log(isNaN(NaN)); // true - isNaN checks if the value is NaN
console.log(isNaN("hello")); // true - isNaN checks if the value can be converted to a number, and "hello" cannot, so it returns true
console.log(isNaN(123)); // false - isNaN checks if the value can be converted to a number, and 123 can, so it returns false
console.log(isNaN("123")); // false - isNaN checks if the value can be converted to a number, and "123" can, so it returns false
console.log(isNaN("123abc")); // true - isNaN checks if the value can be converted to a number, and "123abc" cannot, so it returns true
console.log(isNaN("")); // false - isNaN checks if the value can be converted to a number, and an empty string can be converted to 0, so it returns false
console.log(isNaN(null)); // false - isNaN checks if the value can be converted to a number, and null can be converted to 0, so it returns false
console.log(isNaN(undefined)); // true - isNaN checks if the value can be converted to a number, and undefined cannot be converted to a number, so it returns true
console.log(isNaN(true)); // false - isNaN checks if the value can be converted to a number, and true can be converted to 1, so it returns false
console.log(isNaN(false)); // false - isNaN checks if the value can be converted to a number, and false can be converted to 0, so it returns false
console.log(isNaN([])); // false - isNaN checks if the value can be converted to a number, and an empty array can be converted to 0, so it returns false
console.log(isNaN([1, 2, 3])); // true - is NaN checks if the value can be converted to a number, and an array with elements cannot be converted to a number, so it returns true
console.log(isNaN({})); // true - isNaN checks if the value can be converted to a number, and an object cannot be converted to a number, so it returns true
console.log(isNaN(function() {})); // true - isNaN checks if the value can be converted to a number, and a function cannot be converted to a number, so it returns true
console.log(isNaN(Symbol())); // true - isNaN checks if the value can be converted to a number, and a Symbol cannot be converted to a number, so it returns true
console.log(isNaN(BigInt(123))); // false - isNaN checks if the value can be converted to a number, and BigInt can be converted to a number, so it returns false
console.log(isNaN(BigInt("123"))); // false - isNaN checks if the       value can be converted to a number, and BigInt can be converted to a number, so it returns false


