//Using spread operator
const obj = {
  name: "mnraza",
  age: 31,
};

const obj1 = { ...obj };
// console.log(obj1)

// Using Object.assign()
const obj2 = {};
Object.assign(obj2, obj);
console.log(obj2);

// Object.freeze()
const obj3 = {
  name: "mnraza",
  age: 31,
  skills: ["JavaScript"],
};
Object.freeze(obj3);
obj3.city = "Delhi";
obj3.name = "MD NOORULLAH";
console.log(obj3);

// Object.seal() - we can change existing property
const obj4 = {
  name: "mnraza",
  age: 31,
  skills: ["JavaScript"],
};

Object.seal(obj4);
obj4.city = "Delhi";
obj4.name = "MD NOORULLAH";

console.log(obj4);
