const evenNumbers =[
    2,4,6,8
]
const res=evenNumbers.some((num)=>{
    return num >4
})

console.log(res);


const evenNumbers1 = evenNumbers.every((num)=>{
    return num >4
})

console.log(evenNumbers1);
