// Lovely Burbank has a breathtaking view of the Los Angeles skyline.
// Let’s say you are given an array with heights of consecutive
// buildings, starting closest to you and extending away. Array [-1,7,3]
// would represent three buildings: first is actually out of view below
// street level, behind it is second at 7 stories high, third is 3 stories
// high (hidden behind the 7-story). You are situated at street level.
// Return array containing heights of buildings you can see, in order.
// Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with
// challenges, do not use built-in array functions such as unshift().

function removeAt(arr, index) {
    let temp = arr[index];

    for ( let i = index; i < arr.length; i++ ){
        arr[i] = arr[i+1]
    };

    arr[arr.length-1] = temp
    arr.pop()
}



function skylineHeights(arr){
    let max = 0;
    let i = 0;
    
    while (i < arr.length) {
        if (arr[i] > max){
            max = arr[i];
            i++
        } else {
            removeAt(arr, i)
        }
    } 
    return arr
}

let testArr = [-1, 1, 1, 3, 7, 3, 4, 3, 5, 3]

console.log(skylineHeights(testArr));