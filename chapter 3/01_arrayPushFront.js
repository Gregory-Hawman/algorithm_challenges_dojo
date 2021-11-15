// Given array and an additional value, insert this value at the
// beginning of the array. Do this without using any built-in array
// methods










































// function arrayPush(arr, insertVal) {
//     let newArray = [insertVal, ...arr];
//     return newArray
// };

// let testArr = [1, 2, 3, 4, 5, 6];

// console.log(arrayPush(testArr, 9));


// function arrayPush(arr, insertVal) {
//     let newArrLength = arr.length
//     for (let i = newArrLength; i >= 0; i--) {
//         if (i > 0) {
//             arr[i] = arr[i - 1]
//         } else {
//             arr[i] = insertVal
//         }
//     }
//     return arr
// }

// function arrayPush(arr, insertVal) {
//     arr.push(insertVal)
//     // get 9 to the front of the array
//     // shift everything else right by 1
//     // loop through backwards
//     // temp = arr[i]
//     // arr[i] = arr[i-1]
//     // arr[i-1] = temp
//     for (let i = arr.length -1; i > 0; i--){
//         let temp = arr[i]
//         arr[i] = arr[i-1]
//         arr[i-1] = temp
//     } 

//     return arr
// }

// let testArr = [2, 3, 4, 5, 6, 7];

// console.log(arrayPush(testArr, 9));