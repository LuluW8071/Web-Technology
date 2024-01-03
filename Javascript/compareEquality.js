// Compare Equality
// === : Strict Equality

var a = 10;
var b = 10;

if (a === b) {
    console.log('a and b are equal');
} else {
    console.log('a and b are not equal');
}

// == : Equal Operator

function equality(x, y) {
    if (x == y) {
        console.log('x and y are equal');
    } else {
        console.log('x and y are not equal');
    }
}

equality(10, '10');  //x and y are equal
equality(39, 39);    //x and y are  equal
equality(15, '10');  //x and y are not equal

// !==: Strict Equality Operator
// != : Not Equal Operator

function notEquality(x, y) {
    if (x != y) {
        console.log('x and y are not equal');
    } else {
        console.log('x and y are equal');
    }
}

notEquality(10, '20');  //x and y are not equal