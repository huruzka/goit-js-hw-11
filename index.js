import{a as d,S as f,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="51535484-ce6dacd6a97960c9e0e55a6bc",p="https://pixabay.com/api/";async function y(n){const o={key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await d.get(p,{params:o})).data}catch(e){throw new Error("Failed to fetch images: "+e.message)}}const u=document.querySelector(".gallery"),i=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const o=n.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){u.innerHTML=""}function L(){i?i.classList.remove("hidden"):console.error("Loader not found in DOM")}function w(){i&&i.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",async n=>{n.preventDefault();const o=l.querySelector('input[name="search-text"]');if(!o){a.error({title:"Error",message:"Search input not found in the form."});return}const e=o.value.trim();if(!e){a.warning({title:"Warning",message:"Please enter a search query!"});return}b(),L();try{const s=await y(e);if(!s.hits||s.hits.length===0){a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(s.hits)}catch{a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{w()}});
//# sourceMappingURL=index.js.map
