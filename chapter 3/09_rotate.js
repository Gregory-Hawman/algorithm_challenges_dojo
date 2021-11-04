// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift
// arr’s values to the right by that amount. ‘Wrap-around’ any values
// that shift off array’s end to the other side, so that no data is lost.
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t
// use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle
// arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

// function rotateArr(arr, shiftBy){
//     let shifting = true
//     let round = 0
//     let i = arr.length - 1 // start i at the ending index of the array
//     let temp = arr[i] // save the last value in the array

//     while (shifting){
//         if (i === 0){ // end of loop
//             arr[i] = temp // set first element of the array to current temp
//             i = arr.length - 1; // reset i to last element of the array
//             temp = arr[i] // reset temp to the last element of the array
//             round++ // increment round to start loop again
//         } else {
//             arr[i] = arr[i-1] // shift the number to the left of current i to the right one
//             i-- // decrement i by 1
//         }

//         if (round === shiftBy){ // check if we have looped the correct number of times
//             shifting = false;
//         }
//     }
//     return arr
// }

// function rotateArr(arr, shiftBy){
//     let shifting = true
//     let round = 0
//     let positive

//     if (shiftBy >= 0){
//         positive = true
//     } else {
//         positive = false
//     }

//     let startIndex = positive ? arr.length - 1 : 0
//     let endIndex = positive ? 0 : arr.length - 1
//     let i = startIndex

//     while (shifting){
//         if (positive) {
//             let temp = arr[i]
//             arr[i] = arr[i-1]
//             arr[i-1] = temp
//             i--
//         } else {
//             let temp = arr[i+1]
//             arr[i+1] = arr[i]
//             arr[i] = temp
//             i++
//         }
//         let temp = arr[i + moveL]
//         arr[i + moveL] = arr[i-1]
//         arr[i-1] = temp


//         if (i === endIndex){
//             round++
//             i = startIndex
//         }

//         if (positive && round === shiftBy){
//             shifting = false;
//         } else if (!positive && round === shiftBy * -1){
//             shifting = false;
//         }
//     }
//     return arr
// }

function rotateArr(arr, shiftBy){
    let shifting = true
    let round = 0
    let positive
    let moveL
    let moveR

    if (shiftBy >= 0){
        positive = true
        moveL = 0
        moveR = -1
    } else {
        positive = false
        moveL = 1
        moveR = 0
    }

    let startIndex = positive ? arr.length - 1 : 0
    let endIndex = positive ? 0 : arr.length - 1
    let i = startIndex

    while (shifting){
        let temp = arr[i + moveL]
        arr[i + moveL] = arr[i + moveR]
        arr[i+ moveR] = temp
        positive ? i-- : i++

        if (i === endIndex){
            round++
            i = startIndex
        }

        if (positive && round === shiftBy){
            shifting = false;
        } else if (!positive && round === shiftBy * -1){
            shifting = false;
        }
    }
    return arr
}

let testArr = [1, 2, 3, 4, 5, 6, 7]
let testArr2 = [1, 2, 3, 4, 5, 6]

console.log(rotateArr(testArr, 4))
console.log(rotateArr(testArr2, -4)) 
