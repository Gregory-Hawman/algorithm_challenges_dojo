// Given array, remove and return the value at the beginning of the
// array. Do this without using any built-in array methods except pop().

function popFront(arr) {
    let temp = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = temp
    return arr.pop()
}

let testArr = [2, 3, 4, 5, 6, 7];
console.log(popFront(testArr));

// Other Way to Solve
// function popFront2(arr) {
//     let temp = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i+1]
//     }
//     arr.pop()
//     return temp
// }

// let testArr2 = [2, 3, 4, 5, 6, 7];
// console.log(popFront2(testArr2));
