import{r as i,j as l,N as f,O as g,R as S,a as u,b as y,c as x,B as L}from"./vendor.ec90c5f3.js";const R=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}};R();function h(){try{return"localStorage"in window&&window.localStorage!==null}catch{return!1}}function T(n,a){const[c,o]=i.exports.useState(()=>{if(h()){const r=window.localStorage.getItem(n);return r?JSON.parse(r):a}return a}),t=i.exports.useCallback(r=>{const s=r instanceof Function?r(c):r;h()&&window.localStorage.setItem(n,JSON.stringify(s)),o(s)},[n,c]);return[c,t]}const e=l.exports.jsx,d=l.exports.jsxs,v=l.exports.Fragment,m="dark",p=i.exports.createContext({theme:m,toggleTheme:()=>{}}),w=()=>i.exports.useContext(p);function b({children:n}){const[a,c]=T("theme",m);i.exports.useEffect(()=>{a==="light"?document.body.classList.add("light"):document.body.classList.remove("light")},[a]);const o=i.exports.useCallback(()=>{c(a==="dark"?"light":"dark")},[a,c]),t=i.exports.useMemo(()=>({theme:a,toggleTheme:o}),[a,o]);return e(p.Provider,{value:t,children:n})}var O="assets/dark.ffebe163.svg",N="assets/light.ca2d6242.svg";function j(){const{theme:n,toggleTheme:a}=w();return e("nav",{children:d("ul",{children:[Object.entries({"/":"Home","/about":"About"}).map(([o,t])=>e("li",{children:e(f,{to:o,className:({isActive:r})=>r?"active":"",children:t,"data-v-83c39cb6":!0}),"data-v-83c39cb6":!0},o)),e("li",{children:e("button",{id:"toggle-theme",title:"Toggle theme",type:"button",onClick:()=>{a()},children:e("svg",{"data-src":n==="dark"?N:O,"data-v-83c39cb6":!0}),"data-v-83c39cb6":!0}),"data-v-83c39cb6":!0})],"data-v-83c39cb6":!0}),"data-v-83c39cb6":!0})}var k="assets/logo.bf5750fd.svg";function C(){return d("header",{children:[d("div",{id:"title",children:[e("svg",{id:"logo","data-src":k,"data-v-be70ab1a":!0}),e("span",{children:"React - Vite - TypeScript template","data-v-be70ab1a":!0})],"data-v-be70ab1a":!0}),e(j,{"data-v-be70ab1a":!0})],"data-v-be70ab1a":!0})}function I(){return d(b,{children:[e(C,{"data-v-47d7433d":!0}),e("main",{children:e(g,{"data-v-47d7433d":!0}),"data-v-47d7433d":!0}),e("aside",{"data-v-47d7433d":!0}),e("footer",{"data-v-47d7433d":!0})],"data-v-47d7433d":!0})}function A(){return d(v,{children:[e("h1",{children:"Home","data-v-88cc4cb0":!0}),e("p",{children:"Welcome to your React app!","data-v-88cc4cb0":!0})]})}function H(){return d(v,{children:[e("h1",{children:"About","data-v-d09b4cd0":!0}),e("p",{children:"This is an opinionated starting point, to get you going with React.","data-v-d09b4cd0":!0}),e("p",{children:"It uses:","data-v-d09b4cd0":!0}),d("ul",{children:[e("li",{children:"Vite","data-v-d09b4cd0":!0}),e("li",{children:"TypeScript","data-v-d09b4cd0":!0}),e("li",{children:"ESLint","data-v-d09b4cd0":!0}),e("li",{children:"Prettier","data-v-d09b4cd0":!0}),e("li",{children:"React Router","data-v-d09b4cd0":!0}),e("li",{children:"Scoped SCSS","data-v-d09b4cd0":!0})],"data-v-d09b4cd0":!0})]})}function M(){return e(b,{children:e(S,{children:d(u,{path:"/",element:e(I,{}),children:[e(u,{index:!0,element:e(A,{})}),e(u,{path:"about",element:e(H,{})})]})})})}y.render(e(x.StrictMode,{children:e(L,{basename:"react-vite-ts-eslint-prettier-template",children:e(M,{})})}),document.getElementById("root"));
