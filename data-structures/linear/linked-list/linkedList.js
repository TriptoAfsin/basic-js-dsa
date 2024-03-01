console.log('linked list');
//The entry point to a linked list is called the head.
//The head is a reference to the first node in the linked list
//The tail is a reference to the last node in the linked list
//The last node on the list points to null.
// If a list is empty, the head is a null reference

// 1. Create a Node class
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// 2. Create a LinkedList class
class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }
}

//Let's create a linked list with the class we just created
//First, we create two list nodes, node1 and node2 and a pointer from node 1 to node 2.

let node1 = new ListNode(2) //setting the this.value = 2
let node2 = new ListNode(5) //setting the this.value = 5
node1.next = node2

//Then, we create another list node, node2 and node3 and a pointer from node 2 to node 3.
let node3 = new ListNode(7) //setting the this.value = 7
node2.next = node3

// 3. Next, we'll create a Linked list with the node1
let list = new LinkedList(node1, node3)

console.log('list head', list.head)
console.log('list tail', list.tail)