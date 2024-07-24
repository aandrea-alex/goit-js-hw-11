import{S as h}from"./assets/vendor-5af972a3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const i="/goit-js-hw-11/assets/icons-f810c139.svg",p="https://pixabay.com/api/",g="45097431-2d8d6a9f4785bbcc4049d8cdd",m=r=>new Promise((t,a)=>fetch(r).then(o=>(o.ok||a(new Error(`HTTP error, status: ${o.status}`)),o.json())).then(o=>t(o)).catch(o=>a(o)));function v(r){const t={key:g,q:encodeURIComponent(r),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20},a=`${p}?${new URLSearchParams(t).toString()}`;return new Promise((o,e)=>{m(a).then(s=>{s.hits.length||e("Sorry, there are no images matching your search query. Please, try again!"),o(s.hits)}).catch(s=>{e(`Error fetching images: ${s.message}`)})})}const y=r=>{const{largeImageURL:t,previewURL:a,tags:o,likes:e,views:s,comments:n,downloads:f}=r;return`<li class='card'> 
              <a class='card-link' href='${t}'>                    
                <div class='card-cover-inner'>                
                    <img class='card-cover'
                        src='${a}'
                        alt='${o}'                                                          
                    />                                                  
                  <div class='card-cover-darkened'></div>
                </div>
              </a>                 
              <div class="card-info">
                  <div class="field">
                      <span class="label">Likes</span>
                      <span class="value">${e}</span>    
                  </div>
                  <div class="field">
                      <span class="label">Views</span>
                      <span class="value">${s}</span>   
                  </div>
                  <div class="field">
                      <span class="label">Comments</span>
                      <span class="value">${n}</span>    
                  </div>
                  <div class="field">
                      <span class="label">Downloads</span>
                      <span class="value">${f}</span>    
                  </div>
              </div>
          </li>`};function b(r){return r.map(y).join("")}function w(r,t){const a=b(r);t.innerHTML="",t.insertAdjacentHTML("beforeend",a)}const L="#ffffff",S="#f5f5f5",c=document.querySelector(".gallery");console.log("galleryRef",c);const l=document.querySelector(".loader"),u=document.querySelector(".search-form");u.addEventListener("submit",$);let d=new h(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${i}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${i}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${i}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function $(r){r.preventDefault(),l.style.display="block";const t=r.currentTarget.search.value.trim();v(t).then(a=>x(a)).catch(a=>P())}function P(r){u.search.value="",l.style.display="none",c.style.backgroundColor=S,c.innerHTML="",d.refresh()}function x(r){u.search.value="",l.style.display="none",c.style.backgroundColor=L,console.log("refreshOnSuccess: ",r),w(r,c),d.refresh()}
//# sourceMappingURL=commonHelpers.js.map
