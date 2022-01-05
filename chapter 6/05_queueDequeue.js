// [] SLQueue: Dequeue
// Create SLQueue method dequeue() to remove and return value at
// front of queue. Remember, SLQueue uses singly linked list (not
// array).

class Node {
    constructor(val) {
        this.val = val
        this.next = null;
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
    
    dequeue() {
        let dequeued = this.head
        if(this.head.next){
            this.head = this.head.next
            return dequeued
        }
        this.head = null
        this.tail = null
        return dequeued
    }
}

const myQueue = new SLQueue();
myQueue.enqueue(11)
myQueue.enqueue(99)
myQueue.enqueue(3)
myQueue.enqueue(6)
myQueue.enqueue(44)
myQueue.enqueue(23)
console.log(myQueue.head)
console.log('Dequeued ', myQueue.dequeue())
console.log(myQueue.head)
console.log(myQueue.tail)