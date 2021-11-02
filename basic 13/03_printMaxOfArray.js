// Given an array, find and print its largest element.

let testArr = [2, 6, 78, 44, 12, 32, 43, 99, 1, 4, 100, 4, 101];

function printMaxOfArray(arr) {
    let max = 0
    for ( let i = 0; i < arr.length; i ++){
        if (arr[i] > max){
            max = arr[i]
        }
    };
    console.log(max);
};

printMaxOfArray(testArr);
