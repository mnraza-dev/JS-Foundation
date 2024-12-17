const numbers = [
    1, 2, 3, 4, 5,6
]

const sum = numbers.reduce((acc, current, index) => {
   return acc + current
},2)
console.log(sum);

const multiply = numbers.reduce((acc, current)=>{
    return acc *current
})
console.log(multiply);