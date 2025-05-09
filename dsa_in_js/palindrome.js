// WAP to check if a numeric value is palindrome or not
/**
 * 121 => true
 * 123 => false
 * -121 => false
 * 10 => false 
 */
function palindrome(num) {
  return num < 0 ? false : num === +num.toString().split("").reverse().join("");
}

const res = palindrome(121);
console.log(res);
/**
 * @param {number} x
 * @return {boolean}
 */

// More optimized code to check if a number is palindrome or not
// 121 => true
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversed = 0;
  while (x > reversed) {
      reversed = reversed * 10 + (x % 10);
      x = Math.floor(x / 10);
  }
  return x === reversed || x === Math.floor(reversed / 10);
};
