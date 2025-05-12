// Arrays- Declaration
let arr = [2,4,2,1,2,3,,4,5,,6,7,8,9,10];
let arr1 = new Array("apple", "banana", "cherry");
let arr3 = new Array(5);
let arr4 = new Array();

// ✅ Arrays Are Objects!

typeof []; // "object"
Array.isArray([]); // true
Array.isArray({}); // false
Array.isArray({ length: 0 }); // false
Array.isArray(new Array()); // true
Array.isArray(new Array(5)); // true
Array.isArray(new Array("apple", "banana", "cherry")); // true

// Array- Accessing Elements
console.log(arr[0]);
console.log(arr[1]);

// Array- Length
console.log(arr.length);

// Array- Adding & Removing Elements
arr.push("orange");  // Adds to the end
arr.pop();           // Removes from the end
arr.unshift("kiwi"); // Adds to the beginning
arr.shift();         // Removes from the beginning
arr.splice(1, 1);    // Removes from the middle
arr.splice(1, 0, "grape");  // Adds to the middle

// Array- Adding & Removing Elements (Using Spread Operator)
let arr5 = [...arr, "orange"]; // Adds to the end
let arr6 = [...arr.slice(0, 1), "kiwi", ...arr.slice(1)]; // Adds to the beginning
let arr7 = [...arr.slice(0, 1), ...arr.slice(2)]; // Removes from the beginning
let arr8 = [...arr.slice(0, 1), "grape", ...arr.slice(1)]; // Adds to the middle

// Array- Adding & Removing Elements (Using Destructuring)
let [first, ...rest] = arr; // Destructuring    
console.log(first); // 2
console.log(rest); // [4, 2, 1, 2, 3, , 4, 5, , 6, 7, 8, 9, 10]

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
// Using map
// map creates a new array with the results of calling a provided function on every element in the calling array
const newArr = arr.map((item, index) => {
  console.log(index, item+2);
});
// Using filter
// filter creates a new array with all elements that pass the test implemented by the provided function
const filteredArr = arr.filter((item, index) => {
  return item > 2;
});
// Using reduce
// reduce executes a reducer function (that you provide) on each element of the array, resulting in a single output value
// Reduce takes an array and reduces it to a single value
const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// Array- Converting to String
let str = arr.toString(); // Converts to string
console.log(str);

// Array- Converting to JSON
let json = JSON.stringify(arr); // Converts to JSON
console.log(json);

// Array- Converting to Object
let obj = Object.assign({}, arr); // Converts to object
console.log(obj);
// Array- Converting to Set
let set = new Set(arr); // Converts to set
console.log(set);

// Array- Converting to Map
let map = new Map(arr.map((item, index) => [index, item])); // Converts to map
console.log(map);

// Array- Converting to WeakMap
let weakMap = new WeakMap(arr.map((item, index) => [index, item])); // Converts to weakmap
console.log(weakMap);

// Array- Converting to WeakSet
let weakSet = new WeakSet(arr.map((item, index) => [index, item])); // Converts to weakset  
console.log(weakSet);

// Array- Converting to Buffer
let buffer = Buffer.from(arr); // Converts to buffer
console.log(buffer);

// Array- Converting to TypedArray
let typedArray = new Uint8Array(arr); // Converts to typed array
console.log(typedArray);

// Array- Converting to ArrayBuffer
let arrayBuffer = new ArrayBuffer(arr.length); // Converts to array buffer
console.log(arrayBuffer);

// Array- Converting to DataView
let dataView = new DataView(arrayBuffer); // Converts to data view
console.log(dataView);


// Array- Sorting
arr.sort(); // Sorts the array
arr.sort((a, b) => a - b); // Sorts the array in ascending order
arr.sort((a, b) => b - a); // Sorts the array in descending order

// Array- Reversing
arr.reverse(); // Reverses the array

// Array- Joining
let joined = arr.join(", "); // Joins the array into a string
console.log(joined);

// Array- Concatenating

let arr2 = arr.concat(arr1); // Concatenates two arrays
console.log(arr2);

// Array- Slicing
let sliced = arr.slice(1, 3); // Slices the array
console.log(sliced);

// Array- Filling
arr.fill(0); // Fills the array with 0  
console.log(arr);

// Array- Copying
let copied = arr.copyWithin(0, 1, 3); // Copies the array
console.log(copied);

// Array- Finding
let found = arr.find((item) => item > 5); // Finds the first element that satisfies the condition
console.log(found);

// Array- Finding Index
let foundIndex = arr.findIndex((item) => item > 5); // Finds the index of the first element that satisfies the condition    
console.log(foundIndex);

// Array- Finding Last Index
let foundLastIndex = arr.lastIndexOf(3); // Finds the last index of the element
console.log(foundLastIndex);

// Array- Finding Includes
let includes = arr.includes(3); // Checks if the array includes the element 
console.log(includes);

// Array- Finding Index of
let indexOf = arr.indexOf(3); // Finds the index of the element
console.log(indexOf);

// Array- Finding Keys 
let keys = arr.keys(); // Returns an iterator over the keys in the array
console.log(keys);

// Array- Finding Values
let values = arr.values(); // Returns an iterator over the values in the array
console.log(values);

// Array- Finding Entries
let entries = arr.entries(); // Returns an iterator over the entries in the array
console.log(entries);

// Array- Finding Every
let every = arr.every((item) => item > 0); // Checks if all elements satisfy the condition
console.log(every);

// Array- Finding Some
let some = arr.some((item) => item > 5); // Checks if some elements satisfy the condition
console.log(some);

// Array- Finding Flat
let flat = arr.flat(); // Flattens the array
console.log(flat);

// Array- Finding FlatMap
let flatMap = arr.flatMap((item) => [item, item]); // Flattens the array and maps it
console.log(flatMap);

// Array- Finding Fill
let filled = arr.fill(0, 1, 3); // Fills the array with 0 from index 1 to index 3
console.log(filled);

// Array- Finding CopyWithin
let copiedWithin = arr.copyWithin(0, 1, 3); // Copies the array from index 1 to index 3
console.log(copiedWithin);

// Array- Finding FindLast
let findLast = arr.findLast((item) => item > 5); // Finds the last element that satisfies the condition
console.log(findLast);

// Array- Finding FindLastIndex
let findLastIndex = arr.findLastIndex((item) => item > 5); // Finds the last index of the element that satisfies the condition
console.log(findLastIndex);

// Array- Finding At
let at = arr.at(2); // Returns the element at the specified index
console.log(at);

// Array- Searching
let search = arr.indexOf(3); // Searches for the element in the array
console.log(search);

// Array- Slicing & Splicing
let slicedSpliced = arr.slice(1, 3); // Slices the array
console.log(slicedSpliced);

let spliced = arr.splice(1, 3); // Splices the array
console.log(spliced);

