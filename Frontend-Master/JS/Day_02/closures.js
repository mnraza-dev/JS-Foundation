function show(){
    let count = 0;
    return function() {
        count++;
        console.log("Count is: " + count);
    };
}
const increment = show();
increment(); // Count is: 1

function show() {
    let name = "mnraza";
    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
        }
    }
}
const person = show();
console.log(person.getName()); // mnraza
person.setName("Amber");
console.log(person.getName()); // Amber

function show() {
  let name = "mnraza";
  function inner() {
    console.log("Name is: " + name);
  }
  inner();
}
console.dir(show);
show(); // Name is: mnraza