class Solution {
    public int romanToInt(String s) {
        // 로마 숫자의 각 문자를 정수로 매핑하는 HashMap 생성
        Map<Character, Integer> romanToIntMap = new HashMap<>();
        romanToIntMap.put('I', 1);
        romanToIntMap.put('V', 5);
        romanToIntMap.put('X', 10);
        romanToIntMap.put('L', 50);
        romanToIntMap.put('C', 100);
        romanToIntMap.put('D', 500);
        romanToIntMap.put('M', 1000);

        int total = 0;
        int prevValue = 0;

        // 로마 숫자를 오른쪽에서 왼쪽으로 순회하면서 정수로 변환
        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);
            int currentValue = romanToIntMap.get(currentChar);

            // 현재 값이 이전 값보다 작으면 빼기, 그렇지 않으면 더하기
            if (currentValue < prevValue) {
                total -= currentValue;
            } else {
                total += currentValue;
            }
            prevValue = currentValue;
        }

        return total;
    }
}