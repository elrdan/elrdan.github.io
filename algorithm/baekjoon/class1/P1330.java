package class1;

import java.util.Scanner;

/**
 * 백준 Solved.ac class1
 * 두 수 비교하기
 * https://www.acmicpc.net/problem/1330
 */
public class P1330 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int a = sc.nextInt();
		int b = sc.nextInt();

		System.out.println(a > b ? ">" : (a < b ? "<" : "=="));
	}
}
