// Associative arrays are also called hashes (we’ll learn why later).
// Build invertHash(assocArr) to convert hash keys to values, and
// values to keys. Example: given {"name": "Zaphod", "charm":
// "high", "morals": "dicey"}, return object {"Zaphod": "name",
// "high": "charm", "dicey": "morals"}.

function invertHash(obj) {
    let invert = {}
    for (key in obj){ // for every key in obj
        invert[obj[key]] = key // the value at obj[key] becomes the key , and the key becomes its value
    }
    return invert
}

let testObj = {"name": "Zaphod", "charm":"high", "morals": "dicey"}
console.log(invertHash(testObj))