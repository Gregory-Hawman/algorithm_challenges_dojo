// Create a function that, given a string, returns the string’s acronym
// (first letters only, capitalized). Given " there's no free lunch - gotta
// pay yer way. ", return "TNFL-GPYW". Given "Live from New York,
// it's Saturday Night!", return "LFNYISN".

function acronyms(str){
    let string = str.split(' ')
    let acronymArr = []
    for (let i = 0; i < string.length; i++) {
        acronymArr.push(string[i][0].toUpperCase()) 
    }
return acronymArr.join('')
}

let testStr1 = "there's no free lunch - gotta pay yer way." // "TNFL-GPYW"
let testStr2 = "Live from New York, it's Saturday Night!" //"LFNYISN"

console.log(acronyms(testStr1))
console.log(acronyms(testStr2))
