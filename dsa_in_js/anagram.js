// WAP to check if given string is anagam or not

// An anagram of a string is another string that contains the same characters, only the order of the characters can be different. For example, "listen" and "silent" are anagrams of each other.

// isAnagram("anagram", "nagaram") => true
// isAnagram("rat", "car") => false
// isAnagram("a", "ab") => false


var isAnagram = function(s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s === t;
};
 

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false