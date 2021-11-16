// Create a function messyMath(num) that will return the following sum:
// add all integers from 0 up to the given num, except for the following
// special cases of our count value:
// 1. If current count (not num) is evenly divisible by 3, don’t
// add to sum; skip to the next count;
// 2. Otherwise, if current count is evenly divisible by 7,
// include it twice in sum instead of once;
// 3. Regardless of the above, if current count is exactly 1/3 of
// num, return -1 immediately.
// For example, if given num is 4, return 7. If given num is 8, return 34.
// If given num is 15, return -1.

function messyMath(num) {
    sum = 0;
    for (let i = 0; i <= num; i++){
        if( i === ((1/3) * num)){
            return -1
        } else if (i % 3 === 0){
            null
        } else if (i % 7 === 0){
            sum = sum + 2*i
        } else {
            sum = sum + i
        }
    }
    return sum
}

console.log(messyMath(4))
console.log(messyMath(8))
console.log(messyMath(15))