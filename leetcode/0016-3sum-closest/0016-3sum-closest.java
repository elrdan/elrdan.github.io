class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int result = nums[0] + nums[1] + nums[2];

        for (int i = 0; i < nums.length - 2; i++) {
            int left = i + 1;
            int right = nums.length - 1;

            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];

                // 현재 합이 타겟에 더 가까운지 확인
                if (Math.abs(sum - target) < Math.abs(result - target)) {
                    result = sum;
                }

                // 합이 타겟보다 작은 경우 왼쪽 포인터 증가
                if (sum < target) {
                    left++;
                }
                // 합이 타겟보다 큰 경우 오른쪽 포인터 감소
                else if (sum > target) {
                    right--;
                }
                // 합이 타겟과 같은 경우
                else {
                    return sum; // 가장 가까운 값이므로 바로 반환
                }
            }
        }

        return result;
    }
}