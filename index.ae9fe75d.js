var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var o=n[e];delete n[e];var t={id:e,exports:{}};return r[e]=t,o.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){n[e]=r},e.parcelRequired7c6=o),o("eeO3V"),o("atmj7");var t=o("fWY1B"),a=o("atmj7");const l={cardList:document.querySelector(".cards__list")};(new(0,t.default)).fetchPopularNews().then((e=>{console.log(e);const r=e.results.map((e=>(0,a.createMarkupForCard)((0,a.newsAdapter)(e)))).join("");l.cardList.innerHTML=r}));
//# sourceMappingURL=index.ae9fe75d.js.map
