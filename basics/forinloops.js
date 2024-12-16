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
const userValues = Object.values(user)
const userEntries = Object.entries(user)

console.log("User Keys", userKeys);
console.log("User Values", userValues);
console.log("User Entries", userEntries);


for (const key of userKeys) {
    console.log(user[key]);
}