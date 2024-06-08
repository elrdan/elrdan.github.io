public class PrefixSum {
	public static void main(String[] args) {
		int i = 2;
		int j = 5;
		int[] arr = {1, 3, 5, 7, 9 , 11};
		int[] arrSum = new int[arr.length];

		prefixSum(arr, arrSum);

		System.out.println(arrSum[j] - arrSum[i-1]);
	}

	static void prefixSum(int[] arr, int[] arrSum) {
		arrSum[0] = arr[0];
		for(int i=1; i<arr.length; i++) {
			arrSum[i] = arrSum[i-1] + arr[i];
		}
	}
}