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

const mynums = [123, 124, 245, 567, 367, 873, 783, 567];

const myNewNums = mynums.myMap((num, index) => num + index);

console.log("Polyfill for map", myNewNums);

// Polifill for filter
// Array.filter((num, index, arr) => {num > 8});

Array.prototype.myFilter = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) arr.push(this[i]);
    }
    return arr;
}

const myMoreThanTwo = mynums.myFilter((num, index) => num > 500);

console.log("Polyfill for filter", myMoreThanTwo);


// Polifill for reduce
// Array.reduce((acc, current, index, arr) => {acc + current}, initialValue);

Array.prototype.myReduce = function (cb, initialValue) {
    var acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];

    }
    return acc;
}

const mySum = mynums.myReduce((acc, current) => acc + current, 0);

console.log("Polyfill for reduce", mySum);

// Output based question for map, filter and reduce
let students = [
    { name: "John", age: 20, rollNo: 1, marks: 90 },
    { name: "Jane", age: 21, rollNo: 2, marks: 80 },
    { name: "Joe", age: 22, rollNo: 3, marks: 70 },
    { name: "Jen", age: 23, rollNo: 4, marks: 60 },
    { name: "Jill", age: 24, rollNo: 5, marks: 50 },
    { name: "Jin", age: 25, rollNo: 76, marks: 40 },
    { name: "Dhruv", age: 21, rollNo: 6, marks: 33 },
    { name: "Elvish", age: 19, rollNo: 16, marks: 33 },


]
//Q.1 - Return name only in capital letters
// Using for loop
const names = [];
for (let i = 0; i < students.length; i++) {
    names.push(students[i].name.toUpperCase())

}
console.log("Using for loop", names);

// Using map function
const namesInCapitalLetters = students.map((std) => {
    return std.name.toUpperCase()
})
console.log(namesInCapitalLetters);

//Q.2 - Return only  details of students who scored more than 60 marks 
const passingStudents = students.filter((std) => {
    return std.marks > 60
})
console.log("Passing Students", passingStudents);

//Q.3 - Return total marks of all students
const totalMarks = students.reduce((acc, current) => {
    return acc + current.marks
}, 0)
console.log("Total Marks", totalMarks);

// Q.4 - Return average marks of all students
const averageMarks = students.reduce((acc, current) => {
    return acc + current.marks
}, 0) / students.length
console.log("Average Marks", averageMarks);

// Q.5 - Return total marks of all students who scored less than 40 marks    

const totalMarksOfFailingStudents = students.filter((std) => {
    return std.marks < 40
}).reduce((acc, current) => {
    return acc + current.marks
}, 0)
console.log("Total Marks of Failing Students", totalMarksOfFailingStudents);


// Q.6 - Return only the name and marks of all students who scored more than 60 marks 

const namesOfAllStudentsMarks60 = students.filter((std) => {
    return std.marks > 60
}).map((std) => std.name )
console.log("Name for all students who scored more than 60 marks",namesOfAllStudentsMarks60);
