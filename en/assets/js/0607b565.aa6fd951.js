"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[190],{8435:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var i=e(4848),r=e(8453),a=e(1432);const s=JSON.parse('{"Q":"import java.io.*;\\nimport java.util.*;\\n\\npublic class P11724 {\\n\\t// \ubc29\ubb38 \uc5ec\ubd80\ub97c \uc800\uc7a5\ud558\ub294 \ubc30\uc5f4\\n\\tstatic boolean[] visited;\\n\\t// \uadf8\ub798\ud504\ub97c \uc800\uc7a5\ud558\ub294 \uc778\uc811 \ub9ac\uc2a4\ud2b8 \ubc30\uc5f4\\n\\tstatic List<Integer>[] graph;\\n\\n\\tpublic static void main(String args) throws IOException {\\n\\t\\tBufferedReader br = new BufferedReader(new InputStreamReader(System.in));\\n\\t\\tStringTokenizer st = new StringTokenizer(br.readLine());\\n\\n\\t\\t// \uc815\uc810\uc758 \uac1c\uc218 n\uacfc \uac04\uc120\uc758 \uac1c\uc218 m\\n\\t\\tint n = Integer.parseInt(st.nextToken());\\n\\t\\tint m = Integer.parseInt(st.nextToken());\\n\\n\\t\\t// \uadf8\ub798\ud504\uc640 \ubc29\ubb38 \ubc30\uc5f4 \ucd08\uae30\ud654\\n\\t\\tgraph = new ArrayList[n + 1];\\n\\t\\tvisited = new boolean[n + 1];\\n\\n\\t\\t// \uadf8\ub798\ud504\uc758 \uc815\uc810\uc758 \ub9ac\uc2a4\ud2b8\ub97c \ucd08\uae30\ud654\\n\\t\\tfor(int i = 1; i < n; i++) {\\n\\t\\t\\tgraph[i] = new ArrayList<>();\\n\\t\\t}\\n\\n\\t\\t// \uac04\uc120\uc758 \uc815\ubcf4\ub97c \uc785\ub825\ubc1b\uc544 \uadf8\ub798\ud504\ub97c \uad6c\uc131\\n\\t\\tfor(int i = 0; i < m; i++) {\\n\\t\\t\\tst = new StringTokenizer(br.readLine());\\n\\t\\t\\tint u = Integer.parseInt(st.nextToken());\\n\\t\\t\\tint v = Integer.parseInt(st.nextToken());\\n\\n\\t\\t\\t// \ubb34\ubc29\ud5a5 \uadf8\ub798\ud504\uc774\ubbc0\ub85c \uc591\ucabd\uc5d0 \uac04\uc120\uc744 \ucd94\uac00\\n\\t\\t\\tgraph[u].add(v);\\n\\t\\t\\tgraph[v].add(u);\\n\\t\\t}\\n\\n\\t\\t// \uc5f0\uacb0 \uc694\uc18c\uc758 \uac1c\uc218 count \ubcc0\uc218\\n\\t\\tint components = 0;\\n\\t\\t// \ubaa8\ub4e0 \uc815\uc810\uc744 \uc21c\ud68c\ud558\uba70 \ubc29\ubb38\ud558\uc9c0 \uc54a\uc740 \uc815\uc810 \uccb4\ud06c\\n\\t\\tfor(int i = 1; i <= n; i++) {\\n\\t\\t\\tif(!visited[i]) {\\n\\t\\t\\t\\t// \ubc29\ubb38\ud558\uc9c0 \uc54a\uc740 \uc815\uc810\uc774 \uc788\uc73c\uba74 bfs\\n\\t\\t\\t\\tbfs(i);\\n\\t\\t\\t\\t// \uc5f0\uacb0 \uc694\uc18c\uc758 \uac1c\uc218\ub97c \uc99d\uac00\\n\\t\\t\\t\\tcomponents++;\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\tSystem.out.println(components);\\n\\t}\\n\\n\\tstatic void bfs(int start) {\\n\\t\\tQueue<Integer> queue = new LinkedList<>();\\n\\t\\t// \uc2dc\uc791 \uc815\uc810\uc744 \ud050\uc5d0 \ucd94\uac00 \ubc0f \ubc29\ubb38 \ucc98\ub9ac\\n\\t\\tqueue.add(start);\\n\\t\\tvisited[start] = true;\\n\\n\\t\\twhile(!queue.isEmpty()) {\\n\\t\\t\\tint node = queue.poll();\\n\\n\\t\\t\\t// \uc778\uc811\ud55c \ubaa8\ub4e0 \uc815\uc810\uc744 \uc21c\ud68c\\n\\t\\t\\tfor(int vertex: graph[node]) {\\n\\t\\t\\t\\t// \ubc29\ubb38\ud558\uc9c0 \uc54a\uc740 \uc815\uc810\uc744 \ud050\uc5d0 \ucd94\uac00\ud558\uace0 \ubc29\ubb38 \ucc98\ub9ac\\n\\t\\t\\t\\tif(!visited[vertex]) {\\n\\t\\t\\t\\t\\tqueue.add(vertex);\\n\\t\\t\\t\\t\\tvisited[vertex] = true;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n"}'),o={title:"\uc5f0\uacb0 \uc694\uc18c\uc758 \uac1c\uc218 - \ubc31\uc900 11724",date:"2024-06-16",author:"elrdan",keywords:["\uc54c\uace0\ub9ac\uc998","\ubc31\uc900","java"],hide_title:!0},l=void 0,d={id:"blog/algorithm/baekjoon/p11724",title:"\uc5f0\uacb0 \uc694\uc18c\uc758 \uac1c\uc218 - \ubc31\uc900 11724",description:"\ubc31\uc900 11724\ubc88: \uc5f0\uacb0 \uc694\uc18c\uc758 \uac1c\uc218",source:"@site/docs/blog/algorithm/baekjoon/p11724.mdx",sourceDirName:"blog/algorithm/baekjoon",slug:"/blog/algorithm/baekjoon/p11724",permalink:"/en/blog/algorithm/baekjoon/p11724",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\uc5f0\uacb0 \uc694\uc18c\uc758 \uac1c\uc218 - \ubc31\uc900 11724",date:"2024-06-16",author:"elrdan",keywords:["\uc54c\uace0\ub9ac\uc998","\ubc31\uc900","java"],hide_title:!0},sidebar:"blog",previous:{title:"3. \uadf8\ub798\ud504",permalink:"/en/blog/algorithm/concept/Graph"}},c={},p=[{value:"\ubc31\uc900 11724\ubc88: \uc5f0\uacb0 \uc694\uc18c\uc758 \uac1c\uc218",id:"\ubc31\uc900-11724\ubc88-\uc5f0\uacb0-\uc694\uc18c\uc758-\uac1c\uc218",level:2},{value:"\uc54c\uace0\ub9ac\uc998 \uc124\uba85",id:"\uc54c\uace0\ub9ac\uc998-\uc124\uba85",level:3},{value:"\uc54c\uace0\ub9ac\uc998 \ub2e8\uacc4",id:"\uc54c\uace0\ub9ac\uc998-\ub2e8\uacc4",level:3}];function u(t){const n={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\ubc31\uc900-11724\ubc88-\uc5f0\uacb0-\uc694\uc18c\uc758-\uac1c\uc218",children:"\ubc31\uc900 11724\ubc88: \uc5f0\uacb0 \uc694\uc18c\uc758 \uac1c\uc218"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.acmicpc.net/problem/11724",children:"\ubc31\uc900 - \uc5f0\uacb0 \uc694\uc18c\uc758 \uac1c\uc218 \ubb38\uc81c \ubcf4\uae30"})}),"\n",(0,i.jsx)(n.h3,{id:"\uc54c\uace0\ub9ac\uc998-\uc124\uba85",children:"\uc54c\uace0\ub9ac\uc998 \uc124\uba85"}),"\n",(0,i.jsx)(n.p,{children:"\uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 DFS(\uae4a\uc774 \uc6b0\uc120 \ud0d0\uc0c9) \ub610\ub294 BFS(\ub108\ube44 \uc6b0\uc120 \ud0d0\uc0c9)\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uadf8\ub798\ud504\uc758 \ubaa8\ub4e0 \uc815\uc810\uc744 \ud0d0\uc0c9\ud558\uba74\uc11c \ubc29\ubb38\ud558\uc9c0 \uc54a\uc740 \uc815\uc810\uc744 \uc0c8\ub85c\uc6b4 \uc5f0\uacb0 \uc694\uc18c\ub85c \uac04\uc8fc\ud558\uace0, \ud574\ub2f9 \uc815\uc810\uacfc \uc5f0\uacb0\ub41c \ubaa8\ub4e0 \uc815\uc810\uc744 \ubc29\ubb38\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"\uc54c\uace0\ub9ac\uc998-\ub2e8\uacc4",children:"\uc54c\uace0\ub9ac\uc998 \ub2e8\uacc4"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\uadf8\ub798\ud504\ub97c \uc778\uc811 \ub9ac\uc2a4\ud2b8\ub85c \ud45c\ud604\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\ubaa8\ub4e0 \uc815\uc810\uc744 \ubc29\ubb38\ud558\uba74\uc11c, \ubc29\ubb38\ud558\uc9c0 \uc54a\uc740 \uc815\uc810\uc774 \uc788\ub2e4\uba74 \uc0c8\ub85c\uc6b4 \uc5f0\uacb0 \uc694\uc18c\ub85c \uac04\uc8fc\ud558\uace0 DFS \ub610\ub294 BFS\ub97c \uc218\ud589\ud558\uc5ec \ubaa8\ub4e0 \uc815\uc810\uc744 \ubc29\ubb38\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\ubc29\ubb38\ud558\uc9c0 \uc54a\uc740 \uc815\uc810\uc774 \ub354 \uc774\uc0c1 \uc5c6\uc744 \ub54c\uae4c\uc9c0 \ubc18\ubcf5\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\uc5f0\uacb0 \uc694\uc18c\uc758 \uac1c\uc218\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(a.A,{className:"language-java",children:s.Q})]})}function h(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}}}]);