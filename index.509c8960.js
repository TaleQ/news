!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("dIxxU"),c=document.querySelector(".category_btn"),i=document.querySelector(".category_dropdown"),u=document.querySelector(".svg-icon"),a=document.querySelector(".category"),d=document.querySelector("body");c.addEventListener("click",(function(e){e.stopPropagation(),i.classList.toggle("show"),u.classList.toggle("arrow")})),window.addEventListener("load",(function(e){o.default.get("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=".concat(s)).then((function(e){var t=e.data.results,n=t.map((function(e){return e.display_name})),r=t.reduce((function(e,n){return t.indexOf(n)<=3&&e.push(n.display_name),e}),[]),o=t.reduce((function(e,n){return t.indexOf(n)<=5&&e.push(n.display_name),e}),[]),c=t.reduce((function(e,n){return t.indexOf(n)>3&&e.push(n.display_name),e}),[]),i=t.reduce((function(e,n){return t.indexOf(n)>5&&e.push(n.display_name),e}),[]);return d.clientWidth<=320?n.reduce((function(e,t){return e+l(t)}),""):d.clientWidth>320&d.clientWidth<=768?[r.reduce((function(e,t){return e+f(t)}),""),c.reduce((function(e,t){return e+l(t)}),"")]:[o.reduce((function(e,t){return e+f(t)}),""),i.reduce((function(e,t){return e+l(t)}),"")]})).then((function(e){2===e.length?(!function(e){a.insertAdjacentHTML("afterbegin",e)}(e[0]),p(e[1]),c.firstChild.textContent="Others"):p(e)}))}));var s="u4NcxmWo2uFBK0OuatwBNClB29lN33d8";function l(e){return'<a class="dropdown-item" href="#">'.concat(e,"</a>")}function f(e){return'<button href="#">'.concat(e,"</button>")}function p(e){i.innerHTML="".concat(e)}i.addEventListener("click",(function(e){var t=e.target.textContent.toLowerCase();c.firstChild.textContent=e.target.textContent;o.default.get("https://api.nytimes.com/svc/news/v3/content/nyt/".concat(t,".json?api-key=").concat(s,"\n"));i.classList.toggle("show"),u.classList.toggle("arrow")}))}();
//# sourceMappingURL=index.509c8960.js.map
