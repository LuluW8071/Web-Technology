function logic(val) {
    if (val > 0 && val < 1000) {
        console.log('Positive Integer');
    }
    else if (val < 0 && val > -1000) {
        console.log('Negative Integer');
    }
    console.log('val:', val);

    if (val > 0 || val < 1000) {
        console.log('Inside')
    }
    else {
        console.log('Outside')
    }
}

logic(100);
// Positive Integer
// val: 100
// Inside