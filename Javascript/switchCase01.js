// Switch Case is simpler,
// when if-else statement has equality operator used
function getDayName(dayNum) {
    let dayName;
    switch (dayNum) {
        case 0:
            dayName = 'Sunday';
            break;
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        default:
            dayName = 'Invalid day number';
    }
    return dayName;
}

console.log(getDayName(3)); // Wednesday
console.log(getDayName(6)); // Saturday
console.log(getDayName(8)); // Invalid day number
