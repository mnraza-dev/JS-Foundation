const person = {
    name: 'John Doe',
    age: 30,
    address:[
        {
            city: 'Bhopal',
            state: 'MP',
            country:"India",
        },
        
    ]
}
const person2 = {...person, name: 'MN Raza',profession:'Software Engineer'}

person2.address.push({city: 'Pune', state: 'MH', country:"India"});

// person.address[0].city = 'Indore';
console.log(person);
console.log(person2);