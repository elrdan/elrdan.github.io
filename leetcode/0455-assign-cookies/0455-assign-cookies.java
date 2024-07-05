class Solution {
    public int findContentChildren(int[] g, int[] s) {
        // 아이들의 인덱스
        int childIndex = 0;
        // 쿠키들의 인덱스
        int cookieIndex = 0;

        Arrays.sort(g);
        Arrays.sort(s);

        // 먹을 사람과 쿠키가 존재할때까지 반복
        while(childIndex < g.length && cookieIndex < s.length) {
            if(g[childIndex] <= s[cookieIndex]) {
                childIndex++;
            }

            cookieIndex++;
        }

        return childIndex;
    }
}