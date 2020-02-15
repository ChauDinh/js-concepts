/**
 * Doubly Linked List implement with JavaScript
 */

// Initialize a node

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Search first node with key K
  searchFirstNode(data) {
    if (!this.head) return null;
    let current = this.head;
    while (current !== null && current.data !== data) {
      current = current.next;
    }

    return current;
  }

  // Insert Node at index
  insert(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) return;
    let node = new Node(data);

    // If index = 0: insert at head
    if (index === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
        this.size++;
      } else {
        let current = this.head;
        node.next = current;
        current.prev = node;
        this.head = node;
        this.size++;
      }
    } else if (index === this.size) {
      let current = this.tail;
      node.prev = current;
      current.next = node;
      this.tail = node;
      this.size++;
    } else {
      // Insert at given index k
      let counter = 0;
      let current = this.head;
      while (counter < index) {
        current = current.next;
        counter++;
      }
      node.next = current;
      current.prev.next = node;
      node.prev = current.prev;
      this.size++;
    }
  }

  // Remove a node at given K index
  remove(index) {
    if (index > 0 && index > this.size) return;

    // index = 0: Remove the head node
    if (index === 0) {
      if (!this.head) return;
      else {
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
      }
    } else if (index === this.size - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;
    } else {
      let counter = 0;
      let current = this.head;
      while (counter < index) {
        current = current.next;
        counter++;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
      this.size--;
    }
  }
}

const dbl = new DoublyLinkedList();

dbl.insert(100, 0);
dbl.insert(200, 0);
dbl.insert(400, 0);
dbl.insert(300, 1);
dbl.insert(500, 3);
dbl.remove(1);

console.log(dbl);
