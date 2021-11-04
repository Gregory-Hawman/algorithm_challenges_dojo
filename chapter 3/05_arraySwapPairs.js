// Swap positions of successive pairs of values of given array. 
// If length is odd, do not change the final element. 
// For [1,2,3,4], return [2,1,4,3]. 
// For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.

// function swapPairs(arr){
//     if (arr.length % 2 === 0){
//         for (let i = 0; i < arr.length; i += 2){
//             temp = arr[i];
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//         }
//     } else {
//         for (let i = 0; i < arr.length - 1; i += 2){
//             temp = arr[i];
//             arr[i] = arr[i+1]
//             arr[i+1] = temp   
//         }
//     }
//     return arr
// }

// function swapPairs(arr){
//     let stoppingPoint;
    
//     if (arr.length % 2 === 0){
//         stoppingPoint = arr.length
//     } else {
//         stoppingPoint = arr.length - 1 
//     }

//     for (let i = 0; i < stoppingPoint; i += 2){
//         temp = arr[i];
//         arr[i] = arr[i+1]
//         arr[i+1] = temp
//     }
//     return arr
// }

// function swapPairs(arr){
    

//     for (let i = 0; i < arr.length; i += 2){
//         if(i+1 < arr.length){
//             temp = arr[i];
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//         }
//     }
//     return arr
// }

// function swapPairs(arr){
    
//     for (let i = 0; i+1 < arr.length; i += 2){
//         temp = arr[i];
//         arr[i] = arr[i+1]
//         arr[i+1] = temp
//     }
//     return arr
// }

let testArr1 = [1, 2, 3]
let testArr2 = [1, 2, 3, 4]
let testArr3 = [1, 2, 3, 4, 5]

console.log(swapPairs(testArr1));
console.log(swapPairs(testArr2));
console.log(swapPairs(testArr3));