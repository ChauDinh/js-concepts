/**
 * Given the head of a singly linked list, return the middle node of the linked list
 */

function ListNode(val, next = null) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

var middleNode = function(head) {
  let length = 0;
  let current = head;
  while (current !== null) {
    length++;
    current = current.next;
  }

  let middleIdx = Math.floor(length / 2);
  current = head;
  let currIdx = 0;
  while (currIdx < middleIdx) {
    currIdx++;
    current = current.next;
  }

  return current;
}

const listNode = new ListNode(1);
console.log(middleNode(listNode));