// Sequential Case Switch
function switchCase(val) {
    var answer = '';
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Medium';
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High';
            break;
        default:
            answer = 'Out of Range';
            break;
    }
    return answer;
}

console.log(switchCase(3));     // Low
console.log(switchCase(9));     // High
