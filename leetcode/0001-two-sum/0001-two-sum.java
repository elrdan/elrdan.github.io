class Solution {
    public int[] twoSum(int[] nums, int target) {
        // 결과 인덱스를 저장할 해시맵
        Map<Integer, Integer> map = new HashMap<>();

        for(int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            // 목표 값에서 현재 값을 뺀 값이 해시맵에 있는지 체크
            if(map.containsKey(complement)) {
                // 두 인덱스를 반환
                return new int[]{map.get(complement), i};
            }

            // value, index 저장
            map.put(nums[i], i);
        }

        // exaclty one solution 이기때문에 의미없는 값으로 처리
        return new int[]{0, 0};
    }
}