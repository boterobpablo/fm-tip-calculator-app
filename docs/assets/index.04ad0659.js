(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const y of r.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&n(y)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const v=document.querySelector("#total-general"),h=document.querySelector("#total-tip"),L=document.querySelector("#resetButton"),d=document.querySelector("#bill"),f=document.querySelector("#people"),a=document.querySelector("#custom");let l=0,c=0,i=0,u=Array.from(document.querySelectorAll("button"));u=u.slice(0,u.length-1);const m=(t,o,s)=>{let n=(t+t*o/100)/s,e=t*o/100/s;(t<0||o<0||s<0)&&(n=0,e=0),(isNaN(n)||n===1/0||n===-1/0||n<0)&&(n=0),(isNaN(e)||e===1/0||e===-1/0||e<0)&&(e=0),v.innerHTML=`$${Number(n.toFixed(2)).toLocaleString("en-US")}`,h.innerHTML=`$${Number(e.toFixed(2)).toLocaleString("en-US")}`},g=()=>{u.forEach(t=>{t.classList.remove("selectedTip"),t.classList.add("unselectedTip")})};d==null||d.addEventListener("change",t=>{l=Number(t.target.value),m(l,i,c)});f==null||f.addEventListener("change",t=>{c=Number(t.target.value),m(l,i,c)});a==null||a.addEventListener("change",t=>{i=Number(t.target.value),g(),m(l,i,c)});L==null||L.addEventListener("click",()=>{v.innerHTML="$0",h.innerHTML="$0",f.value="",d.value="",a.value="",l=0,c=0,i=0,g()});u.forEach(t=>{t.addEventListener("click",o=>{i=Number(o.target.value),!(i<0)&&(a.value="",m(l,i,c),g(),t.classList.remove("unselectedTip"),t.classList.add("selectedTip"))})});