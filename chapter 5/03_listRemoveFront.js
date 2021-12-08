// Ha! Rudy is getting what he deserves – kicked out of line. Given a
// pointer to the first node in a list, remove the head node and return
// the new list head node. If list is empty, return null.

class SList {
    constructor(){
        this.head = null;
    }
    
    addFront(val) {
        if (this.head === null){
            const newNode = new Node(val)
            this.head = newNode;
            return
        }
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }
    
    addBack(val){
        const newNode = new Node(val, null);
        if (this.head === null){
            this.head = newNode;
            return
        }
        let currentNode = this.head
        while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
        currentNode.next = newNode
    }

    removeFront(){
        let oldHead = this.head
        this.head = this.head.next
        return oldHead
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const myList = new SList();
myList.addBack('Cory')
myList.addBack('Eric')
myList.addBack('Shaun')
myList.addFront('Rudy')
console.log(myList.head)
console.log(myList.head.next)
console.log(myList.head.next.next)
console.log(myList.head.next.next.next)
myList.removeFront()
console.log(myList.head)
