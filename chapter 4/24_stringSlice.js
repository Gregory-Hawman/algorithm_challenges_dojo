// String.slice(start,end) - extract part of a string and return in a new
// one. Start and end are indices into the string, with the first character
// at index 0. End param is optional and if present, refers to one
// beyond the last character to include.
// Bonus: include support for negative indices, representing offsets
// from string-end. Example: String.slice(-1) returns the string’s last
// character.

function stringSlice(str, start, end = null){
    let arr = str.split('')

    if (start < 0){
        start = arr.length + start
    }
    if (!end) {
        end = arr.length-1
    } else if (end < 0){
        end = arr.length + end
    }
    if (start === end){ 
        return arr[arr.length-1]
    }

    let i = 0
    while(i < start) {
        for(let j = 0; j < end -1; j++){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        i++
    }
    let diff = end - start
    let k = arr.length-1
    while( k > diff - 1) {
        arr.pop()
        k--
    }
    return arr.join('')
}

let testStr = 'abcdefg hijklmnop qrstuv wxyz'
console.log(stringSlice(testStr, -1));