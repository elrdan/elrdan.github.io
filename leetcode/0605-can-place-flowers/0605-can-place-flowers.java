class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int length = flowerbed.length;
        
        if(n == 0){
            return true;
        }

        for(int i = 0; i < length; i++) {
            if(flowerbed[i] == 0) {
                // 왼쪽과 오른쪽의 공간 확인
                boolean leftEmpty = (i == 0) || (flowerbed[i - 1] == 0);
                boolean rightEmpty = (i == length - 1) || (flowerbed[i + 1] == 0);

                if(leftEmpty && rightEmpty) {
                    flowerbed[i] = 1;
                    n--;

                    if(n == 0){
                        return true;
                    }
                }
            }
        }

        return false;
    }
}