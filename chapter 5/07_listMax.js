// American Idol seems to air singers that are the best, and a few that
// seem like the worst! Create function max(node) to return list’s largest
// val.

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

    max() {
        let max = 0
        let currentNode = this.head
        if(!this.head) {
            return null
        }
        while (currentNode.next !== null) {
            if (currentNode.val > max){
                max = currentNode.val
            }
            currentNode = currentNode.next
        }
        if (currentNode.val > max) {
            return currentNode.val
        }
        return max
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const myList = new SList();
myList.add(1)
myList.add(99)
myList.add(3)
myList.add(6)
myList.add(23)
console.log(myList.max())
