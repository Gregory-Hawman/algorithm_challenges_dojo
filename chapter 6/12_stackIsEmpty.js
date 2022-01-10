// [x] ArrStack: Is Empty
// Return whether the stack is empty.

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

push(arrStack, 0)
push(arrStack, 2)
push(arrStack, 3)
push(arrStack, 4)
push(arrStack, 5)

console.log(isEmpty(arrStack))
