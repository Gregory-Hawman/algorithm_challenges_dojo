// Create a standalone function that removes the last ListNode in the
// list and returns the new list.

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

    back() {
        if(!this.head){
            return null
        }

        let currentNode = this.head
        while (currentNode.next !== null){
            currentNode = currentNode.next
        }
        return currentNode.val
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

    remove() {
        if(!this.head){
            return null
        }

        let currentNode = this.head
        while (currentNode.next.next !== null){
            currentNode = currentNode.next
        }
        currentNode.next = null
        return this.display()
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const myList = new SList();
myList.add(11)
myList.add(99)
myList.add(3)
myList.add(6)
myList.add(44)
myList.add(23)
console.log(myList.remove())