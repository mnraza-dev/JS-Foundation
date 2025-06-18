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

var myName=null;
console.log(myName);

function test0(n) {
    console.log('running test0()', n);  
}
test0()

function test(n=null) {
    console.log('running test()', n);  
}
test()
