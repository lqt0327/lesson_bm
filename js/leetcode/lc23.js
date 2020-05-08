/** 
 * @author lqt
 * @date 2020-5-8
 * @func 合并K个排序链表
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || lists.length == 0) return null;
    let ans = new ListNode('head');
    let tem = ans;
    let arr = [];
    for(let i = 0; i < lists.length; i++){
        while(lists[i]){
            arr.push(lists[i].val);  
            lists[i] = lists[i].next;
        } 
    }
    arr.sort((a,b) => a-b).forEach(val => {
        let node = new ListNode(val);
        tem.next = node;
        tem = tem.next;
    })
    return ans.next;
};