// Start positional index of an array is always 0
var arr = [10, 20, 30, 40];
var arrIndex0 = arr[0];
var arrIndex1 = arr[1];
var lastArr = arr[arr.length - 1];

console.log(arrIndex0, arrIndex1, lastArr);

// Previous array
console.log('Original array:',arr);

// Modifying array using index
arr[0] = 100;
arr[1] = 200;
arr[2] = 300;

console.log('New array:',arr);