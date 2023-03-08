function t(t){return t&&t.__esModule?t.default:t}function e(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},r=n.parcelRequired7c6;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){a[t]=e},n.parcelRequired7c6=r),r.register("bGSDD",(function(n,i){e(n.exports,"getFavorite",(function(){return _})),e(n.exports,"createMarkupForCardOnSearch",(function(){return d}));var a=r("fWY1B"),o=r("eeO3V"),s=r("fb9GJ"),c=r("hRMcF");const u={form:document.querySelector(".form"),input:document.querySelector(".form__input"),list:document.querySelector(".cards__list--home"),iconSvg:new URL(r("fCGbF")),cardListFavorite:document.querySelector(".cards__list-favorite"),containerPagination:document.querySelector(".tui-pagination")},l=new(0,a.default);u.form.addEventListener("submit",(async function(e){if(e.preventDefault(),""===u.input.value.trim())return;l.searchQuery=u.input.value,l.fetchOnSearchQuery().then((({docs:e,meta:n})=>{u.list.innerHTML="";const i=_(),a={totalItems:n.hits=100,itemsPerPage:8,visiblePages:3,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},o=new(t(s))(u.containerPagination,a);if(0===e.length){const t=`<img src="${new URL(r("jLChH"))}" alt="We haven't found news at your request">`;u.list.innerHTML=t,u.containerPagination.style="display: none"}else{const t=e.slice(0,9).map((t=>d(t,Boolean(i?.hasOwnProperty(t._id))))).join("");u.list.innerHTML=t,(0,c.createWeatherRendered)(),o.on("afterMove",(async t=>{const{page:e}=t;try{const{docs:t}=await l.fetchOnSearchQuery(e),n=t.slice(0,9).map((t=>d(t,Boolean(i?.hasOwnProperty(t._id))))).join("");u.list.innerHTML=n,(0,c.createWeatherRendered)()}catch(t){console.log(t)}})),o.on("afterMove",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))}}))}));const p=`Add to favorite ${h("icon-heart")}`,f=`Remove from favorite ${h("icon-heart-full")}`;function d(t,e,n=!1){const{abstract:i,pub_date:a,multimedia:s,section_name:c,headline:u,web_url:l,_id:d}=t,h=d.replace(/[^+\d]/g,""),g=a,v=c,m=u.main,y=l,b=()=>{const t=document.querySelector(`.button__add-favorite--${h}`);t.classList.toggle("button__add-favorite--active"),t.classList.contains("button__add-favorite--active")?t.innerHTML=f:t.innerHTML=p};let x=null;x=s[0]?new URL(`https://www.nytimes.com/${s[0]?.url}`,"file:///src/scripts/search-area.js"):new URL(r("jLChH")),setTimeout((()=>{e&&b();document.querySelector(`.button__add-favorite--${h}`).onclick=w(h,t)}),0);const w=(t,e)=>()=>{b();const i=_();let a=i;if(i.hasOwnProperty(t)){if(delete a[t],n){document.querySelector(`.card_item-${t}`).remove()}}else{const n={[t]:e};a={...i,...n}}localStorage.setItem("favoriteBySearch",JSON.stringify(a))};return`\n  <div class="card_item card_item-${h}">\n    <div class="card_item-header">\n      <img class="card_item-image" src="${x}" alt="imageCaption" loading="lazy" />\n      <span class="card_item-section">${v}</span>\n      <button class="button__add-favorite button__add-favorite--${h}" data-id="${h}">\n        ${p}\n      </button>\n    </div>\n    <div class="cart_item-content">\n      <div class="card_item-text">\n        <h1 class="card_item-title">${m}</h1>\n        <p class="card_item-description">${i}</p>\n      </div>\n      <div class="card_item-info">\n        <span class="card_item-date">${(0,o.default)(g)}</span>\n        <a class="card__link-btn" href="${y}" data-title="${m}" target="_blank">\n          <button class="button__read-more">\n            Read more\n          </button>\n        </a>\n      </div>\n    </div>\n  </div>\n  `}function h(t){return`\n    <svg class="button__icon-svg">\n      <use href="${u.iconSvg}#${t}"></use>\n    </svg>\n  `}function _(){return JSON.parse(localStorage.getItem("favoriteBySearch"))||{}}})),r.register("fb9GJ",(function(t,e){
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
var n;window,n=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,a,r,o=Object.prototype.hasOwnProperty;for(a=1,r=arguments.length;a<r;a+=1)for(i in n=arguments[a])o.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),a=n(17),r=n(6);t.exports=function(t,e,n){i(t)?a(t,e,n):r(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),a=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(a(n,e.static),delete e.static),a(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var a,r;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,a=n;n>=0&&a<r;a+=1)if(e[a]===t)return a;return-1}},function(t,e,n){var i=n(29),a=n(30),r=n(5),o={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),a=r(t)?t(e):i(t,e);return n.innerHTML=a,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){a("pagination","UA-129987462-1")}};t.exports=o},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),a=n(7),r=n(0),o=n(1),s=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=a({init:function(t,e){this._options=r({},u,e),this._currentPage=0,this._view=new s(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),a=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=i>1,e.nextMore=i<a,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,a=this._getLastPage(),r=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(r/2),(n=(e=Math.max(t-i,1))+r-1)>a&&(e=Math.max(a-r+1,1),n=a)):(e=(o-1)*r+1,n=o*r,n=Math.min(n,a)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){o(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){var i=n(0),a=n(14),r=n(4),o=n(16),s=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;a(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;a(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;r(t)?(t=t.split(l),u(t,(function(t){i._bindEvent(t,e,n)}))):o(t)&&(n=e,u(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(o(t))return n=e,void u(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function a(){e.apply(n,arguments),i.off(t,a,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(s(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var a=t===i.handler,r=e===i.context,o=a&&r;return o&&n._forgetContext(i.context),o}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),a=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,a):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?u(t,(function(t,e){i.off(e,t)})):r(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):o(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,a;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(a=e[i]).handler.apply(a.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){var i=n(1),a=n(15);t.exports=function(t){return!i(t)&&!a(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,a=t.length;for(n=n||null;i<a&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),a=n(7),r=n(21),o=n(22),s=n(24),c=n(25),u=n(0),l=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],_=["prev","next"],g=a({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(h,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(_,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,a=t.rightPageNumber;for(n=i;n<=a;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==a||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();o(e,"click",(function(e){var n,i,a=r(e);s(e),(i=this._getButtonType(a))||(n=this._getPageNumber(a)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),a=n(3),r=n(23);function o(t,e,n,i){function o(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,o):"attachEvent"in t&&t.attachEvent("on"+e,o),function(t,e,n,i){var o=r(t,e),s=!1;a(o,(function(t){return t.handler!==n||(s=!0,!1)})),s||o.push({handler:n,wrappedHandler:i})}(t,e,n,o)}t.exports=function(t,e,n,r){i(e)?a(e.split(/\s+/g),(function(e){o(t,e,n,r)})):a(e,(function(e,i){o(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,a=t[i];return a||(a=t[i]={}),(n=a[e])||(n=a[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),a=n(8),r=n(26),o=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,c=[];s?i(n,(function(e){t.classList.add(e)})):((e=r(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){a(t,c)<0&&c.push(t)})),o(t,c))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),a=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),a(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),a=n(3),r=n(2),o=n(4),s=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,h=/"|'/g,_=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],r=0,o=0;return a(e,(function(t,a){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(o,a)),o=a+1)})),i.push(e.slice(o)),{exps:n,sourcesInsideIf:i}}(t,e),r=!1,o="";return a(i.exps,(function(t,e){return(r=b(t,n))&&(o=x(i.sourcesInsideIf[e],n)),!r})),o},each:function(t,e,n){var i=b(t,n),o=r(i)?"@index":"@key",c={},u="";return a(i,(function(t,i){c[o]=i,c["@this"]=t,s(n,c),u+=x(e.slice(),n)})),u},with:function(t,e,n){var a=i("as",t),r=t[a+1],o=b(t.slice(0,a),n),c={};return c[r]=o,x(e,s(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,a=[],r=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,a.push(t.slice(r,i)),r=i+n[0].length,n=e.exec(t);return a.push(t.slice(r)),a};function m(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(h,""):u.test(t)?i=m((n=t.split(l))[0],e)[m(n[1],e)]:p.test(t)?i=m((n=t.split(f))[0],e)[n[1]]:_.test(t)&&(i=parseFloat(t)),i}function y(t,e,n){for(var i,a,r,s,c=g[t],u=1,l=2,p=e[l];u&&o(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,i=l),p=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(a=0,r=i,(s=e.splice(a+1,r-a)).pop(),s),n),e}function b(t,e){var n=m(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return a(e,(function(t){i.push(m(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function x(t,e){for(var n,i,a,r=1,s=t[r];o(s);)i=(n=s.split(" "))[0],g[i]?(a=y(i,t.splice(r,t.length-r),e),t=t.concat(a)):t[r]=b(n,e),s=t[r+=2];return t.join("")}t.exports=function(t,e){return x(v(t,c),e)}},function(t,e,n){var i=n(1),a=n(31);t.exports=function(t,e){var n=location.hostname,r="TOAST UI "+t+" for "+n+": Statistics",o=window.localStorage.getItem(r);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(t){return(new Date).getTime()-t>6048e5}(o)||(window.localStorage.setItem(r,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||a("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),a="";return i(e,(function(t,e){a+="&"+e+"="+t})),a=a.substring(1),n.src=t+"?"+a,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},t.exports=n()})),r.register("hRMcF",(function(t,n){e(t.exports,"createWeatherRendered",(function(){return u}));var i=r("2shzp");const a="https://api.openweathermap.org/data/2.5/weather",o="https://api.openweathermap.org/data/2.5/forecast",s=new URL(r("fCGbF"));function c(){let t="",e="",n="",r=!0;function c(n){e=n.toLocaleString("en-US",{weekday:"long"});t=n.toLocaleString("en-GB",{year:"numeric",month:"long",day:"numeric"})}const u=document.querySelector(".weather");let l=0,p=0,f=[];function d(){navigator.geolocation.getCurrentPosition(h,g)}function h(i){l=i.coords.latitude,p=i.coords.longitude,!0===r?async function(){n=new Date,c(n),f=await _(a),u.insertAdjacentHTML("beforeend",`<div class="weather_UI">\n        <div class="weather_info">\n          <div class="weather_temperatura">\n            <p class="weather_temp"> ${Math.round(f.main.temp)} </p>\n            <p class="weather_badge">&#176</p>\n          </div>\n          <div class="weather_position">\n            <p class="weather_state">${f.weather[0].description}</p>\n            <div class="weather_geoPosition">\n              <svg class="weather_svg">\n                <use href="${s}#icon-location"></use>\n              </svg>\n              <p class="weather_city">${f.name}</p>\n            </div>\n          </div>\n        </div>\n        <img class="weather_img" src="https://openweathermap.org/img/wn/${f.weather[0].icon}@4x.png" alt="weather img">\n        <div class="weather_day">\n          <p class="weather_dayOfWeek">${e}</p>\n          <p class="weather_date">${t}</p>\n        </div>\n      </div>\n    <button class="weather_btn">weather for week</button>\n`);document.querySelector(".weather_btn").addEventListener("click",v)}():async function(){let i=[],a=[],r=[],s=[],l=[],p="";f=await _(o),r=f.list,u.insertAdjacentHTML("beforeend",`<div class="weather_UI_week">\n          <p class="weather_city_week">${f.city.name}</p>\n          <div class="weather_info_week">\n          </div>\n        </div>\n      `);const d=document.querySelector(".weather_info_week");r.forEach((t=>{p=t.dt_txt.split(" "),l.push(p[0])})),s=Array.from(new Set(l)),s.forEach((o=>{a=[],i=[],r.forEach((t=>{t.dt_txt.split(" ")[0]===o&&(a.push(t.main.temp),i.push(t.weather[0].icon))})),n=new Date(o),c(n);let s=(u=i).sort(((t,e)=>u.filter((e=>e===t)).length-u.filter((t=>t===e)).length)).pop();var u;d.insertAdjacentHTML("beforeend",`<div class="weather_info_day">\n          <p class="weather_dayOfWeek_week">${e}</p>\n          <p class="weather_date_week">${t}</p>\n          <img class="weather_img_week" src="https://openweathermap.org/img/wn/${s}@2x.png" alt="weather img">\n          <div class="weather_temp_fullday">\n              <div class="weather_temperatura_min">\n                <p class="weather_temp_week"> ${Math.round(Math.min(...a))} </p>\n                <p class="weather_badge_week">&#176</p>\n              </div>\n              <div>\n              <p class="weather_temp_week"> ... </p>\n              </div>\n              <div class="weather_temperatura_max">\n                <p class="weather_temp_week"> ${Math.round(Math.max(...a))} </p>\n                <p class="weather_badge_week">&#176</p>\n              </div>\n          </div>\n      </div>\n`)})),d.insertAdjacentHTML("beforeend",'<button class="weather_week_btn">weather for today</button>');document.querySelector(".weather_week_btn").addEventListener("click",m)}()}async function _(t){const e={lat:l,lon:p,appid:"f2ba0fa18561e8523c95662543c65b15",units:"metric"};try{const n=await i.default.get(t,{params:e});return n.data}catch(t){console.log(t)}}function g(t){switch(t.code){case t.PERMISSION_DENIED:u.insertAdjacentHTML("beforeend",'<div class="weather_error">\n            <div>This is where the<br>\n            WEATHER FORECAST<br>\n            banner is located.<br>\n            Activate LOCATION,<br>\n            press the CONNECT button to view.\n            </div>\n        </div>\n        <button class="weather_btn">Connect</button>\n  ');document.querySelector(".weather_btn").addEventListener("click",m);case t.POSITION_UNAVAILABLE:case t.TIMEOUT:case t.UNKNOWN_ERROR:}}function v(){r=!1,y(),d()}function m(){r=!0,y(),d()}function y(){u.innerHTML=""}d()}function u(){setTimeout((()=>{const t=document.querySelector(".cards__list--home"),e=document.createElement("div");e.classList.add("weather");const n=t.children[2];t.children[2]&&(t.replaceChild(e,n),c())}),1)}})),r.register("fCGbF",(function(t,e){t.exports=new URL(r("kyEFX").resolve("6RkRa"),import.meta.url).toString()})),r.register("jLChH",(function(t,e){t.exports=new URL(r("kyEFX").resolve("iVvoC"),import.meta.url).toString()})),r("kyEFX").register(JSON.parse('{"b3ZSW":"index.f4d9635b.js","5UbS1":"favorite.8d54e30a.css","6RkRa":"symbol-defs.0583f717.svg","iVvoC":"not-found-desktop.a4722253.png"}'));
//# sourceMappingURL=index.f4d9635b.js.map