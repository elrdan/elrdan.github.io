class Solution {
    public String intToRoman(int num) {
        // 로마 숫자와 해당 값의 맵을 생성
        Map<Integer, String> romanMap = new LinkedHashMap<>();
        romanMap.put(1000, "M");
        romanMap.put(900, "CM");
        romanMap.put(500, "D");
        romanMap.put(400, "CD");
        romanMap.put(100, "C");
        romanMap.put(90, "XC");
        romanMap.put(50, "L");
        romanMap.put(40, "XL");
        romanMap.put(10, "X");
        romanMap.put(9, "IX");
        romanMap.put(5, "V");
        romanMap.put(4, "IV");
        romanMap.put(1, "I");

        StringBuilder roman = new StringBuilder();

        // 숫자를 큰 값부터 작은 값으로 나누어 로마 숫자로 변환
        for (Map.Entry<Integer, String> entry : romanMap.entrySet()) {
            while (num >= entry.getKey()) {
                num -= entry.getKey();
                roman.append(entry.getValue());
            }
        }

        return roman.toString();
    }
}