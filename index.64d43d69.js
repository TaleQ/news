!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var o=n[e];delete n[e];var t={id:e,exports:{}};return r[e]=t,o.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},e.parcelRequired7c6=o),o("6ShQF"),o("iOi8o");var t=o("cFA0N"),i=o("iOi8o"),l={cardList:document.querySelector(".cards__list")};(new(0,t.default)).fetchPopularNews().then((function(e){console.log(e);var r=e.results.map((function(e){return(0,i.createMarkupForCard)((0,i.newsAdapter)(e))})).join("");l.cardList.innerHTML=r}))}();
//# sourceMappingURL=index.64d43d69.js.map