// const n1 = {
//   data: 100
// };

// const n2 = {
//   data: 200
// };

// n1.next = n2;

// console.log(n1);

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node(100);

// console.log(n1);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Search first node with key k
  listSearch(data) {
    if (!this.head) return null;
    let current = this.head;
    while (current !== null && current.data !== data) {
      current = current.next;
    }

    return current;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make this node as the head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertIndex(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) return;

    // If index = 0
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before the index
      count++;
      current = current.next; // Node after the index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) return;

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first node
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print the list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(300);
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertLast(600);
ll.insertIndex(500, 2);
ll.insertIndex(500, 3);

ll.removeAt(11);

// ll.clearList();
ll.printListData();
ll.getAt(10);
console.log(JSON.stringify(ll, 0, 2));
console.log(ll.listSearch(500));
