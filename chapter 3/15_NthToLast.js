// Return the element that is N-from-array’s-end. Given
// ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

function nthToLast(arr, n){
    if (arr.length < n){
        return null;
    } else return arr[arr.length - n]
}

let testArr = [5,2,3,6,4,9,7]
console.log(nthToLast(testArr, 3))
console.log(nthToLast(testArr, 8))