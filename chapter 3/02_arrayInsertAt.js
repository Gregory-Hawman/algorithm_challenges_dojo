// Given array, index, and additional value, insert the value into array at
// given index. Do this without using built-in array methods. You can
// think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, index, value) {
    let newArrLength = arr.length
    for (let i = newArrLength; i >= index; i--) {
        if (i > index) {
            arr[i] = arr[i - 1]
        } else {
            arr[i] = value
        }
    }
    return arr
}

let testArr = [2, 3, 4, 5, 6, 7];

console.log(insertAt(testArr, 0, 9));