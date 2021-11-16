// Associative arrays are sometimes called maps because a key
// (string) maps to a value. Given two arrays, create an associative
// array (map) containing keys of the first, and values of the second.
// For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return
// {"abc": 42, 3: "wassup", "yo": true}.

function zipArrays(arr1, arr2) {
    let zip = {}
    console.log(zip)
    for (let i = 0; i < arr1.length; i++){
        console.log(arr1[i],'=', arr2[i]);
        zip[arr1[i]] = arr2[i]
        console.log(zip)
    }

    return zip
}

let testArr1 = ["abc", 3, "yo"]
let testArr2 = [42, "wassup", true]

console.log(zipArrays(testArr1,testArr2));