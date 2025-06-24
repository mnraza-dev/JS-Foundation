// There are three ways to declare a variable in JavaScript: var, let, and const.
// 1. var - function scoped or globally scoped
// 2. let - block scoped
// 3. const - block scoped, cannot be reassigned

// var is function scoped, meaning it is accessible within the function it is declared in or globally if declared outside a function.
// let and const are block scoped, meaning they are only accessible within the block they are declared in, such as within an if statement or a loop.
// Variables declared with var can be redeclared and updated, while variables declared with let and const cannot be redeclared but can be updated (let) or not updated at all (const).
// Variables declared with var are hoisted to the top of their scope, meaning they can be accessed before they are declared, but their value will be undefined until the declaration is reached. Variables declared with let and const are also hoisted, but they cannot be accessed before their declaration (this is known as the "temporal dead zone").
// Variables declared with var are added to the global object (window in browsers) if declared outside a function, while variables declared with let and const are not added to the global object.
// Variables declared with var can be accessed before they are declared due to hoisting, while variables
// declared with let and const cannot be accessed before their declaration due to the temporal dead zone.
// Variables declared with var can be redeclared, while variables declared with let and const cannot be redeclared in the same scope.
// Variables declared with var can be updated, while variables declared with let can also be updated, but variables declared with const cannot be updated.      

// Example of var, let, and const
var name = "mnraza";
let my_name = "MN Raza";
const firstName = "MN";

function show(){
    if(1){
        var funName = "Hey";
        let localName="there" ;
    }
    console.log(funName);
    console.log(localName);
}
show()

console.log(window.name);
console.log(name);
console.log(my_name);

// Note: 
// firstName;
// If there is no 'var' keyword then it will be stored in window object.

// var lastName = "Kumar";  
// Global/Function/Local Scope

// let/const myNewName = "MN";
// Block scope created