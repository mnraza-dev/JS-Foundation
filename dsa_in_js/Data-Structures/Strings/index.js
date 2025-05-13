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

// 💡 Problem 3: Reverse Words in a String
// Given a string, reverse the order of the words in it. Words are separated by spaces.

function reverseWords(s) {
  return s.split(' ').reverse().join(' ');
}

console.log(reverseWords("the sky is blue"));  // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"



// 💡 Problem 4: Anagram Check
// Given two strings, write a function to determine if they are anagrams of each other (i.e., they contain the same characters in any order).

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.has(char) || map.get(char) === 0) return false;
    map.set(char, map.get(char) - 1);
  }

  return true;
}
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false

// 💡 Problem 5: First Unique Character in a String
// 📘 Description:
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

function firstUniqChar(s) {
  const map = new Map();
  
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }

  return -1;
}
console.log(firstUniqChar("leetcode"));       // 0
console.log(firstUniqChar("loveleetcode"));   // 2
console.log(firstUniqChar("aabbcc"));         // -1


// 💡 Problem 6: String Compression
// Given an array of characters, compress it using the following algorithm:

// Begin with an empty string. For each character, count how many times it appears consecutively in the array.

// If the count is greater than 1, add the count next to the character.
function compress(chars) {
  let write = 0;
  let read = 0;

  while (read < chars.length) {
    let char = chars[read];
    let count = 0;
    
    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }
    
    chars[write++] = char;
    if (count > 1) {
      for (let c of count.toString()) {
        chars[write++] = c;
      }
    }
  }

  return write;
}
let chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars));  // ["a", "2", "b", "2", "c", "3"]

chars = ["a", "b", "c"];
console.log(compress(chars));  // ["a", "b", "c"]

// 💡 Problem 7: Longest Palindromic Substring

// Given a string, return the longest palindromic substring. You need to find the largest contiguous substring that reads the same forward and backward.