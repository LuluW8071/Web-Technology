// Switch Case Statement and Default
function caseSwitch(val) {
    var answer = '';
    switch (val) {
        case 1:
            answer = 'One';
            break;
        case 2:
            answer = 'Two';
            break;
        case 3:
            answer = 'Three';
            break;
        case 4:
            answer = 'Four';
            break;
        case 5:
            answer = 'Five';
            break;
        case 6:
            answer = 'Six';
            break;
        case 7:
            answer = 'Seven';
            break;
        case 8:
            answer = 'Eight';
            break;
        case 9:
            answer = 'Nine';
            break;
        default:
            answer = 'Not a number';
            break;
    }
    return answer;
}

console.log(caseSwitch(1))