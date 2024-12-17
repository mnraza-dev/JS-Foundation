const fruits = [
    "Mangoes", "Apples", "Grapes", "Banana",
    "Papaya", "Pomegranate", "Orange", "Pineapple",
    "Water Melon", "Dates", "Lichi", "Guava",
    "Jackfruit", "Mangosteen", "Papaw", "Star Fruit",
    "kiwi", "Lemon", "Lime",
]

fruits.map((fruit, index) => {
    console.log(fruit.toUpperCase());
})


console.log(fruits);


const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const monthNames = months.map((month, index) => {
    console.log(month);
    return month.toLocaleUpperCase();
})

console.log(monthNames);

const filteredMonths = months.filter((month, index) => {
    return month.length > 7
})
console.log(filteredMonths);

const filteredMonthByCharacter = months.filter((month, index) => {
    return month.includes('m')
})

console.log(filteredMonthByCharacter);

const students = [
    { name: "MN Raza", age: 29 },
    { name: "Rahul", age: 12 },
    { name: "Aditya", age: 18 },
    { name: "Rohit", age: 24 },
    { name: "Radhika", age: 34 },
    { name: "Amit", age: 19 },
    { name: "Adhya", age: 16 },
    { name: "Rishi", age: 24 },
    {
        name: "Nidhi",
        age: 17
    }
]
const filteredStudents = students.filter((student, index) => {
    return student.age >= 18
})

console.log(filteredStudents);
