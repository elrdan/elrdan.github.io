import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class AMinimumFlightFee {
    static int solution(int n, int[][] flights, int s, int e, int k){
       ArrayList<ArrayList<int[]>> graph = new ArrayList<>();

       // 그래프 초기화
       for(int i = 0; i < n; i++) {
           graph.add(new ArrayList<>());
       }

       int[] costs = new int[n];
       // 비용 초기화: 최단 거리를 구해야 하므로 최대값으로 설정
       Arrays.fill(costs, Integer.MAX_VALUE);

       // 경로 별 도착위치 비용 설정
       for(int[] x : flights) {
           graph.get(x[0]).add(new int[]{x[1], x[2]});
       }

       Queue<int[]> queue = new LinkedList<>();
       // 시작 경로
       queue.offer(new int[]{s, 0});
       costs[s] = 0;
       int l = 0;

       while(!queue.isEmpty()) {
           int len = queue.size();

           for(int i = 0; i < len; i++) {
                int[] p = queue.poll();
                int now = p[0];
                int nowCost = p[1];
                for(int[] x : graph.get(now)) {
                    int next = x[0];
                    int cost = x[1];
                    if(nowCost + cost < costs[next]) {
                        costs[next] = nowCost + cost;
                        queue.offer(new int[]{next, costs[next]});
                    }
                }
           }
           l++;
           if(l > k) break;
       }

        if(costs[e] == 1000000000) return -1;
        else return costs[e];
    }

    public static void main(String[] args) {
        // 도시의 개수
        int n = 5;
        // 운항정보
        int[][] flights = {
            {0, 1, 10},
            {1, 2, 20},
            {0, 2, 70},
            {0, 3, 100},
            {1, 3, 80},
            {2, 3, 10},
            {2, 4, 30},
            {3, 4, 10}
        };
        // 출발지
        int s = 0;
        // 도착지
        int e = 3;
        // 최대 환승 횟수
        int k = 1;

        System.out.println(solution(n, flights, s, e, k));
    }
}