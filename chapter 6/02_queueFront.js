// [] SLQueue: Front
// Create SLQueue method front() to return the value at front of our
// queue, without removing it.

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
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }

        this.tail.next = newNode
        this.tail = this.tail.next

    }

    front() {
        if (!this.head){
            return null
        }
        return this.head.val
    }
}

const myQueue = new SLQueue();
myQueue.enqueue(13)
myQueue.enqueue(99)
myQueue.enqueue(3)
myQueue.enqueue(6)
myQueue.enqueue(44)
myQueue.enqueue(23)
console.log(myQueue.front())