// String.concat(str2,str3,...,strX) - add string(s) to end of existing one.
// Return new string.

function stringConcate(...str){
    let string = ''
    let arr = [...str]
    for (let i = 0; i < arr.length; i++){
        string = string + arr[i]
    }
    return string
}

let str1 = '123' 
let str2 = 'abc'
let str3 = 'xyz'

console.log(stringConcate(str1, str2, str3))