// Given an array of comparable values, move the lowest element to
// array’s front, shifting backward any elements previously ahead of it.
// Do not otherwise change the array’s order. Given [4,2,1,3,5], change
// it to [1,4,2,3,5] and return it. As always, do this without using built-in
// functions.

// function minToFront(arr) {
//     let min = arr[0]
//     let minIndex = 0
    
//     for ( let i = 0; i < arr.length; i++){
//         if (arr[i] < min){
//             min = arr[i]
//             minIndex = i
//         }
//     }
//     console.log(min, minIndex)
//     let temp = arr[minIndex]
//     console.log(temp)

//     for (let i = minIndex; i >= 0; i--){
//         if (i > 0){
//             arr[i] = arr[i-1]
//         } else {
//             arr[i] = temp
//         }
//     }
//     return arr
// }
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
function removeAt(arr, index) {
    let temp = arr[index];
    for ( let i = index; i < arr.length; i++ ){
        arr[i] = arr[i+1]
    };

    arr[arr.length-1] = temp
    return arr.pop()
}

function minToFront(arr) {
    let min = arr[0]
    let minIndex = 0
    
    for ( let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
            minIndex = i
        }
    }
    // insertAt(arr, 0, min)
    // removeAt(arr, minIndex+1)
    removeAt(arr, minIndex)
    insertAt(arr, 0, min)
    
    return arr
}

let testArr = [4,2,1,3,5]

console.log(minToFront(testArr))