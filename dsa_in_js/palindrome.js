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
