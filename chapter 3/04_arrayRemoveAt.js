// Given array and an index into array, remove and return the array
// value at that index. Do this without using built-in array methods
// except pop(). Think of popFront(arr) as equivalent to
// removeAt(arr,0).

function removeAt(arr, index) {
    let temp = arr[index];
    for ( let i = index; i < arr.length; i++ ){
        arr[i] = arr[i+1]
    };
    arr[arr.length-1] = temp
    return arr.pop()
}

let testArr = [2, 3, 4, 5, 6, 7]; // [2, 3, 4, 6, 7]
console.log(removeAt(testArr, 3));

// Other Way To Solve
// function removeAt(arr, index) {
//     let temp = arr[index];
//     for ( let i = 0; i < arr.length; i++ ){
//         if ( i < index){
//             arr[i] = arr[i]
//         } else {
//             arr[i] = arr[i+1]
//         }
//     };
//     arr[arr.length-1] = temp
//     return arr.pop()
// }

// let testArr = [2, 3, 4, 5, 6, 7]; // [2, 3, 4, 6, 7]
// console.log(removeAt(testArr, 3));