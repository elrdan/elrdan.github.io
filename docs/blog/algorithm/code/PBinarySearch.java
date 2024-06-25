import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * 찾을 숫자가 numbers 있다고 가정, 없는 경우 boolean 변수를 사용하여 처리할 수 있습니다.
 */
public class PBinarySearch {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int[] numbers = {21, 40, 53, 80, 85, 89, 92, 100};
		// 찾을 숫자
		int target = Integer.parseInt(br.readLine());

		int start = 0;
		int end = numbers.length - 1;
		int mid = end / 2;

		int temp = numbers[mid];

		while(start <= end) {
			if(target == temp) {
				break;
			}else if(target > temp) {
				start = mid + 1;
			}else {
				end = mid - 1;
			}
			mid = (start + end) / 2;
			temp = numbers[mid];
		}

		System.out.println("찾는 숫자의 Index: " + mid);

	}
}
