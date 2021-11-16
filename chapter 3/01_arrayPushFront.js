// Given array and an additional value, insert this value at the
// beginning of the array. Do this without using any built-in array
// methods

function arrayPush(arr, val) {
    arr.push(val)
    for (let i = arr.length -1; i > 0; i--){
        let temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
    } 
    return arr
}

let testArr = [2, 3, 4, 5, 6, 7];
console.log(arrayPush(testArr, 9));

// Other Ways To Solve
// function arrayPush(arr, insertVal) {
//     let newArray = [insertVal, ...arr];
//     return newArray
// };

// let testArr = [1, 2, 3, 4, 5, 6];
// console.log(arrayPush(testArr, 9));


// function arrayPush(arr, val) {
//     let newArrLength = arr.length
//     for (let i = newArrLength; i >= 0; i--) {
//         if (i > 0) {
//             arr[i] = arr[i - 1]
//         } else {
//             arr[i] = val
//         }
//     }
//     return arr
// }

// let testArr = [2, 3, 4, 5, 6, 7];
// console.log(arrayPush(testArr, 9));