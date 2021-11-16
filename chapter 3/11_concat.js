// Replicate JavaScript’s concat(). Create a standalone function that
// accepts two arrays. Return a new array containing the first array’s
// elements, followed by the second array’s elements. Do not alter the
// original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new
// array ['a','b',1,2].

function concat(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++){
        newArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++){
        newArr.push(arr2[i]);
    }
    return newArr; 
}

let testArr1 = [1, 2, 3];
let testArr2 = ['a', 'b', 'c']
console.log(concat(testArr1, testArr2))