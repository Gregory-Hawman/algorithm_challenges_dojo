// Return the second-largest element of an array. Given
// [42,1,4,Math.PI,7], return 7. If the array is too short, return null.

function secondLargest(arr){
    let largest = arr[0]
    let second = 0
    if (arr.length < 2) return null
    for (let i = 1; i < arr.length; i++){
        if( arr[i] > largest){
            largest = arr[i]
        } else if (arr[i] < largest && arr[i] > second){
            second = arr[i]
        }
    }
    return second
}

let testArr1 = [42,1,4,Math.PI,7]
let testArr2 = [42]
console.log(secondLargest(testArr1))
console.log(secondLargest(testArr2))