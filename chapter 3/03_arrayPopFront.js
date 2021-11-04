// Given array, remove and return the value at the beginning of the
// array. Do this without using any built-in array methods except pop().

function popFront(arr) {
    let temp = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(i === arr.length - 1){
            arr[i] = temp
        } else {
            arr[i] = arr[i+1]
        }
    }
    return arr.pop()
}

function popFront2(arr) {
    let temp = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1]
    }
    
    arr.pop()
    return temp
}

let testArr = [2, 3, 4, 5, 6, 7];

console.log(popFront(testArr));
console.log(testArr);
console.log(popFront2(testArr));
console.log(testArr);