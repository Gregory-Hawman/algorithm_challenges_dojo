// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). 
// Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

function sigma(num) {
    let sum = 0
    for (let i = 1; i <= num; i++){
        sum = sum + i;
    }
    return sum
}

let num = 7;
console.log(sigma(num));

