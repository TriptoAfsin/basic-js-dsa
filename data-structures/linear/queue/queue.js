console.log('queue');
// Queue: the name of the array storing queue elements.
// Front: the index where the first element is stored in the array representing the queue.
// Rear: the index where the last element is stored in an array representing the queue.

//Imagine a queue at the store. The first person in line is the first person to get out of line. 
// This is FIFO. A person getting into line is "enqueued", and a person getting out of line is "dequeued".

class Queue {
    constructor() {
      this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
      }
  
    enqueue(element) {
      this.items.push(element); //push adds an element to the last
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift(); //shift removes the first element
    }
  
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0]; //the first index is the front
    }

    rear() {
        if (this.isEmpty()) {
          return "No elements in Queue";
        }
        return this.items[this.items.length - 1]; //the last index is the rear
      }
  
    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }

    clear() {
        return this.items = [];
    }
  }
  
  //creating a queue
  const queue = new Queue();

  console.log('Is queue empty?', queue.isEmpty()); // true
  //adding items to queue
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  //printing the queue
  console.log('queue: ', queue.printQueue()); // 10 20 30
  //printing the queue head/front
  console.log('queue front: ', queue.front()); // 10
  //printing the queue rear/back
  console.log('queue rear: ', queue.rear()); // 30
  //dequeue
  queue.dequeue();
  //printing the queue after dequeuing
  console.log(queue.printQueue()); // 20 30
  