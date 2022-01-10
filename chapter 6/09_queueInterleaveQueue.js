// [] SLQueue: Interleave Queue
// Reorder SLQueue values to alternate first half values with second
// half values, in order. For example: (1,2,3,4,5) becomes (1,4,2,5,3). You
// may create one additional SLQueue, if needed.

class Node {
    constructor(val){
        this.val = val
        this. next = null
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



function interleaveQueue(queue) {
    console.log(queue.size())

    return queue
}

const myQueue = new SLQueue();
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.enqueue(5)
console.log(interleaveQueue(myQueue))