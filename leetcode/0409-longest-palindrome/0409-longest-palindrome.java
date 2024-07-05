import java.util.*;

class Solution {
    public int longestPalindrome(String s) {
        // 문자 빈도를 저장할 해시맵
        Map<Character, Integer> charCount = new HashMap<>();

        // 각 문자의 빈도를 계산
        for(char c :s.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }

        // 문자 길이를 담을 변수
        int length = 0;
        // 홀수가 있는지 확인하는 변수
        boolean isOdd = false;

        // 각 문자의 빈도를 통해 팰린드롬의 최대 길이 계산
        for(int count: charCount.values()) {
            if(count % 2 == 0) {
                length += count;
            }else {
                length += count - 1;
                isOdd = true;
            }
        }

        // 홀수가 존재하면 중앙에 배치가 가능하므로 +1
        if(isOdd) {
            length += 1;
        }

        return length;
    }
}