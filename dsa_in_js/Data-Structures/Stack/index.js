/**
 * 📚 What is a Stack?
A LIFO (Last In, First Out) structure — like a stack of plates 🍽️
Push to add, pop to remove from the top.

 */

// Given a string containing just '(', ')', '{', '}', '[', and ']',
// determine if the input is valid.

// ✅ Valid =
// Every opening bracket has a matching closing bracket.

// Brackets close in the correct order.

function isValidParenthesis(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
isValidParenthesis('()[]{}'); // true
isValidParenthesis('([)]'); // false
