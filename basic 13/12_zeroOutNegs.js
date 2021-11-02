// Return the given array, after setting any negative values to zero.

function zeroOutArrayNegatives(arr) {
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            arr[i] = 0;
        }
    };
    return arr
};

let testArr = [-1, -2, -3, 1, 2, 3, 5, -7, 18, 19, -20];

console.log(zeroOutArrayNegatives(testArr));
