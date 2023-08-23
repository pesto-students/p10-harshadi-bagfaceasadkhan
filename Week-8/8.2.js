class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  printLinkedList() {
    let current = this.head;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }

  rotateLinkedList(k) {
    if (k == 0) {
      return;
    }

    let current = this.head;
    let count = 1;

    while (count < k && current != null) {
      current = current.next;
      count++;
    }

    if (current == null) {
      return;
    }

    let kthNode = current;

    while (current.next != null) {
      current = current.next;
    }

    current.next = this.head;
    this.head = kthNode.next;
    kthNode.next = null;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.printLinkedList();
list.rotateLinkedList(2);
console.log("After rotation");
list.printLinkedList();
