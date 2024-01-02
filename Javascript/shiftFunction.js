// shift() function removes first element in an array
var arr = ['Alan', 'Turing', ['Person']];
var removedFromArray = arr.shift();

console.log(arr, '\nRemoved:', removedFromArray);
// ------------------------------------
var arr = [['John', 23,], ['Poly', 25]]
var removedFromArray = arr.shift();

console.log(arr, '\nRemoved:', removedFromArray);

// unshift() function adds to first element in an array
var arr = ['cat', 'dog'];
var number = [1, 2, 3];

arr.unshift('fish');
number.unshift(0);

console.log(arr);
console.log(number);