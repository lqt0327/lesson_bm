/**
 * @author lqt
 * @date 2020-4-27
 * @func 反转链表
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
// 递归
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let next = head.next;
    let res = reverseList(next);
    head.next = null;
    next.next = head;
    return res;
  };

  //迭代
  var reverseList = function(head) {
    let prev = null;
    let cur = head;
    while (cur !== null) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
      
    }
    return prev;
  };