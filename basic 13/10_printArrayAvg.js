// Analyze an array’s values and print the average.

function printArrayAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    console.log(avg);
};


let testArr = [1, 2, 3, 4, 55];

printArrayAvg(testArr);