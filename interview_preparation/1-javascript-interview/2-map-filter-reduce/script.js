// map

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = nums.map((num, index) => num + index);

console.log(newNums);

// filter

const moreThanTwo = nums.filter((num, index) => num > 8);
console.log(moreThanTwo);

// reduce
// reduce method is used to reduce an array to a single value
// accumulator is a variable that stores the result of the previous iteration/computation

const sum = nums.reduce((acc, current, index, arr) => {
    return acc + current;
}, 0);
console.log(sum);

// Polifill for map
// Array.map((num, index, arr) => {num + index});

Array.prototype.myMap = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i], i, this));
    }
    return arr;

}

const mynums = [123,124,245,567,367,873,783,567];

const myNewNums = mynums.myMap((num, index) => num + index);

console.log("Polyfill for map",myNewNums);

// Polifill for filter
// Array.filter((num, index, arr) => {num > 8});

Array.prototype.myFilter = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) arr.push(this[i]);
    }
    return arr;
}

const myMoreThanTwo = mynums.myFilter((num, index) => num > 500);

console.log("Polyfill for filter",myMoreThanTwo);
