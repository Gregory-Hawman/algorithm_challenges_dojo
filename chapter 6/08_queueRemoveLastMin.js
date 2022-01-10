class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SLQueue {
    constructor(){
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

function removeLastMins(queue) {
    let min = queue.head.val
    let minLoc = [0]
    let queueIndex = 0
    let currentNode = queue.head
    let tailMin = false

    while (currentNode.next !== queue.tail.next) {
        currentNode = currentNode.next
        queueIndex++
        if(currentNode.val <= min){
            min = currentNode.val
            minLoc = []
            minLoc.push(queueIndex)
        }
    }
    if(queue.tail.val <= min){
        tailMin = true
    }

    let minLocIndex = 0
    currentNode = queue.head
    let newTail = queueIndex - 1
    queueIndex = 0

    if (minLoc[0] === 0) {
        queue.head = queue.head.next
        minLoc.shift()
    }
    if(tailMin) {
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
        if(queueIndex === minLoc[minLocIndex] - 1) {
            currentNode.next = currentNode.next.next
            queueIndex ++
            minLocIndex++
            minLoc.pop()
        }
        currentNode = currentNode.next
        queueIndex ++
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
myQueue.enqueue(2)
myQueue.enqueue(7)
myQueue.enqueue(5)
myQueue.enqueue(2)
myQueue.enqueue(3)
console.log(removeLastMins(myQueue))