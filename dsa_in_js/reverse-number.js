/**
 * Reverse a Number.
 * @param {number} num - The number to reverse.
 */

function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""), 10);
}
console.log(reverseNumber(12345)); // Output: 54321