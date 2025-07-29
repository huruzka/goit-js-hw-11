import{a as f,S as g,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const p="51535484-ce6dacd6a97960c9e0e55a6bc",y="https://pixabay.com/api/";async function d(o){try{return(await f.get(y,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(e){throw new Error("Failed to fetch images: "+e.message)}}function h(o){return o.map(e=>`
      <li class="image-card">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </li>
    `).join("")}let c;function L(o){const e=document.querySelector(".gallery"),t=o.map(s=>`
        <li class="gallery-item">
          <a href="${s.largeImageURL}">
            <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${s.likes}</p>
            <p><b>Views:</b> ${s.views}</p>
            <p><b>Comments:</b> ${s.comments}</p>
            <p><b>Downloads:</b> ${s.downloads}</p>
          </div>
        </li>
      `).join("");e.insertAdjacentHTML("beforeend",t),c?c.refresh():c=new g(".gallery a")}function b(){document.querySelector(".gallery").innerHTML=""}const l=document.querySelector(".form"),u=document.querySelector("#gallery");l.addEventListener("submit",async o=>{o.preventDefault();const e=o.currentTarget.elements.query.value.trim();if(!e){n.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}try{const t=await d(e);if(t.hits.length===0){n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.innerHTML="";return}const s=h(t.hits);u.innerHTML=s}catch(t){n.error({title:"Error",message:t.message,position:"topRight"})}});const m=document.querySelector(".loader");l.addEventListener("submit",async o=>{o.preventDefault();const e=o.currentTarget.elements.query.value.trim();if(!e){n.error({message:"Please enter a search query!",position:"topRight"});return}b(),w();try{const t=await d(e);t.hits.length===0?n.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(t.hits)}catch(t){n.error({message:t.message,position:"topRight"})}finally{q(),l.reset()}});function w(){m.classList.remove("hidden")}function q(){m.classList.add("hidden")}
//# sourceMappingURL=index.js.map
