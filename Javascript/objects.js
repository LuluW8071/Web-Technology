// Objects are containers for named values with properties
var ourDog = {
    'name': 'Fido',
    'breed': 'Labrador',
    'age': 3,
    'color': 'brown',
    'sound': 'woof',
    'favourite_foods': ['pizza', 'bone', 'meat', 'treat']
};

console.log(ourDog);

// Values within objects can be accessed using dot(.) operator and bracket( [] ) via properties
console.log('Name of dog:', ourDog.name);
console.log('Breed of dog:', ourDog['breed']);

// Values within objects can be accessed using variables with bracket operator( [] ) only
var object2 = 'age';
var object4 = 'color';

console.log('Age of dog:', ourDog[object2]);
console.log('Color of dog:', ourDog[object4]);

// Objects values can be changed 
ourDog.age = 4;
ourDog['sound'] = 'bark';

console.log('Age of dog:', ourDog);
console.log('Age of dog:', ourDog);

// Adding properties in an existing object
ourDog.tails = 1;

console.log(ourDog);

// Adding values as array element in property
ourDog.favourite_foods.push('fish');

console.log(ourDog.favourite_foods);

// Deleting properties in an existing object
delete ourDog.tails;

console.log(ourDog);

// Deleting values as array element in property
ourDog.favourite_foods.pop();

console.log(ourDog.favourite_foods);
// Adding properties in an existing object