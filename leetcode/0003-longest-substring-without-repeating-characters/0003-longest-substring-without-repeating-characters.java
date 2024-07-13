class Solution {
    public int lengthOfLongestSubstring(String s) {
        // 0 <= s.length
        if (s.length() == 0) {
            return 0;
        }

        Map<Character, Integer> map = new HashMap<>();
        int maxLength = 0;
        int left = 0;

        for (int right = 0; right < s.length(); right++) {
            char currentChar = s.charAt(right);

            // 현재 문자가 이미 존재하면, 기존 위치 다음 인덱스로 왼쪽 포인터를 이동한다.
            if(map.containsKey(currentChar)) {
                left = Math.max(map.get(currentChar) + 1, left);
            }

            map.put(currentChar, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
        
    }
}