/**
 * @author lqt
 * @date 2020-4-19
 * @func 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    const res=new ListNode(0);
    res.next = head;
    let l = res;
    let r = res;
    let dist = n+1;
    while(dist--){
        r=r.next;
        if(dist>1&&res===null){
            return res.next;
        }
    }
    while(r){
        r=r.next;
        l=l.next;
    }
    l.next=l.next.next;
    return res.next;
};
