"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[906],{433:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=e(4848),s=e(8453),i=e(1432);const a=JSON.parse('{"Q":"public class P43165 {\\n\\tstatic int count = 0;\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\tint[] numbers = {1, 1, 1, 1, 1};\\n\\t\\tint target = 3;\\n\\n\\t\\tdfs(numbers, target, 0, 0);\\n\\n\\t\\tSystem.out.println(count);\\n\\t}\\n\\n\\tstatic void dfs(int[] numbers, int target, int index, int sum) {\\n\\t\\t// \ubaa8\ub4e0 \uc22b\uc790\ub97c \uc0ac\uc6a9\ud55c \uacbd\uc6b0\\n\\t\\tif(index == numbers.length) {\\n\\t\\t\\t// \ud569\uc774 \ud0c0\uac9f\uacfc \uc77c\uce58\ud558\uba74 \uce74\uc6b4\ud2b8 \uc99d\uac00\\n\\t\\t\\tif(sum == target) {\\n\\t\\t\\t\\tcount++;\\n\\t\\t\\t}\\n\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\n\\t\\t// \ud604\uc7ac \uc22b\uc790\ub97c \ub354\ud558\ub294 \uacbd\uc6b0\\n\\t\\tdfs(numbers, target, index + 1, sum + numbers[index]);\\n\\t\\t// \ud604\uc7ac \uc22b\uc790\ub97c \ube7c\ub294 \uacbd\uc6b0\\n\\t\\tdfs(numbers, target, index + 1, sum - numbers[index]);\\n\\t}\\n}\\n"}'),l={title:"\ud0c0\uac9f \ub118\ubc84 - \ud504\ub85c\uadf8\ub798\uba38\uc2a4 43165",date:"2024-06-17",author:"elrdan",keywords:["\uc54c\uace0\ub9ac\uc998","\ubc31\uc900","java"],hide_title:!0},o=void 0,d={id:"blog/algorithm/programmers/P43165",title:"\ud0c0\uac9f \ub118\ubc84 - \ud504\ub85c\uadf8\ub798\uba38\uc2a4 43165",description:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4 43165\ubc88: \ud0c0\uac9f \ub118\ubc84",source:"@site/docs/blog/algorithm/programmers/P43165.mdx",sourceDirName:"blog/algorithm/programmers",slug:"/blog/algorithm/programmers/P43165",permalink:"/en/blog/algorithm/programmers/P43165",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\ud0c0\uac9f \ub118\ubc84 - \ud504\ub85c\uadf8\ub798\uba38\uc2a4 43165",date:"2024-06-17",author:"elrdan",keywords:["\uc54c\uace0\ub9ac\uc998","\ubc31\uc900","java"],hide_title:!0}},c={},m=[{value:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4 43165\ubc88: \ud0c0\uac9f \ub118\ubc84",id:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4-43165\ubc88-\ud0c0\uac9f-\ub118\ubc84",level:2},{value:"\uc54c\uace0\ub9ac\uc998 \uc124\uba85",id:"\uc54c\uace0\ub9ac\uc998-\uc124\uba85",level:3},{value:"\uc54c\uace0\ub9ac\uc998 \ub2e8\uacc4",id:"\uc54c\uace0\ub9ac\uc998-\ub2e8\uacc4",level:3}];function u(t){const n={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4-43165\ubc88-\ud0c0\uac9f-\ub118\ubc84",children:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4 43165\ubc88: \ud0c0\uac9f \ub118\ubc84"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://school.programmers.co.kr/learn/courses/30/lessons/43165",children:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4 - \ud0c0\uac9f \ub118\ubc84 \ubb38\uc81c \ubcf4\uae30"})}),"\n",(0,r.jsx)(n.h3,{id:"\uc54c\uace0\ub9ac\uc998-\uc124\uba85",children:"\uc54c\uace0\ub9ac\uc998 \uc124\uba85"}),"\n",(0,r.jsx)(n.p,{children:"\uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 DFS(\uae4a\uc774 \uc6b0\uc120 \ud0d0\uc0c9) \ub610\ub294 BFS(\ub108\ube44 \uc6b0\uc120 \ud0d0\uc0c9)\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ubaa8\ub4e0 \uacbd\uc6b0\uc758 \uc218\ub97c \uacc4\uc0b0\ud558\uc5ec \ub9c8\uc9c0\ub9c9 index\uc5d0 \ub3c4\ub2ec\ud588\uc744 \ub54c, sum\uc758 \uac12\uc774 target(\ubaa9\ud45c\uac12)\uacfc \uac19\uc740\uc9c0\ub97c \ube44\uad50\ud558\uc5ec count\ub97c \uc99d\uac00 \uc2dc\ud0a4\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h3,{id:"\uc54c\uace0\ub9ac\uc998-\ub2e8\uacc4",children:"\uc54c\uace0\ub9ac\uc998 \ub2e8\uacc4"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"numbers, target \uac12\uc744 \uc785\ub825\ubc1b\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"DFS\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac01 \uc22b\uc790\uc5d0 + \ub610\ub294 - \ub97c \uc801\uc6a9\ud55c \ubaa8\ub4e0 \uacbd\ub85c\ub97c \ud0d0\uc0c9\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ub9c8\uc9c0\ub9c9 index\uc5d0 \ub3c4\ub2ec\ud588\uc744\ub54c \ub354\ud574\uc9c4 \uac12(sum)\uc774 target\uacfc \uc77c\uce58\ud558\ub294 \uacbd\uc6b0\uc758 \uc218\ub97c \uce74\uc6b4\ud2b8\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uce74\uc6b4\ud2b8 \uc22b\uc790\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(i.A,{className:"language-java",children:a.Q})]})}function h(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}}}]);