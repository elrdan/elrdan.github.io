package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class P1018 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());

		// 최소의 개수를 담을 변수
		int minRepaints = Integer.MAX_VALUE;

		char[][] board = new char[n][m];

		// 체스판 입력 받기
		for(int i = 0; i < n; i++) {
			String line = br.readLine();
			for(int j = 0; j < m; j++) {
				board[i][j] = line.charAt(j);
			}
		}

		// 체스판 검사
		for(int i = 0; i <= n - 8; i++) {
			for(int j = 0; j <= m - 8; j++) {
				minRepaints = Math.min(minRepaints, getRepaints(board, i, j));
			}
		}

		System.out.println(minRepaints);
	}

	private static int getRepaints(char[][] board, int startRow, int startCol) {
		String[] patterns = {"WBWBWBWB", "BWBWBWBW"};
		// pattenrs[0] 으로 시작하는 체스판 repaints count
		int repaints1 = 0;
		// pattenrs[1] 으로 시작하는 체스판 repaints count
		int repaints2 = 0;

		for(int i = 0; i < 8; i++) {
			for(int j = 0; j < 8; j++) {
				if(board[startRow + i][startCol + j] != patterns[i % 2].charAt(j)) {
					repaints1++;
				}

				if(board[startRow + i][startCol + j] != patterns[(i + 1) % 2].charAt(j)) {
					repaints2++;
				}
			}
		}

		return Math.min(repaints1, repaints2);

	}
}
