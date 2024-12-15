// const user = {
//     firstname: "MN",
//     lastname: "Raza",
//     email: 'mnraza94@gmail.com',
//     address: {
//         city: 'Bhopal',
//         state: "MP",
//         pin: 460021,
//     },
//     isGraduate: false,
//     occupation: 'Softwrae Developer'
// }
// console.log(user.firstname);
// console.log(user['address']);

// user.age = 29

// console.table(user.address);

const user = {
    firstname: "MN",
    lastname: "Raza",
    email: 'mnraza94@gmail.com',
    address: {
        city: 'Bhopal',
        state: "MP",
        pin: 460021,
    },
    age: 29,
    isGraduate: false,
    occupation: 'Softwrae Developer'
}

// How we're able to change object made with const?

// => We're not changing the address of the user obj , 
// address is same is same in memory and its properties are updating 
// delete user's any property
// console.log(user);
// delete user.age
// console.log(user);

// Prevent Object's from adding the new properties or deleting the existing one.
Object.seal(user);
delete user.age
console.log(user);

// Prevent Object's from adding,modifying and deleting the properties.
Object.freeze(user);

