// while loops
const animals = [
    "Cow",
    "tiger", "Lion", "Elephant"
]

let i = 0
while (i < animals.length) {
    console.log(`${i + 1}. ${animals[i]}`);
    i++

}
console.log(
    `I have ${animals.length} animals`
);
