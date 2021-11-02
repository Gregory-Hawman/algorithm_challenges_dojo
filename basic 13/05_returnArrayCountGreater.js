// Given an array and a value Y, count and print the number of array values greater than Y.

let array = [1, 2, 3, 55, 66 , 77, 33, 22, 11, 45];
let value = 42

function returnArrayCountGreaterThanY(arr, y) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y){
            count += 1;
        }
    };
    return count
};

console.log(returnArrayCountGreaterThanY(array, value));