// Create a JavaScript function that given a string, returns the integer
// made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the
// function should return the number 1357924680.

function getDigits(str) {
    let splitStr = str.split('')
    let digitArr = []
    for (let i = 0; i < splitStr.length; i++) {
        if (!isNaN(splitStr[i])){
            digitArr.push(splitStr[i])
        }
    }
    return digitArr.join('')
}

let testStr = "0s1a3y5w7h9a2t4?6!8?0"
console.log(getDigits(testStr))