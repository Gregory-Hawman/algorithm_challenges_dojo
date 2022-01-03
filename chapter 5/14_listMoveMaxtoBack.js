// Create a standalone function that locates the maximum value in a
// linked list, and moves that node to the back of the list. Return the
// new list, with all nodes still present, and all in their original order
// except for the node you moved to the end of the singly linked list.

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

    maxLocation() {
        if(!this.head) {
            return null
        }

        let nodeIndex = 0
        let maxIndex = nodeIndex
        let currentNode = this.head
        let max = currentNode.val
        while (currentNode.next !== null) {
            if (currentNode.val < max){
                maxIndex = nodeIndex
                max = currentNode.val
            }
            nodeIndex ++
            currentNode = currentNode.next
        }
        if (currentNode.val < max) {
            return maxIndex = nodeIndex
        }
        return maxIndex
    }


    maxToBack() {
        let nodeIndex = 0
        let maxIndex = this.maxLocation()
        let currentNode = this.head

        while (nodeIndex < maxIndex - 1) {
            currentNode = currentNode.next
            nodeIndex ++
        }
        
        let max = currentNode.next
        currentNode.next = currentNode.next.next


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