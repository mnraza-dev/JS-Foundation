function multiply(x = 1, y = 1) {
    return x * y
}
console.log(multiply(5, 6));       

function rollDice(numberOfDice = 6) {
    return Math.floor(Math.random() * numberOfDice) + 1
}

console.log("Dice Roll",rollDice(4));
