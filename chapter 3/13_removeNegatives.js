// Implement removeNegatives() that accepts an array, removes
// negative values, and returns the same array (not a copy), preserving
// non-negatives’ order. As always, do not use built-in array functions.

function removeAt(arr, index) {
    let temp = arr[index];
    for (let i = index; i< arr.length; i++) {
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = temp;
    return arr.pop()
};

function removeNegatives(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] < 0 ) {
            removeAt(arr, i);
        }
    }

    return arr
}

let testArr = [-1, 2, -3, 4, -5 , 6, 7]
console.log(removeNegatives(testArr))