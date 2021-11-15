// Given a string array and value (length), remove any strings shorter
// than length from the array.

function removeShorterStrings(str, minLength) {
    let arr = str.split(' ')
    let newArr = []
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

let testStr = "Live from New York it is Saturday Night Fever!"
console.log(removeShorterStrings(testStr, 5));