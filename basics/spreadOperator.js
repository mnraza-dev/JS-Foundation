// Spread Operator
// with arrays

const nums =[1,2,3,4,5]
const newNums = [...nums, 6, 7, 8]

console.log(newNums);

// with strings

const myName = "MNRaza"
const nameArr = [...myName]
console.log(nameArr);
// with Objects
const person = {
    name: "MN Raza",
    age: 29
}

const personArr = {...person, city: "Bhopal"}
console.log(personArr);


// more examples from prepCoding

const myArr = [2,3,4,4,5,5,6,8];
const myNewArr = [...myArr];

console.log(myNewArr);
console.log(myArr);

const obj1 = {name: "John", age: 25};
const obj2 = {...obj1, city: "Bhopal", age:30};
console.log(obj2);

