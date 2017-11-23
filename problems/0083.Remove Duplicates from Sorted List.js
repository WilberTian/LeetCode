/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
	var p = head;

    while(p && p.next) {
    	if(p.val === p.next.val) {
    		p.next = p.next.next;
    	} else {
    		p = p.next;
    	}
    }

    return head;
};




function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a1 = new ListNode(1);
var a2 = new ListNode(1);
var a3 = new ListNode(2);

a1.next = a2;
a2.next = a3;
a3.next = null;

console.log(deleteDuplicates(a1));

console.log(deleteDuplicates(a3));