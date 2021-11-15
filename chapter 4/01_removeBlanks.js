// Create a function that, given a string, returns all of that string’s
// contents, but without blanks. If given the string " Pl ayTha tF u
// nkyM usi c ", return "PlayThatFunkyMusic".

// function removeBlanks(string) {
//     let givenString = string.split('')
//     let newString = []
//     for (let i = 0; i < givenString.length; i++) {
//         if (givenString[i] !== ' '){
//             newString.push(givenString[i])
//         }
//     }
//     return newString.join('')
// }

function removeBlanks(string) {
    let givenString = string.split(' ')
    return givenString.join('')
}

let testString = ' Pl ayTha tF unkyM usi c '
console.log(removeBlanks(testString))