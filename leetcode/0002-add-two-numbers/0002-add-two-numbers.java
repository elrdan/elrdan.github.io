/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode head = new ListNode(0);
        ListNode p = l1, q = l2, curr = head;
        int carry = 0;

        // 두개의 리스트가 null일때까지 반복
        while(p != null || q != null) {
            // 각 노드의 값을 가져와서 더하고, null일때는 0으로 대체
            int x = (p != null) ? p.val : 0;
            int y = (q != null) ? q.val : 0;

            // 현재 자릿수의 합과 자릿수 계산
            int sum = carry + x + y;
            carry = sum / 10;

            // 결과 리스트에 저장
            curr.next = new ListNode(sum % 10);
            curr = curr.next;

            // null check 후 다음 노드로 이동
            if(p != null) p = p.next;
            if(q != null) q = q.next; 
        }

        // 자리 올림이 남아있는 경우 처리
        if(carry > 0) {
            curr.next = new ListNode(carry);
        }

        return head.next;
    }
}