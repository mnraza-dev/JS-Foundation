var name = "mnraza";
let my_name = "MN Raza";

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