function ListNode(val) {
	this.val = val;
	this.next = null;
}

ListNode.prototype.addNode = function(node) {
	if (this.next === null) {
		this.next = node;
	}
};

const addTwoNumbers = function(l1, l2) {
	// Your code here
	let result = new ListNode(-1);
	let cur = result;
	let carry = 0;

	while (l1 || l2) {
		let n1 = l1 ? l1.val : 0;
		let n2 = l2 ? l2.val : 0;
		let sum = n1 + n2 + carry;

		carry = Math.floor(sum / 10);
		cur.next = new ListNode(sum % 10);
		cur = cur.next;
		if (l1) {
			l1 = l1.next;
		}
		if (l2) {
			l2 = l2.next;
		}
	}
	if (carry) {
		cur.next = new ListNode(1);
	}
	return result.next;
};

let l1 = new ListNode(3),
	val1 = new ListNode(4),
	val2 = new ListNode(2);
let l2 = new ListNode(4),
	val3 = new ListNode(6),
	val4 = new ListNode(5);
l1.addNode(val1);
val1.addNode(val2);
l2.addNode(val3);
val3.addNode(val4);

let l3 = new ListNode(9),
	vall3 = new ListNode(9),
	vall32 = new ListNode(9);

let l4 = new ListNode(8);

console.log(addTwoNumbers(l1, l2));
