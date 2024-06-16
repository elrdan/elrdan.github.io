"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[121],{402:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var e=i(4848),r=i(8453),s=i(1432);const o=JSON.parse('{"Q":"public class DPBottomUp {\\n\\tpublic static void main(String[] args) {\\n\\t\\tSystem.out.println(\\"fibonacci(10): \\" + fibonacci(10));\\n\\t}\\n\\n\\tstatic int fibonacci(int n) {\\n\\t\\tif(n <= 1) {\\n\\t\\t\\treturn n;\\n\\t\\t}\\n\\n\\t\\tint[] dp = new int[n + 1];\\n\\t\\tdp[0] = 0;\\n\\t\\tdp[1] = 1;\\n\\n\\t\\tfor(int i=2; i<= n; i++) {\\n\\t\\t\\tdp[i] = dp[i - 1] + dp[i - 2];\\n\\t\\t}\\n\\t\\treturn dp[n];\\n\\t}\\n}\\n"}'),a=JSON.parse('{"Q":"import java.util.HashMap;\\n\\npublic class DPTopDown {\\n\\tstatic HashMap<Integer, Integer> memo = new HashMap<>();\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\tSystem.out.println(\\"finonacci(10): \\" + finonacci(10));\\n\\t}\\n\\n\\tstatic int finonacci(int n) {\\n\\t\\tif(memo.containsKey(n)) {\\n\\t\\t\\treturn memo.get(n);\\n\\t\\t}\\n\\t\\tif(n <= 1) {\\n\\t\\t\\treturn n;\\n\\t\\t}\\n\\n\\t\\tmemo.put(n, finonacci(n - 1) + finonacci(n - 2));\\n\\t\\treturn memo.get(n);\\n\\t}\\n}\\n"}'),l={sidebar_position:2,sidebar_label:"2. \ub3d9\uc801 \ud504\ub85c\uadf8\ub798\ubc0d",keywords:["\uc54c\uace0\ub9ac\uc998","java","\ub2e4\uc774\ub098\ubbf9 \ud504\ub85c\uadf8\ub798\ubc0d","DPTopDown","\ub3d9\uc801 \uacc4\ud68d\ubc95"],hide_title:!0},c=void 0,d={id:"blog/algorithm/concept/DynamicProgramming",title:"DynamicProgramming",description:"\ub2e4\uc774\ub098\ubbf9 \ud504\ub85c\uadf8\ub798\ubc0d(Dynamic Programming)",source:"@site/docs/blog/algorithm/concept/DynamicProgramming.mdx",sourceDirName:"blog/algorithm/concept",slug:"/blog/algorithm/concept/DynamicProgramming",permalink:"/en/blog/algorithm/concept/DynamicProgramming",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"2. \ub3d9\uc801 \ud504\ub85c\uadf8\ub798\ubc0d",keywords:["\uc54c\uace0\ub9ac\uc998","java","\ub2e4\uc774\ub098\ubbf9 \ud504\ub85c\uadf8\ub798\ubc0d","DPTopDown","\ub3d9\uc801 \uacc4\ud68d\ubc95"],hide_title:!0},sidebar:"blog",previous:{title:"1. \ub204\uc801\ud569",permalink:"/en/blog/algorithm/concept/PrefixSum"},next:{title:"3. \uadf8\ub798\ud504",permalink:"/en/blog/algorithm/concept/Graph"}},m={},p=[{value:"\ub2e4\uc774\ub098\ubbf9 \ud504\ub85c\uadf8\ub798\ubc0d(Dynamic Programming)",id:"\ub2e4\uc774\ub098\ubbf9-\ud504\ub85c\uadf8\ub798\ubc0ddynamic-programming",level:2},{value:"\ubb38\uc81c\ud574\uacb0 \ubc29\uc2dd",id:"\ubb38\uc81c\ud574\uacb0-\ubc29\uc2dd",level:3},{value:"\uc18d\uc131",id:"\uc18d\uc131",level:3},{value:"\ucf54\ub4dc \uad6c\ud604 - \ud53c\ubcf4\ub098\uce58 \uc218\uc5f4 \uacc4\uc0b0 \uc608\uc81c",id:"\ucf54\ub4dc-\uad6c\ud604---\ud53c\ubcf4\ub098\uce58-\uc218\uc5f4-\uacc4\uc0b0-\uc608\uc81c",level:3}];function h(n){const t={a:"a",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h2,{id:"\ub2e4\uc774\ub098\ubbf9-\ud504\ub85c\uadf8\ub798\ubc0ddynamic-programming",children:"\ub2e4\uc774\ub098\ubbf9 \ud504\ub85c\uadf8\ub798\ubc0d(Dynamic Programming)"}),"\n",(0,e.jsxs)(t.p,{children:["\ub2e4\uc774\ub098\ubbf9 \ud504\ub85c\uadf8\ub798\ubc0d\uc740 \ubcf5\uc7a1\ud55c \ubb38\uc81c\ub97c \ub354 \uc791\uc740 \ud558\uc704 \ubb38\uc81c\ub85c \ub098\ub204\uc5b4 \ud574\uacb0\ud558\ub294 \uc54c\uace0\ub9ac\uc998 \uc124\uacc4 \uae30\ubc95\uc785\ub2c8\ub2e4.",(0,e.jsx)("br",{}),"\n\uc774 \ubc29\uc2dd\uc740 \ub2e4\uc74c \uc8fc\uc694 \ubb38\uc81c\ud574\uacb0 \ubc29\uc2dd\uacfc \uc18d\uc131\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,e.jsx)(t.h3,{id:"\ubb38\uc81c\ud574\uacb0-\ubc29\uc2dd",children:"\ubb38\uc81c\ud574\uacb0 \ubc29\uc2dd"}),"\n",(0,e.jsxs)(t.ol,{children:["\n",(0,e.jsx)(t.li,{children:(0,e.jsx)(t.strong,{children:"\uc0c1\ud5a5\uc2dd(bottom-up)"})}),"\n"]}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:["\uc791\uc740 \ubd80\ubd84 \ubb38\uc81c\ubd80\ud130 \ucc28\ub840\ub300\ub85c \ud574\uacb0\ud558\uc5ec \uc804\uccb4 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uc774 \ubc29\uc2dd\uc740 for \ub610\ub294 while\uc744 \uc0ac\uc6a9\ud558\uc5ec \uad6c\ud604\ud558\uace0, \uc2a4\ud0dd \uc624\ubc84\ud50c\ub85c\uc758 \uc704\ud5d8\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",(0,e.jsx)("br",{})]}),"\n"]}),"\n",(0,e.jsxs)(t.ol,{start:"2",children:["\n",(0,e.jsx)(t.li,{children:(0,e.jsx)(t.strong,{children:"\ud558\ud5a5\uc2dd(top-down) - \uba54\ubaa8\uc774\uc81c\uc774\uc158"})}),"\n"]}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:["\ud070 \ubb38\uc81c\ub97c \uc791\uc740 \ubd80\ubd84 \ubb38\uc81c\ub85c \ub098\ub204\uc5b4 \ud574\uacb0\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 ",(0,e.jsx)(t.em,{children:(0,e.jsx)(t.strong,{children:"\uc7ac\uadc0 \ud638\ucd9c"})}),"\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc7ac\uadc0 \ud638\ucd9c\uc744 \ud1b5\ud574 \uacc4\uc0b0\ub41c \uac12\uc740 \ub530\ub85c \uc800\uc7a5\ud558\uc5ec \uc911\ubcf5\uacc4\uc0b0\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,e.jsx)(t.li,{children:"\uc8fc\uc758\ud560\uc810: \uc7ac\uadc0 \ud568\uc218\uac00 \ub108\ubb34 \ub9ce\uc740 \ud638\ucd9c\uc744 \ubc1c\uc0dd\uc2dc\ucf1c \ud568\uc218 \ud638\ucd9c\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc2a4\ud0dd \uba54\ubaa8\ub9ac\uac00 \ud55c\uacc4\uc5d0 \ub3c4\ub2ec\ud558\uba74 \uc2a4\ud0dd \uc624\ubc84\ud50c\ub85c(Stack Overflow) \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,e.jsx)(t.h3,{id:"\uc18d\uc131",children:"\uc18d\uc131"}),"\n",(0,e.jsxs)(t.ol,{children:["\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"\ucd5c\uc801 \ubd80\ubd84 \uad6c\uc870(Optimal Substructure)"}),": \ud070 \ubb38\uc81c\uc758 \ucd5c\uc801 \ud574\uacb0 \ubc29\ubc95\uc774 \uadf8\uac83\uc744 \uad6c\uc131\ud558\ub294 \uc791\uc740 \ubb38\uc81c\ub4e4\uc758 \ucd5c\uc801 \ud574\uacb0 \ubc29\ubc95\uc73c\ub85c \uad6c\uc131\ub420 \uc218 \uc788\ub2e4\ub294 \uc131\uc9c8\uc785\ub2c8\ub2e4."]}),"\n",(0,e.jsxs)(t.li,{children:[(0,e.jsx)(t.strong,{children:"\uc911\ubcf5\ub418\ub294 \ud558\uc704 \ubb38\uc81c(Overlapping SubProblems)"}),": \ub3d9\uc77c\ud55c \uc791\uc740 \ubb38\uc81c\uac00 \uc5ec\ub7ec \ubc88 \ubc18\ubcf5\ud558\uc5ec \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0, \uc774 \ubb38\uc81c\ub4e4\uc758 \ud574\uacb0 \uacb0\uacfc\ub97c \uc800\uc7a5\ud558\uc5ec \uc911\ubcf5 \uacc4\uc0b0\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,e.jsx)(t.h3,{id:"\ucf54\ub4dc-\uad6c\ud604---\ud53c\ubcf4\ub098\uce58-\uc218\uc5f4-\uacc4\uc0b0-\uc608\uc81c",children:"\ucf54\ub4dc \uad6c\ud604 - \ud53c\ubcf4\ub098\uce58 \uc218\uc5f4 \uacc4\uc0b0 \uc608\uc81c"}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.em,{children:(0,e.jsx)(t.strong,{children:"1. bottom-up \ubc29\uc2dd \ud480\uc774"})})}),"\n",(0,e.jsx)(s.A,{className:"language-java",children:o.Q}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.em,{children:(0,e.jsx)(t.strong,{children:"2. top-down \ubc29\uc2dd \ud480\uc774"})})}),"\n",(0,e.jsx)(s.A,{className:"language-java",children:a.Q}),"\n",(0,e.jsxs)(t.p,{children:[(0,e.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(4074).A+"",children:"DP bottom-up \ubc29\uc2dd \ucf54\ub4dc \ubcf4\uae30"})," ",(0,e.jsx)("br",{}),"\n",(0,e.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(6275).A+"",children:"DP top-down \ubc29\uc2dd \ucf54\ub4dc \ubcf4\uae30"})]})]})}function g(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(h,{...n})}):h(n)}},4074:(n,t,i)=>{i.d(t,{A:()=>e});const e=i.p+"assets/files/DPBottomUp-022b4126141632f00e9e0022bef583f2.java"},6275:(n,t,i)=>{i.d(t,{A:()=>e});const e=i.p+"assets/files/DPTopDown-bcf736e53f75f355d9f16e738ec6bdbe.java"}}]);