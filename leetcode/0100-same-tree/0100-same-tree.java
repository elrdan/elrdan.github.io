/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        // 두 노드를 저장할 스택 생성
        Stack<TreeNode> stack = new Stack<>();
        stack.push(p);
        stack.push(q);

        while(!stack.isEmpty()) {
            TreeNode node1 = stack.pop();
            TreeNode node2 = stack.pop();

            // 두 노드 모두 null이면 true
            if(node1 == null && node2 == null) continue;
            // 한 노드만 null 이면 false
            if(node1 == null || node2 == null) return false;
            // 두 노의 값이 다르면 false
            if(node1.val != node2.val) return false;

            stack.push(node1.left);
            stack.push(node2.left);
            stack.push(node1.right);
            stack.push(node2.right);
        }

        return true;
    }
}