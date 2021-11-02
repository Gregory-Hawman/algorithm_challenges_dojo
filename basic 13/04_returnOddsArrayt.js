// Create an array with all the odd integers between 1 and 255 (inclusive).

let oddArray = [];

function oddsOfArray(arr) {
    for (let i = 1; i < 256; i ++) {
        if (i % 2 !== 0){
            arr.push(i)
        }
    };
    return arr
};

console.log(oddsOfArray(oddArray))