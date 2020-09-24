/**
 *
 * Given a linkedlist including N elements a_1 => a_2 => ... => a_n
 * Write a function reverse this linkedlist: a_n => a_n-1 => ... => a_1
 *
 */
const LinkedList = require("./index");

const ll = new LinkedList();
ll.insertLast(1);
ll.insertLast(2);
ll.insertLast(3);

const reverseLinkedlist = linkedList => {
	console.log(
		"The input linkedlist is: ",
		JSON.stringify(linkedList, null, 2)
	);
	let arr = [];
	while (linkedList.size > 1) {
		let curr = linkedList.getAt(0);
		linkedList.removeAt(0);
		arr.push(curr);
	}
	for (let i = arr.length - 1; i >= 0; i--) {
		linkedList.insertLast(arr[i]);
	}
	console.log(
		"The output linkedlist is: ",
		JSON.stringify(linkedList, null, 2)
	);
	return 0;
};
reverseLinkedlist(ll);
