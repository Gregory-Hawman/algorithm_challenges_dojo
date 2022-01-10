// [x] ArrStack: Size
// Return the number of stacked values.

let arrStack = []

function push(arr, val){
    return arr.push(val)
}

function top(arr){
    return arr[arr.length - 1]
}

function isEmpty(arr){
    if(arr[0] || arr[0] === 0){
        return false
    } else {
        return true
    }
}

function pop(arr){
    return arr.pop()
}

function contains(arr, val){
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] === val) {
            return true
        }
    }
    return false
}

function size(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        count++
    }
    return count
}

push(arrStack, 0)
push(arrStack, 2)
push(arrStack, 3)
push(arrStack, 4)
push(arrStack, 5)

console.log(size(arrStack))
