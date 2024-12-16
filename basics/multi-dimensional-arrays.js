// const multDimArr = [
//     [
//         "Bhopal", "Bombay", "Riyadh", "DTO", "Bangalore", "Dehradun"
//     ],
//     [
//         "Rahul", 45
//     ],
//     [
//         "Adhya", 55
//     ],
//     [
//         "Rishi", 45
//     ]
// ]

// console.log(multDimArr[0][2]);
// console.log(multDimArr[1][0]);
// console.log(multDimArr[1][1]);

const fruits = [
    "Mangoes","Apples","Grapes"
]
const myFruits = []

Object.assign(myFruits, fruits)
console.log(myFruits);
myFruits.push("Banana")
console.log(myFruits);

// const myFruits = [...fruits]

// console.log(myFruits);
// myFruits[3]="Lemon"
// console.log(myFruits);
// console.log(fruits);


// myFruits.push("Guava")
// myFruits.push("Pineapple")
// console.log(myFruits);
// console.log(fruits);

const user1 = {
    name: "MN Raza",
    address: "Bhopal",
    age: 29,
}

// Copying object using Object.assign()
// const user2 = {}
// Object.assign(user2, user1)

// Copying object using spread operator

// const user2 ={...user1}

// console.log(user2);
// user2.profession="SDE"
// console.log(user2);




