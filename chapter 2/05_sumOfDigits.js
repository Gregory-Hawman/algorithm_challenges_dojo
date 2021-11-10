// Kaitlin sees beauty in numbers, but also believes that less is more.
// Implement sumToOne(num) that sums a given integer’s digits
// repeatedly until the sum is only one digit. Return that one-digit result.
// Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 =
// 10, then 1+0 = 1.

// function sumToOne(num){
//     let digitSum = 0;
//     while (num > 0) {
//         console.log('==== NEW LOOP ====')
//         console.log('FIRST D',digitSum)
//         digitSum = digitSum + num % 10
//         console.log('SECOND D',digitSum)
//         console.log('FIRST N',num)
//         num = Math.floor(num/10)
//         console.log('SECOND N',num)
//     }
// }

// console.log(sumToOne(928))

function sumToOne(input){
    let digitSum = 0;
    let running = true
    while (running) {
        if (input > 0) {
            digitSum = digitSum + input % 10
            input = Math.floor(input/10)
        } else {
            if (digitSum <= 9) {
                return digitSum
            }
        }
        input = digitSum
        digitSum = 0
        
    }
}

console.log(sumToOne(928))