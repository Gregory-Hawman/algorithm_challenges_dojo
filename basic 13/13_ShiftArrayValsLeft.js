// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

function shiftArrayValsLeft(arr) {
    for ( let i = 0; i < arr.length; i++ ){
        if (i === arr.length - 1){
            arr[i] = 0;
        } else {
            arr[i] = arr[i + 1];
        }
    };
    return arr
};

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(shiftArrayValsLeft(testArr));