// [] SLQueue: Enqueue
// Create SLQueue method enqueue(val) to add the given value to end
// of our queue. Remember, SLQueue uses a singly linked list (not an
// array).

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
            return
        }

        // O(1) runtime (CONSTANT)
        this.tail.next = newNode
        // this.tail = newNode
        this.tail = this.tail.next

        // O(n) runtime (LINEAR)
        // let currentNode = this.head
        // while(currentNode.next !== null){
        //         currentNode = currentNode.next;
        //     }
        // currentNode.next = newNode
        // this.tail = newNode
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const myQueue = new SLQueue();
myQueue.enqueue(11)
myQueue.enqueue(99)
myQueue.enqueue(3)
myQueue.enqueue(6)
myQueue.enqueue(44)
myQueue.enqueue(23)
console.log(myQueue.head, myQueue.head.next.next, myQueue.tail)