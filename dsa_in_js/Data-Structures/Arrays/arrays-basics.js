// Arrays- Declaration

let arr = ["apple", "banana", "cherry"];
let arr1 = new Array("apple", "banana", "cherry");
let arr3 = new Array(5);
let arr4 = new Array();

// Array- Accessing Elements

console.log(arr[0]);
console.log(arr[1]);

// Array- Length

console.log(arr.length);

// Array- Adding & Removing Elements

arr.push("orange"); // Adds to the end
arr.pop(); // Removes from the end
arr.unshift("kiwi"); // Adds to the beginning
arr.shift(); // Removes from the beginning
arr.splice(1, 1); // Removes from the middle
arr.splice(1, 0, "grape"); // Adds to the middle

// Array- Iterating

// Using for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Using while loop
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
// Using for..in
for (let index in arr) {
  console.log(index, arr[index]);
}
// Using forEach
arr.forEach((item, index) => {
  console.log(index, item);
});
// Using for..of
for (let item of arr) {
  console.log(item);
}

// Array- Sorting

// Array- Searching

// Array- Slicing & Splicing
