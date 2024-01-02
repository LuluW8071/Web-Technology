// Conditional Statements: If-Else
function trueOrFalse(isTrue) {
    if (isTrue) {
        return 'True';
    }
    return 'False';
}

console.log(trueOrFalse(true));

// Another Example
function sum(a) {
    if (a % 2 == 0) {
        return a + ' is even';
    }
    return a + ' is odd';
}

console.log(sum(4));