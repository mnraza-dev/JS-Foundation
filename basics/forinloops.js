const fruits = [
    "Mangoes", "Apples", "Grapes", "Banana"];


for (const item of fruits) {
    console.log(item);
}

const username = "mnraza"
for (const char of username) {
    console.log(char);
}

// to loop on ojects we should use for in loop
const user = {
    name: "MN Raza",
    age: 29,
    address: {
        city: "Bhopal",
        state: "MP"
    }
}

for (const key in user) {
    console.log(user[key]);
}

const userKeys = Object.keys(user)
console.log(userKeys);

for (const key of userKeys) {
    console.log(user[key]);
}