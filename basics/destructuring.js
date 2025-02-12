// Destructuring in Arrays 

// Destructuring is a convenient way of extracting the data from an array and objects 

const options =[ 'help', 'version', 'created_at', 'updated_at'];

const [a, b, c, d] = options

console.log(a, b, c, d, extxra = true); 

// To skip any values 
    const [, ,  , updated_at] = options;
    console.log(updated_at);  // 'updated_at'

// Destructuring in Objects

const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
}

const { name, age, address: { city } } = person;

console.log(name, age, city);
