// [] SLQueue: Size
// Create SLQueue method size() that returns the number of values in
// our queue.

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

    size() {
        if(!this.head) {
            return 0
        }
        let currentNode = this.head
        let count = 1
        while(currentNode.val !== this.tail.val) {
            currentNode = currentNode.next
            count++
        }
        return count
    }
}

const myQueue = new SLQueue();
myQueue.enqueue(11)
myQueue.enqueue(99)
myQueue.enqueue(3)
myQueue.enqueue(6)
myQueue.enqueue(44)
myQueue.enqueue(23)
myQueue.enqueue(77)
myQueue.enqueue(31)
myQueue.enqueue(16)
myQueue.enqueue(444)
myQueue.enqueue(20)
console.log(myQueue.size())