// The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:
// 1) Set aside the last digit; do not include it in these calculations (until step 5);
// 2) Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
// 3) If any results are larger than 9, subtract 9 from them;
// 4) Add all numbers (not just our odds) together;
// 5) Now add the last digit back in – the sum should be a multiple of 10.
// For example, when given digit array [5,2,2,8,2], after step 1) it becomes [5,2,2,8], then after step 2) it is [5,4,2,16]. Post-3) we have [5,4,2,7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true. If the final digit were any non- multiple-of-10, we would instead return false.

function isCreditCardValid(arr) {
    let last = arr.pop();
    for ( let i = arr.length - 1; i > 0; i -= 2){
        arr[i] *= 2
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 9){
            arr[i] -= 9
        }
    }
    let sum = 0
    for ( let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    sum = sum + last

    return(sum % 10 === 0)
}

let testArr1 = [1,5,3,6,5,7,7,8,9,3,1,8,5]
let testArr2 = [1,5,3,6,5,7,7,8,9,3,1,8,4]
console.log(isCreditCardValid(testArr1));
console.log(isCreditCardValid(testArr2));