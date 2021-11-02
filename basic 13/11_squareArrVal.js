// Square each value in a given array, returning that same array with changed values.

function squareArrayValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    };
    return arr
};

let testArray = [1, 2, 3, 4, 5];

console.log(squareArrayValue(testArray));