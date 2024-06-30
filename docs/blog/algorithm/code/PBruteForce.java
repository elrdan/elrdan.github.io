public class PBruteForce {
	static int search(String text, String pattern) {
		int n = text.length();
		int m = pattern.length();

		for(int i = 0; i <= n - m; i++) {
			int j;
			for(j = 0; j < m; j++) {
				if(text.charAt(i + j) != pattern.charAt(j)) {
					break;
				}
			}

			// 패턴이 발견된 시작 인덱스
			if(j == m) {
				return i;
			}
		}

		return -1;
	}

	public static void main(String[] args) {
		String text = "test text";
		String pattern = "text";

		int result = search(text, pattern);
		if(result != -1) {
			System.out.println("패턴이 " + result + " 인덱스에서 발견됨");
		}else {
			System.out.println("패턴이 발견되지 않음");
		}
	}
}
