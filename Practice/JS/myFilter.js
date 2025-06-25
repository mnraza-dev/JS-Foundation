Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5];
const evens = numbers.myFilter((num) => num % 2 === 0);

console.log(evens); // [2, 4]
