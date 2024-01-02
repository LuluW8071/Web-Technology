// Global variable declared outside functions
var n1 = 5;

// Function to assign a value to a variable without 'var' keyword (unintentional global variable)
function func1() {
    // Without 'var', 'n2' becomes a global variable unintentionally
    n2 = 10;
}

function func2() {
    var result = '';

    // Check if 'n1' is defined in the current scope (it is globally declared)
    if (typeof n1 != 'undefined') {
        result += 'Global:' + n1;
    }

    // Check if 'n2' is defined in the current scope (it's a global variable due to unintentional declaration)
    if (typeof n2 != 'undefined') {
        result += ', Unintentional Global:' + n2;
    }

    console.log(result);
}

func1(); 
func2(); 
