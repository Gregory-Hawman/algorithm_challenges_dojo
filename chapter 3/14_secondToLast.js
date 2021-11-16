// Return the second-to-last element of an array. Given
// [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

function secondToLast(arr){
    if (arr.length < 2){
        return null
    } else {
        return arr[arr.length-2]
    }
}

let testArr1 = [42, true, 4, "Kate", 7]
let testArr2 = [42, true]
let testArr3 = [42]
console.log(secondToLast(testArr1))
console.log(secondToLast(testArr2))
console.log(secondToLast(testArr3))