# Linked Lists

Definition: Linked list is a data structure where the objects are arranged in a linear order.

Note: Unlike array, a data structure in which the linear order is determined by the indices, linked list is determined by a pointer in each object.

### Single linked list

![Linked List](https://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Linkedlist.png)

The image above show an illustration of single linked list which means that every element have the `key` and a pointer attribute: `next`.

In particular, an element `X` in linked list, `X.next` points to its successor in the linked list.

As you can see the picture, there are two other concepts are `HEAD` and `NULL` at tail, we will consider them by introducing the definition of double linked list.

### Double linked list

![Double Linked List](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2014/03/DLL1.png)

In double linked list, an element `X` has one `key` attribute and two pointer attributes `prev` and `next`.

When `X.prev` points to its predecessor. If `X.prev = NULL`, the element `X` has no predecessor and is therefore the first element - or `HEAD`.

If `X.prev = NULL`, the element `X` has no successor and is therefore the last element, or `TAIL` of the list.

So, a list may have several form either singly linked or doubly linked. The elements may be sorted or not.

### Circular linked list

![Circular Linked List](https://media.geeksforgeeks.org/wp-content/uploads/CircularSinglyLinkedList.png)

In circular linked list, the `prev` pointer of the head points to the `tail` and the `next` pointer of the `tail` points to the `head`.
