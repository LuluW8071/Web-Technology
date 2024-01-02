// Multi Dimensional Array
var mulArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

var myData0 = mulArray[0][2];        // 3
var myData1 = mulArray[2][1];        // 8
var myData2 = mulArray[3][0][1];     // 11
var myData3 = mulArray[3][2];        // 14    

console.log(myData0, myData1, myData2, myData3);
