// const myArr = [
//     "Banana", "Pineapple", "Lemon", "Orange", null, undefined, false, true, {
//         name: 'MN Raza', age: 30, address: {
//             city: 'Bhopal',
//             state: "MP"
//         }
//     },
//     [
//         "C++", "CSS", "PHP", "Java"
//     ]
// ]

// console.log(myArr);
// console.log(typeof myArr);
// console.log(myArr.length);

// myArr.push("Water Melon")
// console.log(myArr);
// myArr.pop()  //remove from end


// myArr.shift() //remove from start

// myArr.unshift("Dates") // adds from start

const animals = [
    "Dog", "Monkey", "Wolf", "Cow", "Lion", "Tiger", "Elephant", "Giraffe"
]
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8]
const fruits = ["Papaya", "Pomegranate", "Orange", "Pineapple"]
// Use of concat() method
// mixedArr = animals.concat(numbersArr, fruits)
// console.log(mixedArr);

// Use of indexOf() method

// console.log(numbersArr.indexOf(2));
// console.log(numbersArr.indexOf(12));

// Use of includes() method
// console.log(animals.includes('cat'));
// console.log(animals.includes('Cow'));

// Use of reverse() method

// console.log(animals.reverse());

// Use of slice() method => gives a new array
// console.log(animals.slice(0,3));

// Use of splice() method =>gives a new array & changes the original array
console.log(animals.splice(0, 2 , "Bhaalu bhai","Genda bhai"));
console.log(animals);


// Use of sort() method
// console.log(animals.sort());
// console.log(fruits.sort());




