public class PMinMax {
	public static void main(String[] args) {
		int[] numbers = { 20, 40, 10, 8, 82, 93, 55};

		int min = numbers[0];
		int max = numbers[0];
		int minPos = 0;
		int maxPos = 0;

		for(int i = 1; i < numbers.length; i++) {
			// numbers[i] 값이 min 보다 작을때 가장 작은 값을 변경 및 위치 저장
			if(min > numbers[i]) {
				min = numbers[i];
				minPos = i;
			}

			// numbers[i] 값이 max 보다 클때 가장 큰 값을 변경 및 위치 저장
			if(max < numbers[i]) {
				max = numbers[i];
				maxPos = i;
			}
		}

		System.out.printf("최솟값: %d, 최솟값 Index: %d\n", min, minPos);
		System.out.printf("최댓값: %d, 최댓값 Index: %d", max, maxPos);
	}
}
