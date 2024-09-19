package class1;

import java.util.Scanner;

/**
 * 백준 Solved.ac class1
 * 최댓값
 * https://www.acmicpc.net/problem/2562
 */
public class P2562 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int maxValue = Integer.MIN_VALUE;
		int maxIndex = -1;

		for(int i = 0; i < 9; i++) {
			int input = sc.nextInt();

			if (input > maxValue) {
				maxValue = input;
				maxIndex = i + 1;
			}
		}

		System.out.println(maxValue);
		System.out.println(maxIndex);
	}
}
