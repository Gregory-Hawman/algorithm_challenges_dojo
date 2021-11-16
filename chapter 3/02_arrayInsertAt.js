// Given array, index, and additional value, insert the value into array at
// given index. Do this without using built-in array methods. You can
// think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, index, val) {
    arr.push(val)
    for (let i = arr.length-1; i > index; i--) {
        let temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
    }
    return arr
}

let testArr = [2, 3, 4, 5, 6, 7];
console.log(insertAt(testArr, 3, 9));

// Other Way To Solve
// function insertAt(arr, index, val) {
//     let newArrLength = arr.length
//     for (let i = newArrLength; i >= index; i--) {
//         if (i > index) {
//             arr[i] = arr[i - 1]
//         } else {
//             arr[i] = val
//         }
//     }
//     return arr
// }

// let testArr = [2, 3, 4, 5, 6, 7];
// console.log(insertAt(testArr, 3, 9));