// Create a standalone function that locates the minimum value in a
// linked list, and moves that node to the front of the list. Return the
// new list, with all nodes still present, and all (except for the new head
// node) in their original order.

// figue out the position of the min in the list
// track the length and lenToMin
// save min node in temp var
// remove min node from list min.prev = prev prev.next = min.next
// save currentHead in a temp
// this.head now equals min and points to the old head of the list

class SList {
    constructor(){
        this.head = null
    }

    add(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            return
        }
        let currentNode = this.head
        while (currentNode.next !== null){
            currentNode = currentNode.next
        }
        currentNode.next = newNode
    }

    display() {
        // returns a string of all of the list values
        let result = []
        let currentNode = this.head
        if (!this.head) {
            return null
        }
        while (currentNode.next !== null) {
            if (this.head === currentNode) {
                result.push(currentNode.val)
            }
            currentNode = currentNode.next
            result.push(currentNode.val)
        }
        return result.join(' ')
    }

    minLocation() {
        if(!this.head) {
            return null
        }

        let nodeIndex = 0
        let minIndex = nodeIndex
        let currentNode = this.head
        let min = currentNode.val
        while (currentNode.next !== null) {
            if (currentNode.val < min){
                minIndex = nodeIndex
                min = currentNode.val
            }
            nodeIndex ++
            currentNode = currentNode.next
        }
        if (currentNode.val < min) {
            return minIndex = nodeIndex
        }
        return minIndex
    }


    minToFront() {
        let nodeIndex = 0
        let minIndex = this.minLocation()
        let currentNode = this.head

        while (nodeIndex < minIndex - 1) {
            currentNode = currentNode.next
            nodeIndex ++
        }
        
        let min = currentNode.next
        currentNode.next = currentNode.next.next

        let oldHead = this.head
        this.head = min 
        this.head.next = oldHead

        return this.display()
    }
}

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

const myList = new SList();
myList.add(11)
myList.add(99)
myList.add(3)
myList.add(6)
myList.add(23)
console.log(myList.display())
console.log(myList.minToFront())