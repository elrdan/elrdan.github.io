"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[711],{9331:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});t(6540);var r=t(8774),a=t(1312),i=t(9024),n=t(6786),c=t(1107),l=t(4848);function h(e){let{year:s,posts:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.A,{as:"h3",id:s,children:s}),(0,l.jsx)("ul",{children:t.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(r.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:s}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:s.map(((e,s)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,{...e})},s)))})})})}function o(e){let{archive:s}=e;const t=(0,a.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,a.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const s=e.reduce(((e,s)=>{const t=s.metadata.date.split("-")[0],r=e.get(t)??[];return e.set(t,[s,...r])}),new Map);return Array.from(s,(e=>{let[s,t]=e;return{year:s,posts:t}}))}(s.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.be,{title:t,description:r}),(0,l.jsxs)(n.A,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.A,{as:"h1",className:"hero__title",children:t}),(0,l.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,l.jsx)("main",{children:h.length>0&&(0,l.jsx)(d,{years:h})})]})]})}}}]);