import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class PBFS {
	public static void main(String[] args) {
		List<List<Integer>> graph = new ArrayList<>();

		for(int i = 0; i < 4; i++) {
			graph.add(new ArrayList<>());
		}

		graph.get(0).add(1);
		graph.get(0).add(2);
		graph.get(1).add(0);
		graph.get(1).add(2);
		graph.get(2).add(0);
		graph.get(2).add(1);
		graph.get(2).add(3);
		graph.get(3).add(2);

		bfs(graph, 0);
	}

	static void bfs(List<List<Integer>> graph, int start) {
		// 방문 노드를 추적하기 위한 배열
		boolean[] visited = new boolean[graph.size()];

		// 탐색할 노드를 저장하기 위한 큐
		Queue<Integer> queue = new LinkedList<>();

		// 시작 노드를 큐에 저장하고 방문 처리
		queue.offer(start);
		visited[start] = true;

		while(!queue.isEmpty()) {
			int node = queue.poll();

			for(int neighbor: graph.get(node)) {
				if(!visited[neighbor]) {
					queue.offer(neighbor);
					visited[neighbor] = true;
				}
			}
		}
	}
}
