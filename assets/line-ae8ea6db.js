import{a as h}from"./array-9f3ba611.js";import{w as d,c as o}from"./path-53f90ab3.js";import{p as v}from"./mermaid.core-5e570598.js";function w(t){return t[0]}function b(t){return t[1]}function P(t,u){var p=o(!0),i=null,l=v,r=null,m=d(e);t=typeof t=="function"?t:t===void 0?w:o(t),u=typeof u=="function"?u:u===void 0?b:o(u);function e(n){var f,g=(n=h(n)).length,s,c=!1,a;for(i==null&&(r=l(a=m())),f=0;f<=g;++f)!(f<g&&p(s=n[f],f,n))===c&&((c=!c)?r.lineStart():r.lineEnd()),c&&r.point(+t(s,f,n),+u(s,f,n));if(a)return r=null,a+""||null}return e.x=function(n){return arguments.length?(t=typeof n=="function"?n:o(+n),e):t},e.y=function(n){return arguments.length?(u=typeof n=="function"?n:o(+n),e):u},e.defined=function(n){return arguments.length?(p=typeof n=="function"?n:o(!!n),e):p},e.curve=function(n){return arguments.length?(l=n,i!=null&&(r=l(i)),e):l},e.context=function(n){return arguments.length?(n==null?i=r=null:r=l(i=n),e):i},e}export{P as l};
