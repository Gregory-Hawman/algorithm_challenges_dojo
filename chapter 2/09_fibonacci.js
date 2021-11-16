// Create a function to generate Fibonacci numbers. In this famous
// mathematical sequence, each number is the sum of the previous
// two, starting with values 0 and 1. Your function should accept one
// argument, an index into the sequence (where 0 corresponds to the
// initial value, 4 corresponds to the value four later, etc). Examples:
// fibonacci(0) = 0 (given), 
// fibonacci(1) = 1 (given),
// fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
// fibonacci(3) = 2 (fib(1)+fib(2), or 1+1),
// fibonacci(4) = 3 (1+2), 
// fibonacci(5) = 5 (2+3), 
// fibonacci(6) = 8 (3+5),
// fibonacci(7) = 13 (5+8), etc.

function fibonacci(index){
    let a = 0;
    let b = 1;
    let sum = 0

    if ( index < 1){
        return a
    } else if ( index < 2) {
        return b
    }

    for (let i = 1; i < index; i++) {
        sum = a + b
        // console.log(sum)
        a = b
        b = sum
    }
    return sum
}

console.log(fibonacci(0))

function fibonacciRecursion(num, cache) {
    cache = cache || {}
    // console.log(cache)
    if (cache[num]) return cache[num]
    if(num < 1) {
        return 0 
    } else if (num < 2){
        return 1
    }
    return cache[num] = fibonacciRecursion(num - 1, cache) + fibonacciRecursion(num - 2, cache);
}

console.log(fibonacciRecursion(0))