// Create display(node) for debugging that returns a string containing all
// list values. Build what you wish console.log(myList) did!

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
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const myList = new SList();
myList.add('Cory')
myList.add('Shaun')
myList.add('Eric')
myList.add('Topanga')
myList.add('Minkus')
myList.add('Feeny')
myList.add('Jack')
console.log(myList.display())