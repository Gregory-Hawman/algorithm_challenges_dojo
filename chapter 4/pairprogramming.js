function split(input, seperator) {
    let result = [];
    let subString = ''
    for (let i = 0; i < input.length; i++) {
        if (input[i] === seperator[0] || seperator === '') {
            subString += input[i]
            let stringMatches = true
            // starting j at 1 because we already know 0 is a match
            for (let j = 1; j < seperator.length; j++) {
                if (seperator[j] !== input[i+j]){
                    // this seperator doesn't match current part of string
                    stringMatches = false
                    break;
                }
            }
            if (stringMatches){
                subString.length-- 
                result.push(subString)
                subString = ''
                i += seperator.length > 0 ? seperator.length - 1 : 0
            }
        } else {
            subString += input[i] 
        }
    }
    result.push(subString)
    return result 
}

console.log(split('i should be split', ' '))
console.log(split('i should be split', ''))
console.log(split('i should be split', 'd be'))