import java.util.Arrays;

public class PInsertSort {
	public static void main(String[] args) {
		// 정렬되지 않은 배열
		int[] numbers = {20, 33, 1, 21, 84, 17, 40};

		insertSort(numbers);

		System.out.println("정렬된 numbers: " + Arrays.toString(numbers));
	}

	public static void insertSort(int[] numbers) {
		int temp;
		int count = numbers.length;

		for(int i = 1; i < count; i++) {
			temp = numbers[i];
			int j = i;

			while((j > 0) && numbers[j - 1] > temp) {
				numbers[j] = numbers[j - 1];
				j--;
			}
			numbers[j] = temp;
		}
	}
}
