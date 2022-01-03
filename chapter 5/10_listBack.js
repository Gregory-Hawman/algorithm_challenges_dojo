// Create a function that accepts a ListNode pointer and returns the last
// value in the list.

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
console.log(myList.back())