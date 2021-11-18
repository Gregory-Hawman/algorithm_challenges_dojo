// String.search(val) - search string for the given val (another string).
// Return the index position of the first match found (or -1 if not found).

function stringSearch(str, val){
    for (let i = 0; i < str.length; i++){
        let foundMatch = true
        for (let j = 0; j < val.length; j++){
            if (val[j] !== str[i+j]){
                foundMatch = false
                break;
            }
        }
        if (foundMatch){
            return i
        }
    }
    return -1
}

let testStr = 'abcdfgcde'
let val = 'cde'
console.log(stringSearch(testStr, val))