import{a as d,S as f,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const m="51535484-ce6dacd6a97960c9e0e55a6bc",p="https://pixabay.com/api/";async function y(t){const s={key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await d.get(p,{params:s})).data}catch(e){throw new Error("Failed to fetch images: "+e.message)}}const l=document.querySelector(".gallery");let h=new f(".gallery a");function u(){return document.querySelector(".loader")}function g(){const t=u();t&&t.classList.remove("hidden")}function L(){const t=u();t&&t.classList.add("hidden")}function w(){l.innerHTML=""}function b(t){const s=t.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",s),h.refresh()}const c=document.querySelector(".form");c.addEventListener("submit",async t=>{t.preventDefault();const s=c.querySelector('input[name="search-text"]');if(!s){a.error({title:"Error",message:"Search input not found in the form."});return}const e=s.value.trim();if(!e){a.warning({title:"Warning",message:"Please enter a search query!"});return}w(),g();try{const n=await y(e);if(!n.hits||n.hits.length===0){a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(n.hits)}catch{a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{L()}});
//# sourceMappingURL=index.js.map
