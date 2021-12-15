// July 20, 2013: about 5000 people wait in line for a chance to audition
// for American Idol. Create a function that accepts a pointer to the first
// list node, and returns number of nodes in that SList.

class SList {
    constructor() {
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

    length(){
        if(!this.head){
            return 0
        }
        let currentNode = this.head
        let length = 1
        while(currentNode.next !== null){
            currentNode = currentNode.next
            length ++
        }
        return length
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const myList = new SList();
myList.add('Rudy')
myList.add('Cory')
myList.add('Shaun')
myList.add('Eric')
console.log(myList.length())
myList.add('Rudy')
myList.add('Cory')
myList.add('Shaun')
myList.add('Eric')
console.log(myList.length())