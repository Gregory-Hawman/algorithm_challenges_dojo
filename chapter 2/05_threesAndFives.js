// Create threesFives() that adds values from 100 and 4000000
// (inclusive) if that value is evenly divisible by 3 or 5 but not both.
// Display the final sum in the console.

// Second: Create betterThreesFives(start,end) that allows you to enter
// arbitrary start and end values for your range. Think of threesFives()as
// betterThreesFives(100,4000000).

function threesFives() {
    let sum = 0
    for (let i = 100; i < 4000000; i++) {
        if (i % 3 === 0 || i % 5 === 0){
            sum = sum+i
        }
    }
    return sum
}

function betterThreesFives(min, max) {
    let sum = 0
    for (let i = min; i < max; i++) {
        if (i % 3 === 0 || i % 5 === 0){
            sum = sum+i
        }
    }
    return sum
}

console.log(threesFives())
console.log(betterThreesFives(10, 100))

