// Value Types
let name = 'banana';    // string  
let age = 30;   // numeric value      
let floatage = 9.34 // numeric value  
let edible = true;  // boolean value
let firstName = undefined;  // variable that are declared but not assigned
let selectedColor = null;   // null value

// typeof name === 'string'
// typeof age === 'number'
// typeof floatage === 'number
// typeof edible === 'boolean'
// typeof firstName === 'undefined'
// typeof selectedColor === 'object'


// Reference Types
let person = {
    name: 'luluw',
    age: 20
}

console.log(person);

// Dot notation (Easier and Better notation)
person.name = 'John Doe';

// Brackets notation
person['name'] = 'Mary Doe';
console.log(person.name);

let selection = 'firstname';
person[selection] = 'Mary';

console.log(person.firstname);