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
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) {
            return false;
        }

        // 노드와 해당 노드까지의 합을 저장할 큐
        Queue<TreeNode> nodeQueue = new LinkedList<>();
        Queue<Integer> sumQueue = new LinkedList<>();

        nodeQueue.offer(root);
        sumQueue.offer(root.val);

        while (!nodeQueue.isEmpty()) {
            TreeNode currentNode = nodeQueue.poll();
            int currentSum = sumQueue.poll();

            // 리프 노드인지 확인
            if (currentNode.left == null && currentNode.right == null) {
                if (currentSum == targetSum) {
                    return true;
                }
            }

            // 왼쪽 자식이 있으면 큐에 추가
            if (currentNode.left != null) {
                nodeQueue.offer(currentNode.left);
                sumQueue.offer(currentSum + currentNode.left.val);
            }

            // 오른쪽 자식이 있으면 큐에 추가
            if (currentNode.right != null) {
                nodeQueue.offer(currentNode.right);
                sumQueue.offer(currentSum + currentNode.right.val);
            }
        }

        return false;
    }
}