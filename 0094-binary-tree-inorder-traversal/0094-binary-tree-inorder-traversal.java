public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
        this.val = val;
    }
}
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        // 방문한 노드를 담을 리스트
        List<Integer> result = new ArrayList<>();
        TreeNode curNode = root;
        Stack<TreeNode> stack = new Stack<>();

        while(curNode != null || !stack.isEmpty()) {
            // 왼쪽 노드가 비어있지 않으면 스택에 전부 쌓기
            while(curNode != null) {
                stack.push(curNode);
                curNode = curNode.left;
            }

            // 마지막 시점에 쌓인 노드를 불러옴
            curNode = stack.pop();
            result.add(curNode.val);

            // 오른쪽 서브 트리 방문
            curNode = curNode.right;
        }

        return result;
    }
}