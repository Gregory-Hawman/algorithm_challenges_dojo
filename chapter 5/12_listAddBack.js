// Create a function that creates a ListNode with given value and
// inserts it at end of a linked list.

class SList {
    constructor(){
        this.head = null
    }

    addBack(val){
        const newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            return
        }
        let currentNode = this.head
        while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
        currentNode.next = newNode
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}