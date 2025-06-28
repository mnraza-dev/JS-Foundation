function doubleEvens(arr) {
  return arr.filter(num => num % 2 === 0).map(num => num * 2);
}


console.log(doubleEvens([1, 2, 3, 4, 5, 6])); // [4, 8, 12]