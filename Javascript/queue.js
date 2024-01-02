function queue(arr, item) {
    arr.push(item);
    return item;
}

var inqueue = [1, 2, 3, 4];
console.log('Before: ' + JSON.stringify(inqueue));
console.log(queue(inqueue, 5));
console.log('After: ' + JSON.stringify(inqueue));