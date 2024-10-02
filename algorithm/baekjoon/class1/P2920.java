package class1;

import java.util.Scanner;

/**
 * 백준 Solved.ac
 * 음계
 * https://www.acmicpc.net/problem/2920
 */
public class P2920 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		// 8개의 숫자 입력 받기
		int[] notes = new int[8];
		for (int i = 0; i < 8; i++) {
			notes[i] = scanner.nextInt();
		}
		scanner.close();

		// 음계 판별
		String result = "mixed";
		boolean ascending = true;
		boolean descending = true;

		for (int i = 0; i < 7; i++) {
			if (notes[i] < notes[i + 1]) {
				descending = false; // 내림차순이 아님
			} else if (notes[i] > notes[i + 1]) {
				ascending = false; // 오름차순이 아님
			}
		}

		if (ascending) {
			result = "ascending";
		} else if (descending) {
			result = "descending";
		}

		System.out.println(result);
	}
}
