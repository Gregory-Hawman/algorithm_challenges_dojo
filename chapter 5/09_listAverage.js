// Create average(node) to return average val.

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

    average() {
        let total = 0
        if(!this.head){
            return total
        }

        let currentNode = this.head
        while (currentNode.next !== null){
            total += currentNode.val
            currentNode = currentNode.next
        }
        total += currentNode.val

        let average
        let divisor = this.length()
        average = total / divisor
        return average
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
console.log(myList.average())