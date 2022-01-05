// [] SLQueue: Compare Queues
// Given two SLQueue objects, create a standalone function that
// returns whether they are equal. Queues are equal only if they have
// equal elements in identical order. Allocate no other object, and return
// the queues in their original condition upon exit

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
        }
        this.tail.next = newNode
        this.tail = this.tail.next
    }
}

// track the current nodes in both queues
// check if the heads of each queues are equal
// if equal, point to the next nodes and check if they are equal 
// do it until the current nodes are equal to the tail
// if the tails are equal the whole queues are equal return true
// if unequal at anytime reture false

function compareQueues(queue1, queue2) {
    let currentNodeQ1 = queue1.head
    let currentNodeQ2 = queue2.head

    while(currentNodeQ1.next !== queue1.tail.next && currentNodeQ2.next !== queue2.tail.next) {
        if(currentNodeQ1.val === currentNodeQ2.val){
            currentNodeQ1 = currentNodeQ1.next
            currentNodeQ2 = currentNodeQ2.next
            continue
        }
        return false
    }
    if(queue1.tail.val === queue2.tail.val){
        return true
    }
    return false
}

const myQueue = new SLQueue();
myQueue.enqueue(11)
myQueue.enqueue(99)
myQueue.enqueue(3)
myQueue.enqueue(6)
myQueue.enqueue(44)
myQueue.enqueue(23)

const myQueue2 = new SLQueue();
myQueue2.enqueue(11)
myQueue2.enqueue(99)
myQueue2.enqueue(3)
// myQueue2.enqueue(4)
myQueue2.enqueue(6)
myQueue2.enqueue(44)
// myQueue2.enqueue(23)
myQueue2.enqueue(24)

console.log(compareQueues(myQueue, myQueue2))