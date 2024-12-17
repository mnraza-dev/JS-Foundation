function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    } return sum
}

console.log(add(1, 2,100,200));



const add =(...args)=> {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    } return sum
}

console.log(add(1, 2,100,200));