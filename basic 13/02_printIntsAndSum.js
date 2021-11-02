// Print integers from 0 to 255, and with each integer print the sum so far.

function printIntsAndSum() {
    let sum = 0

    for (let i = 0; i < 256; i++){
        sum = sum + i
        console.log(sum)
    };
};

printIntsAndSum();

