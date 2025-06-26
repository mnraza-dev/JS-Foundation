Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};


const fruits = ["🍎", "🍌", "🍇"];

fruits.myForEach((fruit, index) => {
  console.log(`Fruit ${index}: ${fruit}`);
});

// Output:
// Fruit 0: 🍎
// Fruit 1: 🍌
// Fruit 2: 🍇
