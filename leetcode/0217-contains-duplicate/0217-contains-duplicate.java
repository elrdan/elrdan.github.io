class Solution {
    public boolean containsDuplicate(int[] nums) {
        // 정렬이 되어있는 보장이 있다면 배열로 처리하는게 더 효율적이다.
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) {
            if (!set.add(num)) {
                return true;
            }
        }
        return false;
    }
}