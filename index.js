import{a as d,S as f,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="51535484-ce6dacd6a97960c9e0e55a6bc",p="https://pixabay.com/api/";async function y(a){const o={key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await d.get(p,{params:o})).data}catch(e){throw new Error("Failed to fetch images: "+e.message)}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const o=a.map(e=>`
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
    `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){l.innerHTML=""}function L(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async a=>{a.preventDefault();const o=c.querySelector('input[name="search-text"]');if(!o){n.error({title:"Error",message:"Search input not found in the form."});return}const e=o.value.trim();if(!e){n.warning({title:"Warning",message:"Please enter a search query!"});return}b(),L();try{const s=await y(e);if(!s.hits||s.hits.length===0){n.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(s.hits)}catch{n.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{w()}});
//# sourceMappingURL=index.js.map
