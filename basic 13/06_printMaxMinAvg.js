// Given an array, print the max, min and average values for that array.

let testArray = [1, 2, 3, 4, 5, 66, 7, 8, 9, 88, -7, 6, 55, 4, 37, 2, 1, 70];

function printMaxMinAvgArrayValues(arr) {
    let max = 0;
    let min = arr[0];
    let sum = 0;

    for (let i = 1; i < arr.length; i++){
        sum = sum + arr[i];
        if (arr[i] < min){
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
    };

    let avg = sum / arr.length;
    console.log('MAX', max, 'MIN', min, 'AVG', avg);
};

printMaxMinAvgArrayValues(testArray);