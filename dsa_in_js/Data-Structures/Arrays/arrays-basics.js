// Arrays declaration
let arr = ["apple", "banana", "cherry"];
let arr1 = new Array("apple", "banana", "cherry");
let arr3 = new Array(5); 
let arr4 = new Array();

// Accessing elements
console.log(arr[0]); 
console.log(arr[1]); 
arr.map((item, index) => {
  console.log(item, index);
});