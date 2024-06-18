public class P43165 {
	static int count = 0;

	public static void main(String[] args) {
		int[] numbers = {1, 1, 1, 1, 1};
		int target = 3;

		dfs(numbers, target, 0, 0);

		System.out.println(count);
	}

	static void dfs(int[] numbers, int target, int index, int sum) {
		// 모든 숫자를 사용한 경우
		if(index == numbers.length) {
			// 합이 타겟과 일치하면 카운트 증가
			if(sum == target) {
				count++;
			}

			return;
		}

		// 현재 숫자를 더하는 경우
		dfs(numbers, target, index + 1, sum + numbers[index]);
		// 현재 숫자를 빼는 경우
		dfs(numbers, target, index + 1, sum - numbers[index]);
	}
}
