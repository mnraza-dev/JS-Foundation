

console.log("I am first");

function greet() {
    console.log("Hello! from greet");
}


setTimeout(() => {
    console.log("Hello! from set timeout");
    greet();
}, 2000);

for (let index = 0; index < 10; index++) {
    console.log(index);

}