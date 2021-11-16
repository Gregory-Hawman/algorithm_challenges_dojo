// Sara is looking to hire an awesome web developer and has received
// applications from various sources. Her assistant alphabetized them
// but noticed some duplicates. Given a sorted array, remove duplicate
// values. Because array elements are already in order, all duplicate
// values will be grouped together. As with all these array challenges,
// do this without using any built-in array methods.
// Second: solve this without using any nested loops.

function removeAt(arr, index) {
    let temp = arr[index];
    for ( let i = index; i < arr.length; i++ ){
        arr[i] = arr[i+1]
    };
    arr[arr.length-1] = temp
    return arr.pop()
}

function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]){
            removeAt(arr, i+1)
            i--
        }
    }
    return arr
}

let testArr = ['apple', 'banana', 'banana', 'cat', 'dog', 'dog', 'dog', 'elephant', 'fish', 'fish', 'goat', 'horse']
console.log(removeDuplicates(testArr))

// Old More Complicated Way To Solve
// function removeDuplicates(arr) {
//     let i = 0
//     while (i < arr.length){
//         if (arr[i] === arr[i+1]){
//             removeAt(arr, i+1)
//             i--
//         } else {
//             i++
//         }
//     }
//     return arr
// }

// Cheaters Way
// function removeDuplicates2(arr) {
//     const set = new Set();
//     for (let i = 0; i< arr.length; i++){
//         set.add(arr[i])
//     }
//     const array = [...set]
//     return array
// }

// let testArr = ['apple', 'banana', 'banana', 'cat', 'dog', 'dog', 'dog', 'elephant', 'fish', 'fish', 'goat', 'horse', undefined]
// console.log(removeDuplicates2(testArr))