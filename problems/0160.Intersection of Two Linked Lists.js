/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var pA = headA,
    	pB = headB;

    while(pA !== pB) {
    	pA = pA ? pA.next : headB;
    	pB = pB ? pB.next : headA;
    }

    return pA;
};