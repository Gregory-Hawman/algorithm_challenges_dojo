// Create min(node) to return list’s smallest val.

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

    min() {
        let currentNode = this.head
        if(!this.head) {
            return null
        }
        let min = currentNode.val
        while (currentNode.next !== null) {
            if (currentNode.val < min){
                min = currentNode.val
            }
            currentNode = currentNode.next
        }
        if (currentNode.val < min) {
            return currentNode.val
        }
        return min
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
myList.add(23)
console.log(myList.min())