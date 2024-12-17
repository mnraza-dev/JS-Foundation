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
