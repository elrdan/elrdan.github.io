import java.util.*;

// Definition for a binary tree node.
public class TreeNode {
   int val;
   TreeNode left;
   TreeNode right;
   TreeNode() {}
   TreeNode(int val) { this.val = val; }
   TreeNode(int val, TreeNode left, TreeNode right) {
       this.val = val;
       this.left = left;
       this.right = right;
   }
}

class Solution {
    public boolean isValidBST(TreeNode root) {
        Stack<TreeNode> stack = new Stack<>();

        TreeNode curNode = root;
        TreeNode preNode = null;

        while(curNode != null || !stack.isEmpty()) {
            while(curNode != null) {
                stack.push(curNode);
                curNode = curNode.left;
            }

            curNode = stack.pop();

            if(preNode != null && curNode.val <= preNode.val) {
                return false;
            }

            preNode = curNode;
            
            curNode = curNode.right;
        }

        return true;
    }
}