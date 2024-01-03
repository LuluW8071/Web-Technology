var count = 0;

function cc(card) {
    switch (card) {
        case 1:
        case 2:
        case 3:
        case 4:
            count++;
            break;
        case 10:
        case 'K':
        case 'Q':
        case 'J':
            count--;
            break;
        default:
            break;
    }

    var holdbet = 'hold'
    if (count > 0) {
        holdbet = 'bet'
    }
    return count + ' ' + holdbet;

}

cc(2); cc(3); cc(4); cc('A'); cc('K')
console.log(cc(2));
console.log(cc('Q'));
