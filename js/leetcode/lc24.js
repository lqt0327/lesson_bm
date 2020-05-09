/** 
 * @author lqt
 * @date 2020-5-9
 * @func 两两交换链表中的节点
*/
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
var swapPairs = function(head) {
    let ans = head;
    while(ans){
        let temp = ans.val;
        if(ans.next){
            ans.val = ans.next.val;
            ans = ans.next;
        }else{
            break;
        }
        ans.val = temp;
        ans = ans.next;
    }
    return head;
};