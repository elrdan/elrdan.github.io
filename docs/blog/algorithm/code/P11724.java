import java.io.*;
import java.util.*;

public class P11724 {
	// 방문 여부를 저장하는 배열
	static boolean[] visited;
	// 그래프를 저장하는 인접 리스트 배열
	static List<Integer>[] graph;

	public static void main(String args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		// 정점의 개수 n과 간선의 개수 m
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());

		// 그래프와 방문 배열 초기화
		graph = new ArrayList[n + 1];
		visited = new boolean[n + 1];

		// 그래프의 정점의 리스트를 초기화
		for(int i = 1; i < n; i++) {
			graph[i] = new ArrayList<>();
		}

		// 간선의 정보를 입력받아 그래프를 구성
		for(int i = 0; i < m; i++) {
			st = new StringTokenizer(br.readLine());
			int u = Integer.parseInt(st.nextToken());
			int v = Integer.parseInt(st.nextToken());

			// 무방향 그래프이므로 양쪽에 간선을 추가
			graph[u].add(v);
			graph[v].add(u);
		}

		// 연결 요소의 개수 count 변수
		int components = 0;
		// 모든 정점을 순회하며 방문하지 않은 정점 체크
		for(int i = 1; i <= n; i++) {
			if(!visited[i]) {
				// 방문하지 않은 정점이 있으면 bfs
				bfs(i);
				// 연결 요소의 개수를 증가
				components++;
			}
		}

		System.out.println(components);
	}

	static void bfs(int start) {
		Queue<Integer> queue = new LinkedList<>();
		// 시작 정점을 큐에 추가 및 방문 처리
		queue.add(start);
		visited[start] = true;

		while(!queue.isEmpty()) {
			int node = queue.poll();

			// 인접한 모든 정점을 순회
			for(int vertex: graph[node]) {
				// 방문하지 않은 정점을 큐에 추가하고 방문 처리
				if(!visited[vertex]) {
					queue.add(vertex);
					visited[vertex] = true;
				}
			}
		}
	}
}
