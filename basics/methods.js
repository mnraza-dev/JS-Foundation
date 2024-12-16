const maths = {
    PI: 3.14,
    add: function (x, y) {
        return x + y
    },
    subtract: function (x, y) {
        return x - y
    },
    square(x) {
        return x * x
    },
    cube(x) {
        return x * x * x
    },
    multiply(x, y) {
        return x * y
    },
    division(x, y) {
        return x / y
    }
}

console.log( "Add", maths.add(4, 5));
console.log( "Subtract ", maths.subtract(14, 5));
console.log( "Squire ", maths.square(4));
console.log( "Cube", maths.cube(4));
console.log( "Multiply", maths.multiply(4, 5));
console.log( "Division", maths.division(40, 5));
console.log( "PI Value", maths.PI);