// Alan is good at breaking secret codes. One method is to eliminate
// values that lie within a specific known range. Given arr and values
// min and max, retain only the array values between min and max.
// Work in-place: return the array you are given, with values in original
// order. No built-in array functions.

function removeAt(arr, index) {
    let temp = arr[index];
    for (let i = index; i < arr.length; i++){
        arr[i] = arr[i+1];
    };
    arr[arr.length-1] = temp
    arr.pop()
}

function filterRange(arr, min, max){
    let i = 0;
    while(i < arr.length){
        if(arr[i] < min || arr[i] > max){
            removeAt(arr, i)
            i--
        }
        i++
    }
    return arr
}

let testArr = [1, 22, 3, 44, 5, 61, 17, 8, 9, 101, 11, 12, 13, 141, 99, 55, 77, 82]
console.log(filterRange(testArr, 2, 18));

// Way To Solve If Range Is The Indexs Not Values
// function filterRange(arr, min, max) {
//     let filtering
//     if (min === 0){
//         filtering = false
//     } else {
//         filtering = true
//     } 
//     let loops = 0
//     let diff = max - min
//     while (filtering){
//         for (let i = 0; i < max; i++) {
//             let temp = arr[i+1]
//             arr[i+1] = arr[i]
//             arr[i] = temp
//         }
//         loops++
//         if(loops === min){
//             filtering = false
//         }
//     }

//     let len = arr.length // to keep the len constant while the loop pops
//     for (let i = diff + 1; i < len; i++) { // diff + 1 so the pop starts at the index after the filter
//         arr.pop()
//     }
//     return arr
// }
