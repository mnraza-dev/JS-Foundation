// 💡 Problem 1: Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
  let map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left);
    }
    map.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}


console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3


/**
 * 💡 Problem 2: Check if a String is a Palindrome
Given a string, check if it is a palindrome (it reads the same backward as forward).
 */

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

