/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var p = head;

    if(!p) return false;

    while(p.next && p.next.next) {
    	head = head.next;
    	p = p.next.next;

    	if(head === p) {
    		return true;
    	}
    }

    return false;
};