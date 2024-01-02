// concatenate using function
function blank(animal1, animal2, animal3) {

    var result = "";
    result += animal1 + animal2 + "are mammals. "+"So, is a " + animal3 ;
    return result;
}

console.log(blank("dog ", "cat ", "mouse "));