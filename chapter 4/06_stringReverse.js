// Implement reverseString(str) that, given string, returns that string
// with characters reversed. Given "creature", return "erutaerc".
// Tempting as it seems, do not use the built-in reverse()!

function reverseString(str) {
    let result = ''

    for (let i = str.length - 1; i >= 0; i--){
        console.log(i)
        console.log(str[i])
        result += str[i]
    }

    return result
}

console.log(reverseString('creature'))