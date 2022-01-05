// [] SLQueue: Contains
// Create method contains(val) to return whether given value is found
// within our queue

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

    contains(val) {
        let currentNode = this.head
        while(currentNode.next !== this.tail.next) {
            if(currentNode.val === val){
                return true
            }
            currentNode = currentNode.next
        }
        if(this.tail.val === val) {
            return true 
        }
        return false
    }
}

const myQueue = new SLQueue();
myQueue.enqueue(11)
myQueue.enqueue(99)
myQueue.enqueue(3)
myQueue.enqueue(6)
myQueue.enqueue(44)
myQueue.enqueue(23)
console.log(myQueue.contains(23))