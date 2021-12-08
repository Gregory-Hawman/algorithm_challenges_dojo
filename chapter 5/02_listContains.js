// Sam thinks Tad might be somewhere in a very long line waiting to
// attend the Superman movie. Given a ListNode pointer and a val,
// return whether val is found in any node in the list. 

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


    containsVal(val){
        if (!this.head){
            return false
        }
        // make the head the current node 
        let currentNode = this.head
        console.log(currentNode)
        while (currentNode.next){
            if (currentNode.val === val){
                // if current node is val return true
                return true
            }
            currentNode = currentNode.next
        }
        return false 
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const myList = new SList();
console.log(myList.containsVal('Rad'))
myList.addFront('Rudy')
myList.addFront('Tad')
myList.addFront('Cory')
myList.addFront('Eric')
myList.addFront('Shaun')


