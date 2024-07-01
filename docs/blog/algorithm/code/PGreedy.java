public class PGreedy {
	public static void main(String[] args) {

		int[] coins = {500, 100, 50, 10};   // 동전의 종류
		int price = 8370;					// 금액
		int count;

		for (int i = 0; i< coins.length; i++) {
			count = 0;
			count += price / coins[i];
			price = price % coins[i];

			System.out.println( coins[i] + "짜리 동전 " + count + "가 필요합니다.");
		}
	}
}
