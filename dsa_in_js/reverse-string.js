/**
 * Reverse a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
 function reverseString(str) {
    return str.split("").reverse().join("");
 }

 console.log(reverseString("hello")); // Output: "olleh"
 console.log(reverseString("world")); // Output: "dlrow"
 