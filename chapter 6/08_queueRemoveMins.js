// [] SLQueue: Remove Minimums
// Create a standalone function to remove an SLQueue’s lowest value,
// otherwise leaving values in the same sequence. Use only local
// variables; allocate no other objects. Remove all duplicates of this
// value.
// Bonus: Remove only the last minimum value. Convert [7,2,5,2,4] to
// [7,2,5,4].

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SLQueue {
    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue(val) {
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
            return
        }
        this.tail.next = newNode
        this.tail = this.tail.next
    }
}

// loop through the queue, and find the min val(s) and location(s)
// set min as head
// set location as [1] 
// set count location as 1
// track the current node you are looking at, starting at head
// check if next is less than current
    // if yes, new min, set new location as [count]
    // if no, go to next
    // if equal add count to location
// once at end will have min
// loop again to remove mins
// you get to the location[count-1] // the one before the min
// location[count-1].next = location[count-1].next.next // skip the min

function removeAllMins(queue) {
    let min = queue.head.val
    let minLocations = []
    let count = 1
    let currentNode = queue.head
    let tailMin = false

    while (currentNode.next !== queue.tail.next) {
        currentNode = currentNode.next
        count++
        if(currentNode.val < min){
            min = currentNode.val
            minLocations = []
            minLocations.push(count)
        } else if(currentNode.val === min){
            minLocations.push(count)
        }
        // console.log('COUNT:', count, 'VAL:', currentNode.val, 'MIN:', min, 'MIN-ARR', minLocations) // checking that this works in every loop
    }
    if(queue.tail.val < min){
        min = currentNode.val
        minLocations = []
        minLocations.push(count)
        tailMin = true
    } else if (queue.tail.val === min) {
        minLocations.push(count)
        tailMin = true
    }

    // if there are back to back mins, this below will miss the 2nd one
    // currentNode = queue.head //reset currentNode
    // count = 1 // reset count
    // let i = 0 // pointer for each val in minLocations
    
    // while (i < minLocations.length) {
    //     // console.log('COUNT:', count, 'INDEX:', i, 'VAL:', currentNode.val, 'NEXT:', currentNode.next.val)
    //     // only activates when you are on the node before each min.
    //     if(count === minLocations[i] - 1) {
    //         currentNode.next = currentNode.next.next
    //         count ++ // count 'skips' the min node but doesn't lose it's spot in the count
    //         i++
    //     }
    //     currentNode = currentNode.next
    //     // console.log(count)
    //     count ++
    // }

    // remove the last one, pop off the value, repeat until min array length is 0
    let i = minLocations.length - 1 
    currentNode = queue.head
    let newTail = count - 1
    count = 1
    if(tailMin) {
        while(i > minLocations.length - 2){
            if (count === newTail){
                queue.tail = currentNode
                i--
            }
            currentNode = currentNode.next
            count ++
        }
    }
    while (minLocations.length > 0) {
        // console.log('COUNT:', count, 'INDEX:', i, 'VAL:', currentNode.val, 'NEXT:', currentNode.next.val)
        if(count === minLocations[i] - 1){
            currentNode.next = currentNode.next.next // skip the min in the queue
            count = 1
            currentNode = queue.head
            i--
            minLocations.pop()
            continue
        }
        currentNode = currentNode.next
        count++
    }

    // Get all the values from a queue
    currentNode = queue.head
    let queueValues = []
    while (currentNode.next !== queue.tail.next) {
        queueValues.push(currentNode.val)
        currentNode = currentNode.next
    }
    queueValues.push(queue.tail.val)
    return queueValues
}

function removeLastMins(queue) {
    let min = queue.head.val
    let minLocations = []
    let count = 1
    let currentNode = queue.head
    let tailMin = false

    while (currentNode.next !== queue.tail.next) {
        currentNode = currentNode.next
        count++
        if(currentNode.val < min){
            min = currentNode.val
            minLocations = []
            minLocations.push(count)
        } else if(currentNode.val === min){
            minLocations.push(count)
        }
    }
    if(queue.tail.val <= min){
        tailMin = true
    }

    let i = 0
    currentNode = queue.head
    let newTail = count - 1
    count = 1

    if(tailMin) {
        while(i < 1){
            if (count === newTail){
                queue.tail = currentNode
                i++
            }
            currentNode = currentNode.next
            count ++
        }
    } else {
        while (i < 1) {
            if(count === minLocations[minLocations.length-1] - 1) {
                currentNode.next = currentNode.next.next
                count ++
                i++
            }
            currentNode = currentNode.next
            count ++
        }
    }

    currentNode = queue.head
    let queueValues = []
    while (currentNode.next !== queue.tail.next) {
        queueValues.push(currentNode.val)
        currentNode = currentNode.next
    }
    queueValues.push(queue.tail.val)
    return queueValues
}

const myQueue = new SLQueue();
myQueue.enqueue(55)
myQueue.enqueue(99)
myQueue.enqueue(23)
myQueue.enqueue(36)
myQueue.enqueue(5)
myQueue.enqueue(5)
myQueue.enqueue(24)
myQueue.enqueue(10)
myQueue.enqueue(3)
myQueue.enqueue(444)
myQueue.enqueue(20)
myQueue.enqueue(3)
myQueue.enqueue(77)
myQueue.enqueue(31)
myQueue.enqueue(3)
myQueue.enqueue(5)
myQueue.enqueue(10)
myQueue.enqueue(3)
console.log(removeAllMins(myQueue))
console.log(removeAllMins(myQueue))
console.log(removeLastMins(myQueue))