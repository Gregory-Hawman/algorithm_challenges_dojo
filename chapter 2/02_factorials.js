// Just the Facts, ma’am. Factorials, that is. Write a function
// factorial(num) that, given a number, returns the product
// (multiplication) of all positive integers from 1 up to number
// (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) =
// 120 (or 1 * 2 * 3 * 4 * 5).

function factorials(num) {
    let fact = 1
    for (let i = 1; i <= num; i++){
        fact = fact * i;
    };
    return fact;
};

let num = 10;
console.log(factorials(num));