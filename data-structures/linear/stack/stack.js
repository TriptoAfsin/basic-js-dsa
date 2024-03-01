console.log('stack');
//Stack is a linear data structure in which the addition or removal of an element 
// follows a particular order i.e. LIFO(Last in First Out) AND FILO(First in Last Out). 

//1. Creating the stack
class Stack {
    //constructor function for initialization
    constructor() {
        this.items = [];
    }

    //Checking if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Pushing an element
    push(element) {
        this.items.push(element);
    }
    // Popping an element
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }
    // Peek: Method to return the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1]; 
    }
    // Size
    size() {
        return this.items?.length
    }
    //Printing the stack
    printStack() {
        let str = '';
        for(let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ' ';
        }
        return str.trim();
    }
    // Clear
    clear() {
        return this.items = [];
    }
}

//usage
let myStack = new Stack();
myStack.push(5);
myStack.push(10);
myStack.push(15)

console.log('stack: ', myStack.printStack());
console.log('stack size: ', myStack.size()); //checking the size of the stack
console.log('peek: ', myStack.peek()); //peeking over the stack
console.log('pop: ', myStack.pop()); //popping an item from the stack
console.log('stack after pop: ', myStack.printStack());


