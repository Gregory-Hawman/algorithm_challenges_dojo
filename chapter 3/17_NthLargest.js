// Liam has "N" number of Green Belt stickers for excellent Python
// projects. Given arr and N, return the Nth-largest element, where (N-
// 1) elements are larger. Return null if needed.

// sort and then find is the easiest
// NOT SOLVED YET
function nthLargest(arr, n){
    let smallest = arr[0]
    for (let i  = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    for (let i = 0; i < arr.length; i++) {
         
    }
}

let testArr = [22, 44, 5, 16, 7, 99, 13, 25, 4]

console.log(nthLargest(testArr, 5)) // 16