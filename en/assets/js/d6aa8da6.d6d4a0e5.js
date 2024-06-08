"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[546],{2347:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>x});var n=e(4848),l=e(8453),i=e(1432);const m=JSON.parse('{"Q":"public class PrefixSum {\\n\\tpublic static void main(String[] args) {\\n\\t\\tint i = 2;\\n\\t\\tint j = 5;\\n\\t\\tint[] arr = {1, 3, 5, 7, 9 , 11};\\n\\t\\tint[] arrSum = new int[arr.length];\\n\\n\\t\\tprefixSum(arr, arrSum);\\n\\n\\t\\tSystem.out.println(arrSum[j] - arrSum[i-1]);\\n\\t}\\n\\n\\tstatic void prefixSum(int[] arr, int[] arrSum) {\\n\\t\\tarrSum[0] = arr[0];\\n\\t\\tfor(int i=1; i<arr.length; i++) {\\n\\t\\t\\tarrSum[i] = arrSum[i-1] + arr[i];\\n\\t\\t}\\n\\t}\\n}"}'),t={sidebar_position:1,sidebar_label:"\ub204\uc801\ud569",keywords:["\uc54c\uace0\ub9ac\uc998","java","\ub204\uc801\ud569","Prefix Sum","Cumulative Sum"],hide_title:!0},r=void 0,c={id:"blog/algorithm/concept/PrefixSum",title:"PrefixSum",description:"\ub204\uc801\ud569(Prefix Sum, Cumulative Sum)",source:"@site/docs/blog/algorithm/concept/PrefixSum.mdx",sourceDirName:"blog/algorithm/concept",slug:"/blog/algorithm/concept/PrefixSum",permalink:"/en/blog/algorithm/concept/PrefixSum",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\ub204\uc801\ud569",keywords:["\uc54c\uace0\ub9ac\uc998","java","\ub204\uc801\ud569","Prefix Sum","Cumulative Sum"],hide_title:!0},sidebar:"blog",next:{title:"\ub3d9\uc801 \ud504\ub85c\uadf8\ub798\ubc0d",permalink:"/en/blog/algorithm/concept/DynamicProgramming"}},h={},x=[{value:"\ub204\uc801\ud569(Prefix Sum, Cumulative Sum)",id:"\ub204\uc801\ud569prefix-sum-cumulative-sum",level:2},{value:"\ub204\uc801\ud569\uc758 \uacf5\uc2dd",id:"\ub204\uc801\ud569\uc758-\uacf5\uc2dd",level:3},{value:"\ub204\uc801\ud569 \ud65c\uc6a9 \uc608\uc2dc",id:"\ub204\uc801\ud569-\ud65c\uc6a9-\uc608\uc2dc",level:3},{value:"\uc608\uc2dc \ubb38\uc81c",id:"\uc608\uc2dc-\ubb38\uc81c",level:3},{value:"\ucf54\ub4dc \uad6c\ud604",id:"\ucf54\ub4dc-\uad6c\ud604",level:3}];function d(s){const a={annotation:"annotation",em:"em",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"\ub204\uc801\ud569prefix-sum-cumulative-sum",children:"\ub204\uc801\ud569(Prefix Sum, Cumulative Sum)"}),"\n",(0,n.jsxs)(a.p,{children:["\ub204\uc801\ud569\uc740 \uc8fc\uc5b4\uc9c4 \ubc30\uc5f4\uc774\ub098 \ub9ac\uc2a4\ud2b8\uc758 \uac01 \uc694\uc18c\uae4c\uc9c0 \ud569\uc744 \uad6c\ud558\uc5ec \uc0c8\ub85c\uc6b4 \ubc30\uc5f4\uc774\ub098 \ub9ac\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.",(0,n.jsx)("br",{}),"\n\uc774 \ubc29\uc2dd\uc740 \ub370\uc774\ud130\uc758 \ub204\uc801 \ubcc0\ud654\ub97c \ubd84\uc11d\ud558\uac70\ub098, \ud2b9\uc815 \uc2dc\uc810\uae4c\uc9c0\uc758 \ud569\uc744 \ube60\ub974\uac8c \uacc4\uc0b0\ud560 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(a.h3,{id:"\ub204\uc801\ud569\uc758-\uacf5\uc2dd",children:"\ub204\uc801\ud569\uc758 \uacf5\uc2dd"}),"\n",(0,n.jsxs)(a.p,{children:["\uc8fc\uc5b4\uc9c4 \ubc30\uc5f4[",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mn,{children:"2"})]}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"n"})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"a_1, a_2,...,a_n"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"..."}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]})]})})]}),"]\uc774 \uc788\uc744\ub54c, \ub204\uc801\ud569 \ubc30\uc5f4[",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mn,{children:"2"})]}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"n"})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"s_1, s_2,..., s_n"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"..."}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]})]})})]}),"]\uc740 \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ub429\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"i"})]}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mn,{children:"2"})]}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"i"})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"s_i = a_1 + a_2 + ... + a_i"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord",children:"..."}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]})]})]})]})}),"\n",(0,n.jsx)(a.p,{children:"\uc989, \ub204\uc801\ud569 \ubc30\uc5f4\uc758 \uac01 \uc694\uc18c\ub294 \uc6d0\ub798 \ubc30\uc5f4\uc758 \ucc98\uc74c\ubd80\ud130 \ud574\ub2f9\uc694\uc18c\uae4c\uc9c0\uc758 \ud569\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."}),"\n",(0,n.jsx)(a.h3,{id:"\ub204\uc801\ud569-\ud65c\uc6a9-\uc608\uc2dc",children:"\ub204\uc801\ud569 \ud65c\uc6a9 \uc608\uc2dc"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"\uc2dc\uac04\uc5d0 \ub530\ub978 \ub370\uc774\ud130 \ubd84\uc11d: \ub9e4\ucd9c \ub370\uc774\ud130, \uae30\uc628 \ubcc0\ud654 \ub4f1 \uc2dc\uac04\uc5d0 \ub530\ub978 \ub204\uc801 \ubcc0\ud654\ub97c \ubd84\uc11d\ud560 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(a.li,{children:["\uad6c\uac04 \ud569 \uacc4\uc0b0: \ud2b9\uc815 \uad6c\uac04\uc758 \ud569\uc744 \ube60\ub974\uac8c \uacc4\uc0b0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ub204\uc801\ud569 \ubc30\uc5f4\uc744 \uc0ac\uc6a9\ud558\uba74[",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"j"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"i, j"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),"] \uad6c\uac04\uc758 \ud569\uc744 ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"j"})]}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mn,{children:"1"})]})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"s_j - s_{i-1}"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8694em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6389em",verticalAlign:"-0.2083em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(a.span,{className:"mord mtight",children:[(0,n.jsx)(a.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(a.span,{className:"mbin mtight",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mord mtight",children:"1"})]})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.2083em"},children:(0,n.jsx)(a.span,{})})})]})})]})]})]})]}),"\ub85c \uacc4\uc0b0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(a.li,{children:"\ub370\uc774\ud130 \uc2dc\uac01\ud654: \ub204\uc801 \uadf8\ub798\ud504\ub97c \ud1b5\ud574 \ub370\uc774\ud130\uc758 \ubcc0\ud654\ub97c \uc9c1\uad00\uc801\uc73c\ub85c \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"\uc608\uc2dc-\ubb38\uc81c",children:"\uc608\uc2dc \ubb38\uc81c"}),"\n",(0,n.jsx)(a.p,{children:"\ub2e4\uc74c \ubc30\uc5f4\uc774 \uc8fc\uc5b4\uc84c\uc744 \ub54c, \ub204\uc801\ud569 \ubc30\uc5f4\uc744 \uad6c\ud558\uc2dc\uc624."}),"\n",(0,n.jsx)(a.p,{children:"\uc785\ub825\n1, 2, 3, 4, 5"}),"\n",(0,n.jsx)(a.p,{children:"\ucd9c\ub825\n1, 3, 6, 10, 15"}),"\n",(0,n.jsx)(a.h3,{id:"\ucf54\ub4dc-\uad6c\ud604",children:"\ucf54\ub4dc \uad6c\ud604"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.em,{children:(0,n.jsx)(a.strong,{children:"\uc608\uc2dc \ubb38\uc81c \ud480\uc774"})})}),"\n",(0,n.jsx)(i.A,{className:"language-java",children:m.Q})]})}function p(s={}){const{wrapper:a}={...(0,l.R)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(d,{...s})}):d(s)}}}]);