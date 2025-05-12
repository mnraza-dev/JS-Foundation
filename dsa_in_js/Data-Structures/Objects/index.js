const user = { name: "Alice" };
console.log(user.age); // undefined
console.log(user?.age ?? "Age not set");


const user2 = { name: "Bob", age: 25 };
console.log(user2.age); // 25
console.log(user2?.age ?? "Age not set");
