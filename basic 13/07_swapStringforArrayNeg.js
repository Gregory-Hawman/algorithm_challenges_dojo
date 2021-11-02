// Given an array of numbers, replace any negative values with the string 'Dojo'.

let testArray = [1, 5, 9, -3, 4, -7, 2 , -6, -66, 4];

function swapStringForNegativeValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            arr[i] = 'Dojo'
        }
    };
    return arr
};

console.log(swapStringForNegativeValues(testArray));