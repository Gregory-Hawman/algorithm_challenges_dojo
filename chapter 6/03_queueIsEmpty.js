// [] SLQueue: Is Empty
// Create SLQueue method isEmpty() that returns whether our queue
// contains no values.

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
            this.tail = newNode
        }

        this.tail.next = newNode
        this.tail = this.tail.next
    }

    isEmpty() {
        if (this.head){
            return false
        }
        return true
    }
}

const myQueue = new SLQueue()
console.log(myQueue.isEmpty())

