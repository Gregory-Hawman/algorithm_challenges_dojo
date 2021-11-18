// Rudy isn’t nice: he cuts in line in front of everyone else. Given a
// pointer to the first ListNode and a value, create a new node, assign it
// to the list head, and return a pointer to the new head node.

class SList {
    constructor(head){
        this.head = head;
    }

    addFront(val) {
        if(this.head === null){
            const newNode = new Node(val, null);
            this.head = newNode;
            return;
        }

        const newNode = new Node(val, this.head);
        this.head = newNode;
    }
}

class Node {
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

const myList = new SList();
myList.addFront('Rudy')
console.log(myList.head)