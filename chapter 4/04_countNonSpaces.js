// Accept a string and return the number of non-space characters found in the
// string. For example, given "Honey pie, you are driving me crazy", return
// 29 (not 35).

// remove the spaces and count the lenght

function countNonSpaces(str) {
    let arrString = str.split(' ')
    let string = arrString.join('')
    return string.split('').length
}

let testStr = 'Honey pie, you are driving me crazy'

console.log(countNonSpaces(testStr));