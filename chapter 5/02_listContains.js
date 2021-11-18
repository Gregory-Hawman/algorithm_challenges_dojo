// Sam thinks Tad might be somewhere in a very long line waiting to
// attend the Superman movie. Given a ListNode pointer and a val,
// return whether val is found in any node in the list. 

class SList {
    constructor(head){
        this.head = head;
    }

    addFront(val) {
        if (this.head === null){
            const newNode = new Node(val, null)
                this.head = newNode;
                return
        }
        const newNode = new Node(val, this.head);
        this.head = newNode;
    }

    containsVal(val){
        const currentNode = this.head
        if (this.head === val){
            return
        }
    }
}

class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

const myList = new SList();
myList.addFront('Rudy')
console.log(myList.head)