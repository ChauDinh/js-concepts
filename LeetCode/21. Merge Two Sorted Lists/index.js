function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function mergeTwoList (list1, list2) {
  let head = new ListNode();
  let curr = head;

  let curr1 = list1, curr2 = list2;
  while (curr1 !== null && curr2 !== null) {
    if (curr1.val < curr2.val) {
      curr.next = curr1;
      curr1 = curr1.next;
    } else {
      curr.next = curr2;
      curr2 = curr2.next;
    }
    curr = curr.next;
  }

  if (curr1 !== null) {
    curr.next = curr1;
  }

  if (curr2 !== null) {
    curr.next = curr2;
  }

  return head.next;
}

let list1 = new ListNode()

console.log(mergeTwoList())