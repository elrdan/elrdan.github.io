import java.util.*;

class Solution {
    public String largestNumber(int[] nums) {
        // 숫자를 문자로 변환할 배열 선언
        String[] asStr = new String[nums.length];

        // 숫자를 문자로 변환해서 str 배열에 저장
        for(int i = 0; i < asStr.length; i++) {
            asStr[i] = String.valueOf(nums[i]);
        }

        // 문자열 정렬
        Arrays.sort(asStr, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                String order1 = o1 + o2;
                String order2 = o2 + o1;
                return order2.compareTo(order1); // 내림차순으로 정렬
            }
        });

        // 모든 자릿수가 0인지 체크
        if(asStr[0].equals("0")) {
            return "0";
        }

        StringBuilder largestNumberStr = new StringBuilder();
        for(String numAsStr: asStr) {
            largestNumberStr.append(numAsStr);
        }

        return largestNumberStr.toString();
    }
}