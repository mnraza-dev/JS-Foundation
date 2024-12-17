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

 const  monthNames = months.map((month, index) => {
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
