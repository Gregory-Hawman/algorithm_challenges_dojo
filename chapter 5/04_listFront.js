// Finally, Tad and Sam reach the front of the line to get movie tickets.
// Oh no – only one seat remains! Who was earlier in line: Tad or Sam?
// Return the value (not the node) at the head of the list. If list is empty,
// return null.

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

    removeFront(){
        let front = this.head
        this.head = this.head.next
        return front
    }

    frontVal(){
        if (!this.head){
            return null
        }
        return this.head.val
    }
}

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

const myList = new SList();
console.log(myList)
myList.add('Rudy')
console.log(myList.head)
myList.add('Cory')
myList.add('Shaun')
myList.add('Eric')
myList.add('Sam')
myList.add('Tad')
console.log(myList.head.next)
console.log(myList.head.next.next)
console.log(myList.head.next.next.next)
console.log(myList.head.next.next.next.next)
console.log(myList.head.next.next.next.next.next)
myList.removeFront()
myList.removeFront()
myList.removeFront()
myList.removeFront()
console.log(myList.frontVal())



