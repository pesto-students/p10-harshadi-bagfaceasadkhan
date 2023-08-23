class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(value) {
    this.s1.push(value);
  }

  dequeue() {
    if (this.s1.length == 0 && this.s2.length == 0) {
      return null;
    }

    if (this.s2.length == 0) {
      while (this.s1.length != 0) {
        this.s2.push(this.s1.pop());
      }
    }

    return this.s2.pop();
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log("Dequeue: ");
console.log(queue.dequeue());
console.log(queue.dequeue());
