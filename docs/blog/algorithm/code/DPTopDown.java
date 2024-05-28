import java.util.HashMap;

public class DPTopDown {
	static HashMap<Integer, Integer> memo = new HashMap<>();

	public static void main(String[] args) {
		System.out.println("finonacci(10): " + finonacci(10));
	}

	static int finonacci(int n) {
		if(memo.containsKey(n)) {
			return memo.get(n);
		}
		if(n <= 1) {
			return n;
		}

		memo.put(n, finonacci(n - 1) + finonacci(n - 2));
		return memo.get(n);
	}
}
