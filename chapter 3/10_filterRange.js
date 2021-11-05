// Alan is good at breaking secret codes. One method is to eliminate
// values that lie within a specific known range. Given arr and values
// min and max, retain only the array values between min and max.
// Work in-place: return the array you are given, with values in original
// order. No built-in array functions.

function filterRange(arr, min, max) {
    let filtering
    if (min === 0){
        filtering = false
    } else {
        filtering = true
    }
    
    let loops = 0
    let diff = max - min

    while (filtering){
        for (let i = 0; i < max; i++) {
            let temp = arr[i+1]
            arr[i+1] = arr[i]
            arr[i] = temp
        }

        loops++

        if(loops === min){
            filtering = false
        }
    }

    let len = arr.length // to keep the len constant while the loop pops
    for (let i = diff + 1; i < len; i++) { // diff + 1 so the pop starts at the index after the filter
        arr.pop()
    }
    return arr
}
 let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 99, 55, 77, 82]

console.log(filterRange(testArr, 0, 17));
