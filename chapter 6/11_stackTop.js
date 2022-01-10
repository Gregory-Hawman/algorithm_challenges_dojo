// [x] ArrStack: Top
// Return (not remove) the stack’s top value.

let arrStack = []

function push(arr, val){
    return arr.push(val)
}

function top(arr){
    return arr[arr.length - 1]
}

push(arrStack, 0)
push(arrStack, 2)
push(arrStack, 3)
push(arrStack, 4)
push(arrStack, 5)

console.log(top(arrStack))
