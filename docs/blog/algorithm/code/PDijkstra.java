import java.util.*;

public class PDijkstra {
	public static void main(String[] args) {
		List<List<Edge>> graph = new ArrayList<>();

		// 그래프 초기화
		for(int i = 0; i < 5; i++) {
			graph.add(new ArrayList<>());
		}

		// 간선 추가(무방향 가중치)
		graph.get(0).add(new Edge(1, 10));
		graph.get(0).add(new Edge(3, 30));
		graph.get(0).add(new Edge(4, 100));
		graph.get(1).add(new Edge(2, 50));
		graph.get(2).add(new Edge(4, 10));
		graph.get(3).add(new Edge(2, 20));
		graph.get(3).add(new Edge(4, 60));

		dijkstra(graph, 0);
	}

	static void dijkstra(List<List<Edge>> graph, int start) {
		// 최단 거리를 저장하기 위한 배열
		int[] distances = new int[graph.size()];
		// 최대값으로 초기화
		Arrays.fill(distances, Integer.MAX_VALUE);
		// 시작지점 0
		distances[start] = 0;

		// 우선순위 큐를 사용하여 가중치가 가장 작은 경로 선택
		PriorityQueue<Edge> pq = new PriorityQueue<>(Comparator.comparingInt(
			edge -> edge.weight
		));

		pq.offer(new Edge(start, 0));

		while(!pq.isEmpty()) {
			Edge current = pq.poll();
			int currentNode = current.target;
			int currentWeight = current.weight;

			// 이미 처리한 경우 건너 뜀
			if(currentWeight > distances[currentNode]) {
				continue;
			}

			// 인접 노드들에 대한 최던 거리
			for(Edge edge: graph.get(currentNode)) {
				int newDist = distances[currentNode] + edge.weight;

				// 새로운 경로가 더 비용이 작은경우 갱신
				if(newDist < distances[edge.target]) {
					distances[edge.target] = newDist;
					pq.offer(new Edge(edge.target, newDist));
				}
			}
		}

		System.out.println(Arrays.toString(distances));
	}
}

class Edge {
	int target;
	int weight;

	Edge(int target, int weight) {
		this.target = target;
		this.weight = weight;
	}
}
