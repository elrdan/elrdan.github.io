class Solution {
    public int[] twoSum(int[] nums, int target) {
        // 해시맵을 사용하여 각 숫자와 그 숫자의 인덱스를 저장합니다.
        Map<Integer, Integer> map = new HashMap<>();
        
        // 배열을 한 번 순회하면서 각 요소를 처리합니다.
        for (int i = 0; i < nums.length; i++) {
            // 목표값에서 현재 숫자를 뺀 값이 해시맵에 있는지 확인합니다.
            int complement = target - nums[i];
            
            // 해시맵에 있는 경우, 두 숫자의 인덱스를 반환합니다.
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            
            // 해시맵에 현재 숫자와 그 인덱스를 저장합니다.
            map.put(nums[i], i);
        }
        
        return new int[] {};
    }
}