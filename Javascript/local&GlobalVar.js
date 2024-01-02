// Global variable
var outerwear = 'T-shirt';

function outfit() {
    // Local variable
    var outerwear = 'sweater';
    return outerwear;
}

// Local variable takes higher precendence over Global variable
console.log(outfit());  // Returns Sweater

// Since outerwear for 'T-shirt' is defined outside function as global variable 
// console.log() returns global variable however it is different case for fucntion
console.log(outerwear);
