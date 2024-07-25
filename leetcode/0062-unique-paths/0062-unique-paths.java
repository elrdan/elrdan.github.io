class Solution {
    public int uniquePaths(int m, int n) {
        int[] dp = new int[n];

        // 배열을 1로 초기화
        dp[0] = 1;
        for (int j = 1; j < n; j++) {
            dp[j] = 1;
        }

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] += dp[j - 1];
            }
        }

        return dp[n - 1];
    }
}