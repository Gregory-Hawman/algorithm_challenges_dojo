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

function removeAllMins(queue) {
    let min = queue.head.val
    let minLoc = [0]
    let queueIndex = 0
    let currentNode = queue.head
    
    // first loop, looking for the locations of mins
    while (currentNode.next !== queue.tail.next) {
        currentNode = currentNode.next
        queueIndex++
        if(currentNode.val < min){
            min = currentNode.val
            minLoc = []
            minLoc.push(queueIndex)
        } else if(currentNode.val === min){
            minLoc.push(queueIndex)
        }
    }

    // check the tail if it is min or includes min
    let tailMin = false
    if(queue.tail.val < min){
        min = currentNode.val
        minLoc = []
        minLoc.push(queueIndex)
        tailMin = true
    } else if (queue.tail.val === min) {
        tailMin = true
    }

    let minLocIndex = 0
    currentNode = queue.head
    let newTail = queueIndex - 1
    queueIndex = 0
 
    // check if head or tail are mins
    if (queue.head.val === min) {
        queue.head = queue.head.next
        minLoc.shift()
    }

    if (tailMin) {
        while(minLocIndex < 1){
            if (queueIndex === newTail){
                queue.tail = currentNode
                minLoc.pop()
                minLocIndex++
            }
            currentNode = currentNode.next
            queueIndex ++
        }
    }

    currentNode = queue.head
    queueIndex = 0
    minLocIndex = 0

    while (minLoc.length > 0) {
        if(queueIndex === minLoc[minLocIndex] - 1){
            currentNode.next = currentNode.next.next
            queueIndex = 0
            currentNode = queue.head
            minLocIndex = 0
            minLoc.shift()
            continue
        }
        currentNode = currentNode.next
        queueIndex++
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

const myQueue = new SLQueue();
myQueue.enqueue(7)
myQueue.enqueue(5)
myQueue.enqueue(2)
myQueue.enqueue(2)
myQueue.enqueue(4)
console.log(removeAllMins(myQueue))