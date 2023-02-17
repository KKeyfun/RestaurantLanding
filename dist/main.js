/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/bar.jpg */ "./src/bar.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/outdoor dining.jpg */ "./src/outdoor dining.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/salmon green sauce.jpg */ "./src/salmon green sauce.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/calf with beans.jpg */ "./src/calf with beans.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/cupcake.jpg */ "./src/cupcake.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/github.png */ "./src/github.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding:0;\n    margin: 0;\n\n    font-family: cursive;\n}\n\n:root {\n    --bgMain: \trgba(17,29,74,.95);\n    --bgSecondary: rgba(255,207,153,1.0);\n    --borderSecondary: rgba(255,237,153,1);\n    --textLight: rgba(255,247,240,1.0);\n    --accents: rgba(244,91,105,1.0);\n}\n\nbody {\n    background-color: var(--bgMain);\n}\n\n.headerContainer {\n    display: grid;\n    grid-area: 1/1/2/-1;\n    place-content: center;\n\n    font-family: cursive;\n}\n\n.header {\n    font-size: 11vmin;\n    color: var(--textLight);\n    padding: 16px;\n}\n\n.pageContainer {\n    display:grid;\n    grid-template-columns: 1fr 7fr 1fr;\n    grid-template-rows: min(5vmax,1fr) 7fr max(45px,3vmax);\n}\n\n.sideContainer {\n    display: grid;\n    grid-area: 2/1/3/2;\n}\n\n.sidebar {\n    display: flex;\n    gap:12px;\n    flex-direction: column;\n\n    list-style: none;\n}\n\nli {\n    display: flex;\n    align-items: center;\n    \n    font-size: 1.3vmax;\n    font-family: cursive;\n\n    background-color: var(--accents);\n    border: 1px solid var(--borderSecondary);\n    padding: 3px;\n\n    height: 3vmax;\n    width: 80%;\n}\n\nli.active {\n    border: 3px solid var(--borderSecondary);\n    width: 87%;\n}\n\n.bodyContainer {\n    grid-area: 2/2/3/3;\n\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n}\n\n.mainContent {\n    display: grid;\n    grid-template-rows: 1fr 10fr;\n    \n    height: 100%;\n}\n\n.bodyHeaderContainer {\n    grid-column: 1 / -1;\n    /* above might change */\n    background-color: rgba(255, 255, 255, 0.4);\n    text-align: center;\n    padding: 12px;\n}\n\n.bodyHeader {\n    display:inline-block;\n    border-bottom: 2px solid black;\n    padding: 0 3%;\n\n    font-size: 9vmin;\n    transition: padding 1s ease;\n}\n\n.bodyHeader:hover {\n    padding: 0 15%;\n    /* transition-timing-function: ease; */\n}\n\n.bodyContent {\n    padding: 2vmin 15%;\n    text-align: center;\n}\n\n.bodyContainer .about{\n    margin: 10px;\n}\n\n.aboutText {\n    font-size: 4vmin;\n    background-color: var(--textLight);\n    margin: 12px;\n    padding: 5% 15%;\n}\n\n.aboutPicture {\n    border: 5px solid var(--accents);\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    object-fit: cover;\n    height: 50vmin;\n    width: 95%;\n}\n\n.bodyContent.menu{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    background-color: #ffebd3;\n    margin:20px;\n    padding: 2vmin 5%;\n}\n\n.menuDisplay {\n    display: grid;\n    grid-template-rows: repeat(3,1fr);\n}\n\n.itemName {\n    font-size: 3.5vmin;\n}\n\n.itemDescription {\n    font-size: 2vmin;\n    font-family: Verdana;\n}\n\n.menuItem {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.menuContainer {\n    display: grid;\n    gap:8px;\n    grid-auto-rows: 1fr;\n\n    padding: 0 8px;\n}\n\n.menu img{\n    height: 13vmax;\n}\n\n.pictureContainer {\n    place-self: center;\n    background-color: var(--textLight);\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n}\n\n.salmonContainer {\n    grid-row: 2;\n}\n\n.salmon {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\n}\n\n.veal {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.cupcakeContainer {\n    grid-row: 3;\n}\n\n.cupcake {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n.footerContainer {\n    display:grid;\n    grid-template-rows: 1fr 1fr;\n    grid-area: 3/1/4/-1;\n\n    background-color: var(--textLight);\n    place-content: center;\n}\n\n.bodyContainer .contact{\n    display:grid;\n    gap:8px;\n\n    background-color: #ffebd3;\n    margin: 20px 7%;\n    padding: 0 25%;\n}\n\n.locationHeader {\n    font-size: 4vmin;\n}\n\n.locationContainer {\n    display: flex;\n    flex-direction: column;\n    gap:16px;\n    padding: 5% 0;\n}\n\n.locationDescription {\n    font-size: 3vmin;\n}\n\n.numberInfo {\n    font-family: Verdana;\n    font-size: 2vmin;\n}\n\n.mapContainer {\n    height: 38vmin;\n}\n\n.map {\n    width: 100%;\n    height: 100%;\n}\n\n.footer {\n    font-family: Arial;\n    justify-self: center;\n}\n\n.githubUrl {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    object-fit: cover;\n    height: 100%;\n}\n\n.flaticon {\n    color:black;\n    text-decoration: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,SAAS;;IAET,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B,oCAAoC;IACpC,sCAAsC;IACtC,kCAAkC;IAClC,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;;IAErB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,kCAAkC;IAClC,sDAAsD;AAC1D;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sBAAsB;;IAEtB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;;IAEnB,kBAAkB;IAClB,oBAAoB;;IAEpB,gCAAgC;IAChC,wCAAwC;IACxC,YAAY;;IAEZ,aAAa;IACb,UAAU;AACd;;AAEA;IACI,wCAAwC;IACxC,UAAU;AACd;;AAEA;IACI,kBAAkB;;IAElB,yDAAqC;IACrC,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,4BAA4B;;IAE5B,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,0CAA0C;IAC1C,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,8BAA8B;IAC9B,aAAa;;IAEb,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,kCAAkC;IAClC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gCAAgC;IAChC,yFAAyF;;IAEzF,gDAAwC;IACxC,iBAAiB;IACjB,cAAc;IACd,UAAU;AACd;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,yBAAyB;IACzB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,OAAO;IACP,mBAAmB;;IAEnB,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,kCAAkC;IAClC,yFAAyF;AAC7F;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gDAA6C;;AAEjD;;AAEA;IACI,gDAA0C;AAC9C;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gDAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,mBAAmB;;IAEnB,kCAAkC;IAClC,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,OAAO;;IAEP,yBAAyB;IACzB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,gDAA+B;IAC/B,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,qBAAqB;AACzB","sourcesContent":["* {\n    padding:0;\n    margin: 0;\n\n    font-family: cursive;\n}\n\n:root {\n    --bgMain: \trgba(17,29,74,.95);\n    --bgSecondary: rgba(255,207,153,1.0);\n    --borderSecondary: rgba(255,237,153,1);\n    --textLight: rgba(255,247,240,1.0);\n    --accents: rgba(244,91,105,1.0);\n}\n\nbody {\n    background-color: var(--bgMain);\n}\n\n.headerContainer {\n    display: grid;\n    grid-area: 1/1/2/-1;\n    place-content: center;\n\n    font-family: cursive;\n}\n\n.header {\n    font-size: 11vmin;\n    color: var(--textLight);\n    padding: 16px;\n}\n\n.pageContainer {\n    display:grid;\n    grid-template-columns: 1fr 7fr 1fr;\n    grid-template-rows: min(5vmax,1fr) 7fr max(45px,3vmax);\n}\n\n.sideContainer {\n    display: grid;\n    grid-area: 2/1/3/2;\n}\n\n.sidebar {\n    display: flex;\n    gap:12px;\n    flex-direction: column;\n\n    list-style: none;\n}\n\nli {\n    display: flex;\n    align-items: center;\n    \n    font-size: 1.3vmax;\n    font-family: cursive;\n\n    background-color: var(--accents);\n    border: 1px solid var(--borderSecondary);\n    padding: 3px;\n\n    height: 3vmax;\n    width: 80%;\n}\n\nli.active {\n    border: 3px solid var(--borderSecondary);\n    width: 87%;\n}\n\n.bodyContainer {\n    grid-area: 2/2/3/3;\n\n    background-image: url('/src/bar.jpg');\n    background-repeat: no-repeat;\n}\n\n.mainContent {\n    display: grid;\n    grid-template-rows: 1fr 10fr;\n    \n    height: 100%;\n}\n\n.bodyHeaderContainer {\n    grid-column: 1 / -1;\n    /* above might change */\n    background-color: rgba(255, 255, 255, 0.4);\n    text-align: center;\n    padding: 12px;\n}\n\n.bodyHeader {\n    display:inline-block;\n    border-bottom: 2px solid black;\n    padding: 0 3%;\n\n    font-size: 9vmin;\n    transition: padding 1s ease;\n}\n\n.bodyHeader:hover {\n    padding: 0 15%;\n    /* transition-timing-function: ease; */\n}\n\n.bodyContent {\n    padding: 2vmin 15%;\n    text-align: center;\n}\n\n.bodyContainer .about{\n    margin: 10px;\n}\n\n.aboutText {\n    font-size: 4vmin;\n    background-color: var(--textLight);\n    margin: 12px;\n    padding: 5% 15%;\n}\n\n.aboutPicture {\n    border: 5px solid var(--accents);\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n\n    content: url('/src/outdoor\\ dining.jpg');\n    object-fit: cover;\n    height: 50vmin;\n    width: 95%;\n}\n\n.bodyContent.menu{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    background-color: #ffebd3;\n    margin:20px;\n    padding: 2vmin 5%;\n}\n\n.menuDisplay {\n    display: grid;\n    grid-template-rows: repeat(3,1fr);\n}\n\n.itemName {\n    font-size: 3.5vmin;\n}\n\n.itemDescription {\n    font-size: 2vmin;\n    font-family: Verdana;\n}\n\n.menuItem {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.menuContainer {\n    display: grid;\n    gap:8px;\n    grid-auto-rows: 1fr;\n\n    padding: 0 8px;\n}\n\n.menu img{\n    height: 13vmax;\n}\n\n.pictureContainer {\n    place-self: center;\n    background-color: var(--textLight);\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n}\n\n.salmonContainer {\n    grid-row: 2;\n}\n\n.salmon {\n    content: url('/src/salmon\\ green\\ sauce.jpg');\n\n}\n\n.veal {\n    content: url('/src/calf\\ with\\ beans.jpg');\n}\n\n.cupcakeContainer {\n    grid-row: 3;\n}\n\n.cupcake {\n    content: url('/src/cupcake.jpg');\n}\n\n.footerContainer {\n    display:grid;\n    grid-template-rows: 1fr 1fr;\n    grid-area: 3/1/4/-1;\n\n    background-color: var(--textLight);\n    place-content: center;\n}\n\n.bodyContainer .contact{\n    display:grid;\n    gap:8px;\n\n    background-color: #ffebd3;\n    margin: 20px 7%;\n    padding: 0 25%;\n}\n\n.locationHeader {\n    font-size: 4vmin;\n}\n\n.locationContainer {\n    display: flex;\n    flex-direction: column;\n    gap:16px;\n    padding: 5% 0;\n}\n\n.locationDescription {\n    font-size: 3vmin;\n}\n\n.numberInfo {\n    font-family: Verdana;\n    font-size: 2vmin;\n}\n\n.mapContainer {\n    height: 38vmin;\n}\n\n.map {\n    width: 100%;\n    height: 100%;\n}\n\n.footer {\n    font-family: Arial;\n    justify-self: center;\n}\n\n.githubUrl {\n    content: url('/src/github.png');\n    object-fit: cover;\n    height: 100%;\n}\n\n.flaticon {\n    color:black;\n    text-decoration: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/appendElement.js":
/*!****************************************!*\
  !*** ./src/functions/appendElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "append": () => (/* binding */ append)
/* harmony export */ });


function append(parent,child){
    if(child.length){
        child.forEach(elem => {
            parent.appendChild(elem);
        });
    } else {
        parent.appendChild(child);
    }
}

/***/ }),

/***/ "./src/functions/changePage.js":
/*!*************************************!*\
  !*** ./src/functions/changePage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeActive": () => (/* binding */ changeActive)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _pageModules_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pageModules/about */ "./src/pageModules/about.js");
/* harmony import */ var _pageModules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pageModules/menu */ "./src/pageModules/menu.js");
/* harmony import */ var _pageModules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pageModules/contact */ "./src/pageModules/contact.js");







function changeActive(page){
    _index__WEBPACK_IMPORTED_MODULE_0__.current.classList.remove('active');//might have to adjust
    _index__WEBPACK_IMPORTED_MODULE_0__.current = page;
    page.classList.add('active');
    let body = document.querySelector('.mainContent');
    while(body.firstChild){ 
        body.removeChild(body.firstChild);
    }

    if(page.textContent == 'About Us'){
        (0,_pageModules_about__WEBPACK_IMPORTED_MODULE_1__.loadAbout)(body);
    }else if(page.textContent == 'Menu'){
        (0,_pageModules_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)(body);
    }else {
        (0,_pageModules_contact__WEBPACK_IMPORTED_MODULE_3__.loadContact)(body);
    }
}

/***/ }),

/***/ "./src/functions/makeElement.js":
/*!**************************************!*\
  !*** ./src/functions/makeElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeElem": () => (/* binding */ makeElement)
/* harmony export */ });


function makeElement(elem,className,text){
    if(!className && !text)
        return document.createElement(elem);
    else{
        let newElement = document.createElement(elem);

        if(typeof(className)=='object'){
            className.forEach(e => {
                newElement.classList.add(e);
            });
        }else 
            newElement.classList.add(className);
        if(text){
            newElement.textContent = text;
        }
        return newElement;
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ "./src/initialLoad.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_initialLoad__WEBPACK_IMPORTED_MODULE_0__.initialLoad)();

//https://pixabay.com/photos/table-glassware-cutlery-silverware-5356682/
//Image by <a href="https://pixabay.com/users/gioelefazzeri-16466931/">Gioele Fazzeri</a> from <a href="https://pixabay.com/">Pixabay</a>

//Image by <a href="https://pixabay.com/users/em80-846530/">EM80</a> from <a href="https://pixabay.com/">Pixabay</a>
//https://pixabay.com/photos/restaurant-fine-dining-restaurant-4198754/

//https://pixabay.com/photos/calf-veal-beans-caf%c3%a9-de-paris-4198760/
//Image by <a href="https://pixabay.com/users/em80-846530/">EM80</a> from <a href="https://pixabay.com/">Pixabay</a>

//Image by <a href="https://pixabay.com/users/goumbik-3752482/">Lukas</a> from <a href="https://pixabay.com/">Pixabay</a>
//https://pixabay.com/photos/food-wedding-desert-cake-party-2055736/


/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad)
/* harmony export */ });
/* harmony import */ var _functions_makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/makeElement */ "./src/functions/makeElement.js");
/* harmony import */ var _functions_appendElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/appendElement */ "./src/functions/appendElement.js");
/* harmony import */ var _functions_changePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/changePage */ "./src/functions/changePage.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");








function initialLoad(){
    let content = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','pageContainer');
    let headerContainer = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','headerContainer');
    let header = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','header','The Food Restaurant');
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(headerContainer,header);
    
    let sideContainer = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','sideContainer');
    let sideBar = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('ul','sidebar');
    let about = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('li','navMenu','About Us');
    about.addEventListener('click',()=>{(0,_functions_changePage__WEBPACK_IMPORTED_MODULE_2__.changeActive)(about)});
    ___WEBPACK_IMPORTED_MODULE_3__.current = about;
    
    let menu = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('li','navMenu','Menu');
    menu.addEventListener('click',()=>{(0,_functions_changePage__WEBPACK_IMPORTED_MODULE_2__.changeActive)(menu)});
    
    let contact = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('li','navMenu','Contact Us');
    contact.addEventListener('click',()=>{(0,_functions_changePage__WEBPACK_IMPORTED_MODULE_2__.changeActive)(contact)});
    
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(sideBar,[about,menu,contact]);
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(sideContainer,sideBar);
    
    let bodyContainer = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','bodyContainer');
    let mainContent = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','mainContent');
    
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(bodyContainer,mainContent);
    
    let footerContainer = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','footerContainer');
    let url = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('a','flaticon','Github icons created by Bombasticon Studio - Flaticon');
    url.href = 'https://www.flaticon.com/free-icons/github';
    let image = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('img','githubUrl');
    let footer = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('a','footer');
    footer.href = 'https:github.com/KKeyfun';
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(footer,image);
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(footerContainer,[footer,url]);
    
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(content,[headerContainer,sideContainer,bodyContainer,footerContainer]);
    
    document.querySelector('body').appendChild(content);

    (0,_functions_changePage__WEBPACK_IMPORTED_MODULE_2__.changeActive)(___WEBPACK_IMPORTED_MODULE_3__.current);
}


/***/ }),

/***/ "./src/pageModules/about.js":
/*!**********************************!*\
  !*** ./src/pageModules/about.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAbout": () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _functions_makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/makeElement */ "./src/functions/makeElement.js");
/* harmony import */ var _functions_appendElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/appendElement */ "./src/functions/appendElement.js");





function loadAbout(body){
    let bodyHeaderContainer = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','bodyHeaderContainer');
    let bodyHeader = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','bodyHeader','About Us');
    let bodyContent = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div',['bodyContent','about']);
    let picture = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('img','aboutPicture');
    let about = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','aboutText','Serving food like no other restaurant has served food before. We work with only the finest of distributers to source our food, to ensure we serve nothing but excellence. Every dish has been blessed by our in-house priest so that you may have a taste of heaven. It\'s food, we\'re a restaurant - need we say more?');
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(bodyHeaderContainer,bodyHeader)
    ;(0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(bodyContent,[picture,about]);
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(body,[bodyHeaderContainer,bodyContent]);
}

/***/ }),

/***/ "./src/pageModules/contact.js":
/*!************************************!*\
  !*** ./src/pageModules/contact.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _functions_makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/makeElement */ "./src/functions/makeElement.js");
/* harmony import */ var _functions_appendElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/appendElement */ "./src/functions/appendElement.js");





function loadContact(body){
    let bodyHeaderContainer = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','bodyHeaderContainer');
    let bodyHeader = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','bodyHeader','Contact Us');
    let bodyContent = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div',['bodyContent','contact']);

    let containerOne = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','locationContainer');
    let locationOne = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','locationHeader','The Food Restaurant Main Street');

    let mapContainerOne = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','mapContainer');
    let mapOne = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('iframe','map');
    mapOne.src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Granville%20St,%20Farm%20Rd,%20Sheffield%20S2%202TP,%20United%20Kingdom+(%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(mapContainerOne,mapOne);

    let descriptionOne = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','locationDescription','Our original location where we invented food');
    let addressOne = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','numberInfo','Address: 1234 Main Street, City 12345');
    let hoursOne = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','numberInfo','Mon-Sun: 7pm - 1am');
    let phoneOne = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','numberInfo','Phone Number: (123)-456-7890');

    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(containerOne,[locationOne,mapContainerOne,descriptionOne,addressOne,phoneOne,hoursOne]);

    let containerTwo = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','locationContainer');
    let locationTwo = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','locationHeader','The Food Restaurant : The Sequel');

    let mapContainerTwo = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','mapContainer');
    let mapTwo = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('iframe','map');
    mapTwo.src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=76/78%20Queensway,%20London%20W2%203RL,%20United%20Kingdom+(%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(mapContainerTwo,mapTwo);

    let descriptionTwo = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','locationDescription','In our quest to conquer the food world, we opened a second location');
    let addressTwo = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','numberInfo','Address: 1234 Street Street, City 23456');
    let hoursTwo = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','numberInfo','Mon-Sun: 5pm - 12am');
    let phoneTwo = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','numberInfo','Phone Number: (234)-567-8901');

    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(containerTwo,[locationTwo,mapContainerTwo,descriptionTwo,addressTwo,phoneTwo,hoursTwo]);
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(bodyHeaderContainer,bodyHeader);
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(bodyContent,[containerOne,containerTwo]);
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(body,[bodyHeaderContainer,bodyContent]);
}

/***/ }),

/***/ "./src/pageModules/menu.js":
/*!*********************************!*\
  !*** ./src/pageModules/menu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _functions_makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/makeElement */ "./src/functions/makeElement.js");
/* harmony import */ var _functions_appendElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/appendElement */ "./src/functions/appendElement.js");





function loadMenu(body){
    let bodyHeaderContainer = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','bodyHeaderContainer');
    let bodyHeader = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','bodyHeader','Menu');
    let bodyContent = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div',['bodyContent','menu']);

    let leftColumn = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','menuDisplay');
    let salmonContainer = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div',['salmonContainer','pictureContainer']);
    let salmon = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('img','salmon');
    let salmonLabel = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','label','Salmon with Green Sauce');
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(salmonContainer,[salmon,salmonLabel]);

    let cupcakeContainer = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div',['cupcakeContainer','pictureContainer']);
    let cupcake = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('img','cupcake');
    let cupcakeLabel = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','label','Dark Chocolate Cupcakes');
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(cupcakeContainer,[cupcake,cupcakeLabel]);

    let menu = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','menuContainer');
    let menuArr = [];
    menuArr.push(['Veal with Beef Sauce & Beans','Delicious calf meat drizzled in delicious, rich beef stock and paired with crispy, organic green beans']);
    menuArr.push(['Jumbo Shrimp Cocktail','Freshly caught shrimp served with a homemade tangy cocktail sauce']);
    menuArr.push(['Escargots Bourguignon','A delicacy served with garlic butter and a beautiful red wine']);
    menuArr.push(['Baked Oysters','Sweet oysters served with sauteed chopped bacon, onions, scallion, and wine']);
    menuArr.push(['Salmon with Green Sauce & Vegetables','Raw salmon served on a mix of celery and beans, and topped with a spectacular vegan sauce'])
    menuArr.push(['Barbecue Back Ribs','Grilled ribs, served with your choice of (A) Tangy barbecue sauce (B) Greek Classic sauce (Olive oil, oregano, lemon) ']);
    menuArr.push(['Dark Chocolate Cupcakes','Rich cupcakes made with 90% cacao chocolate, topped with a light, soft butter cream']);
    let menuItems = [];
    menuArr.forEach(elem=>{
        menuItems.push(addItem(elem[0],elem[1]));
    });
    let rightColumn = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','menuDisplay');
    let vealContainer = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div',['vealContainer','pictureContainer']);
    let veal = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('img','veal');
    let vealLabel = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','label','Veal with Beef Sauce & Beans');
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(vealContainer,[veal,vealLabel]);

    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(leftColumn,[vealContainer,cupcakeContainer]);
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(menu,menuItems);
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(rightColumn,salmonContainer);
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(bodyHeaderContainer,bodyHeader);
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(bodyContent,[leftColumn,menu,rightColumn]);
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(body,[bodyHeaderContainer,bodyContent]);
}


function addItem(item,description){
    let itemContainer = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','menuItem');
    let itemName = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','itemName',item);
    let itemDesc = (0,_functions_makeElement__WEBPACK_IMPORTED_MODULE_0__.makeElem)('div','itemDescription',description);
    (0,_functions_appendElement__WEBPACK_IMPORTED_MODULE_1__.append)(itemContainer,[itemName,itemDesc]);
    return itemContainer;
}

/***/ }),

/***/ "./src/bar.jpg":
/*!*********************!*\
  !*** ./src/bar.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb0b8e55bb0d8a91f5e8.jpg";

/***/ }),

/***/ "./src/calf with beans.jpg":
/*!*********************************!*\
  !*** ./src/calf with beans.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69837d834d743ed743c1.jpg";

/***/ }),

/***/ "./src/cupcake.jpg":
/*!*************************!*\
  !*** ./src/cupcake.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b6125520923dcfd7bc9.jpg";

/***/ }),

/***/ "./src/github.png":
/*!************************!*\
  !*** ./src/github.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87d30d26b586342fdc80.png";

/***/ }),

/***/ "./src/outdoor dining.jpg":
/*!********************************!*\
  !*** ./src/outdoor dining.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee86fa87f91bdb0222b3.jpg";

/***/ }),

/***/ "./src/salmon green sauce.jpg":
/*!************************************!*\
  !*** ./src/salmon green sauce.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7152c1c69ba455d02c78.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLFlBQVksVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Z1bmN0aW9ucy9hcHBlbmRFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL2NoYW5nZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mdW5jdGlvbnMvbWFrZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZU1vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlTW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZU1vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9iYXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9vdXRkb29yIGRpbmluZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL3NhbG1vbiBncmVlbiBzYXVjZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL2NhbGYgd2l0aCBiZWFucy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIvc3JjL2N1cGNha2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiL3NyYy9naXRodWIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmdNYWluOiBcXHRyZ2JhKDE3LDI5LDc0LC45NSk7XFxuICAgIC0tYmdTZWNvbmRhcnk6IHJnYmEoMjU1LDIwNywxNTMsMS4wKTtcXG4gICAgLS1ib3JkZXJTZWNvbmRhcnk6IHJnYmEoMjU1LDIzNywxNTMsMSk7XFxuICAgIC0tdGV4dExpZ2h0OiByZ2JhKDI1NSwyNDcsMjQwLDEuMCk7XFxuICAgIC0tYWNjZW50czogcmdiYSgyNDQsOTEsMTA1LDEuMCk7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ01haW4pO1xcbn1cXG5cXG4uaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8tMTtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcblxcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMTF2bWluO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dExpZ2h0KTtcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluKDV2bWF4LDFmcikgN2ZyIG1heCg0NXB4LDN2bWF4KTtcXG59XFxuXFxuLnNpZGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjEycHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMS4zdm1heDtcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudHMpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXJTZWNvbmRhcnkpO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuXFxuICAgIGhlaWdodDogM3ZtYXg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbmxpLmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcmRlclNlY29uZGFyeSk7XFxuICAgIHdpZHRoOiA4NyU7XFxufVxcblxcbi5ib2R5Q29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubWFpbkNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYm9keUhlYWRlckNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIC8qIGFib3ZlIG1pZ2h0IGNoYW5nZSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLmJvZHlIZWFkZXIge1xcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAwIDMlO1xcblxcbiAgICBmb250LXNpemU6IDl2bWluO1xcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDFzIGVhc2U7XFxufVxcblxcbi5ib2R5SGVhZGVyOmhvdmVyIHtcXG4gICAgcGFkZGluZzogMCAxNSU7XFxuICAgIC8qIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlOyAqL1xcbn1cXG5cXG4uYm9keUNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAydm1pbiAxNSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvZHlDb250YWluZXIgLmFib3V0e1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5hYm91dFRleHQge1xcbiAgICBmb250LXNpemU6IDR2bWluO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0TGlnaHQpO1xcbiAgICBtYXJnaW46IDEycHg7XFxuICAgIHBhZGRpbmc6IDUlIDE1JTtcXG59XFxuXFxuLmFib3V0UGljdHVyZSB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLWFjY2VudHMpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA2cHggMTJweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDNweCA3cHggLTNweDtcXG5cXG4gICAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGhlaWdodDogNTB2bWluO1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4uYm9keUNvbnRlbnQubWVudXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJkMztcXG4gICAgbWFyZ2luOjIwcHg7XFxuICAgIHBhZGRpbmc6IDJ2bWluIDUlO1xcbn1cXG5cXG4ubWVudURpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLDFmcik7XFxufVxcblxcbi5pdGVtTmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMy41dm1pbjtcXG59XFxuXFxuLml0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMnZtaW47XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xcbn1cXG5cXG4ubWVudUl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLm1lbnVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6OHB4O1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcblxcbiAgICBwYWRkaW5nOiAwIDhweDtcXG59XFxuXFxuLm1lbnUgaW1ne1xcbiAgICBoZWlnaHQ6IDEzdm1heDtcXG59XFxuXFxuLnBpY3R1cmVDb250YWluZXIge1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRMaWdodCk7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDZweCAxMnB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggM3B4IDdweCAtM3B4O1xcbn1cXG5cXG4uc2FsbW9uQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxufVxcblxcbi5zYWxtb24ge1xcbiAgICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcblxcbn1cXG5cXG4udmVhbCB7XFxuICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbi5jdXBjYWtlQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDM7XFxufVxcblxcbi5jdXBjYWtlIHtcXG4gICAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG59XFxuXFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLWFyZWE6IDMvMS80Ly0xO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0TGlnaHQpO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2R5Q29udGFpbmVyIC5jb250YWN0e1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdhcDo4cHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmViZDM7XFxuICAgIG1hcmdpbjogMjBweCA3JTtcXG4gICAgcGFkZGluZzogMCAyNSU7XFxufVxcblxcbi5sb2NhdGlvbkhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47XFxufVxcblxcbi5sb2NhdGlvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDoxNnB4O1xcbiAgICBwYWRkaW5nOiA1JSAwO1xcbn1cXG5cXG4ubG9jYXRpb25EZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogM3ZtaW47XFxufVxcblxcbi5udW1iZXJJbmZvIHtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxuICAgIGZvbnQtc2l6ZTogMnZtaW47XFxufVxcblxcbi5tYXBDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDM4dm1pbjtcXG59XFxuXFxuLm1hcCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBmb250LWZhbWlseTogQXJpYWw7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZ2l0aHViVXJsIHtcXG4gICAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmZsYXRpY29uIHtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7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QTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnREFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1iZ01haW46IFxcdHJnYmEoMTcsMjksNzQsLjk1KTtcXG4gICAgLS1iZ1NlY29uZGFyeTogcmdiYSgyNTUsMjA3LDE1MywxLjApO1xcbiAgICAtLWJvcmRlclNlY29uZGFyeTogcmdiYSgyNTUsMjM3LDE1MywxKTtcXG4gICAgLS10ZXh0TGlnaHQ6IHJnYmEoMjU1LDI0NywyNDAsMS4wKTtcXG4gICAgLS1hY2NlbnRzOiByZ2JhKDI0NCw5MSwxMDUsMS4wKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnTWFpbik7XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLy0xO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxMXZtaW47XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0TGlnaHQpO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4oNXZtYXgsMWZyKSA3ZnIgbWF4KDQ1cHgsM3ZtYXgpO1xcbn1cXG5cXG4uc2lkZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MTJweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgZm9udC1zaXplOiAxLjN2bWF4O1xcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50cyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlclNlY29uZGFyeSk7XFxuICAgIHBhZGRpbmc6IDNweDtcXG5cXG4gICAgaGVpZ2h0OiAzdm1heDtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxubGkuYWN0aXZlIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYm9yZGVyU2Vjb25kYXJ5KTtcXG4gICAgd2lkdGg6IDg3JTtcXG59XFxuXFxuLmJvZHlDb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9iYXIuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ib2R5SGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgLyogYWJvdmUgbWlnaHQgY2hhbmdlICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4uYm9keUhlYWRlciB7XFxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAgMyU7XFxuXFxuICAgIGZvbnQtc2l6ZTogOXZtaW47XFxuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMXMgZWFzZTtcXG59XFxuXFxuLmJvZHlIZWFkZXI6aG92ZXIge1xcbiAgICBwYWRkaW5nOiAwIDE1JTtcXG4gICAgLyogdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7ICovXFxufVxcblxcbi5ib2R5Q29udGVudCB7XFxuICAgIHBhZGRpbmc6IDJ2bWluIDE1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYm9keUNvbnRhaW5lciAuYWJvdXR7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmFib3V0VGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRMaWdodCk7XFxuICAgIG1hcmdpbjogMTJweDtcXG4gICAgcGFkZGluZzogNSUgMTUlO1xcbn1cXG5cXG4uYWJvdXRQaWN0dXJlIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tYWNjZW50cyk7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDZweCAxMnB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggM3B4IDdweCAtM3B4O1xcblxcbiAgICBjb250ZW50OiB1cmwoJy9zcmMvb3V0ZG9vclxcXFwgZGluaW5nLmpwZycpO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiA1MHZtaW47XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbi5ib2R5Q29udGVudC5tZW51e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmQzO1xcbiAgICBtYXJnaW46MjBweDtcXG4gICAgcGFkZGluZzogMnZtaW4gNSU7XFxufVxcblxcbi5tZW51RGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsMWZyKTtcXG59XFxuXFxuLml0ZW1OYW1lIHtcXG4gICAgZm9udC1zaXplOiAzLjV2bWluO1xcbn1cXG5cXG4uaXRlbURlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAydm1pbjtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxufVxcblxcbi5tZW51SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4ubWVudUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDo4cHg7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxuXFxuICAgIHBhZGRpbmc6IDAgOHB4O1xcbn1cXG5cXG4ubWVudSBpbWd7XFxuICAgIGhlaWdodDogMTN2bWF4O1xcbn1cXG5cXG4ucGljdHVyZUNvbnRhaW5lciB7XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dExpZ2h0KTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNnB4IDEycHggLTJweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggN3B4IC0zcHg7XFxufVxcblxcbi5zYWxtb25Db250YWluZXIge1xcbiAgICBncmlkLXJvdzogMjtcXG59XFxuXFxuLnNhbG1vbiB7XFxuICAgIGNvbnRlbnQ6IHVybCgnL3NyYy9zYWxtb25cXFxcIGdyZWVuXFxcXCBzYXVjZS5qcGcnKTtcXG5cXG59XFxuXFxuLnZlYWwge1xcbiAgICBjb250ZW50OiB1cmwoJy9zcmMvY2FsZlxcXFwgd2l0aFxcXFwgYmVhbnMuanBnJyk7XFxufVxcblxcbi5jdXBjYWtlQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDM7XFxufVxcblxcbi5jdXBjYWtlIHtcXG4gICAgY29udGVudDogdXJsKCcvc3JjL2N1cGNha2UuanBnJyk7XFxufVxcblxcbi5mb290ZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8tMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dExpZ2h0KTtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm9keUNvbnRhaW5lciAuY29udGFjdHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBnYXA6OHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmQzO1xcbiAgICBtYXJnaW46IDIwcHggNyU7XFxuICAgIHBhZGRpbmc6IDAgMjUlO1xcbn1cXG5cXG4ubG9jYXRpb25IZWFkZXIge1xcbiAgICBmb250LXNpemU6IDR2bWluO1xcbn1cXG5cXG4ubG9jYXRpb25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MTZweDtcXG4gICAgcGFkZGluZzogNSUgMDtcXG59XFxuXFxuLmxvY2F0aW9uRGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDN2bWluO1xcbn1cXG5cXG4ubnVtYmVySW5mbyB7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xcbiAgICBmb250LXNpemU6IDJ2bWluO1xcbn1cXG5cXG4ubWFwQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAzOHZtaW47XFxufVxcblxcbi5tYXAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmdpdGh1YlVybCB7XFxuICAgIGNvbnRlbnQ6IHVybCgnL3NyYy9naXRodWIucG5nJyk7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5mbGF0aWNvbiB7XFxuICAgIGNvbG9yOmJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBhcHBlbmQgfTtcblxuZnVuY3Rpb24gYXBwZW5kKHBhcmVudCxjaGlsZCl7XG4gICAgaWYoY2hpbGQubGVuZ3RoKXtcbiAgICAgICAgY2hpbGQuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgY3VycmVudCB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IGxvYWRBYm91dCB9IGZyb20gJy4uL3BhZ2VNb2R1bGVzL2Fib3V0JztcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSAnLi4vcGFnZU1vZHVsZXMvbWVudSc7XG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gJy4uL3BhZ2VNb2R1bGVzL2NvbnRhY3QnO1xuXG5leHBvcnQgeyBjaGFuZ2VBY3RpdmUgfTtcblxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlKHBhZ2Upe1xuICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7Ly9taWdodCBoYXZlIHRvIGFkanVzdFxuICAgIGN1cnJlbnQgPSBwYWdlO1xuICAgIHBhZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnQnKTtcbiAgICB3aGlsZShib2R5LmZpcnN0Q2hpbGQpeyBcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGlmKHBhZ2UudGV4dENvbnRlbnQgPT0gJ0Fib3V0IFVzJyl7XG4gICAgICAgIGxvYWRBYm91dChib2R5KTtcbiAgICB9ZWxzZSBpZihwYWdlLnRleHRDb250ZW50ID09ICdNZW51Jyl7XG4gICAgICAgIGxvYWRNZW51KGJvZHkpO1xuICAgIH1lbHNlIHtcbiAgICAgICAgbG9hZENvbnRhY3QoYm9keSk7XG4gICAgfVxufSIsImV4cG9ydCB7bWFrZUVsZW1lbnQgYXMgbWFrZUVsZW19O1xuXG5mdW5jdGlvbiBtYWtlRWxlbWVudChlbGVtLGNsYXNzTmFtZSx0ZXh0KXtcbiAgICBpZighY2xhc3NOYW1lICYmICF0ZXh0KVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcbiAgICBlbHNle1xuICAgICAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbSk7XG5cbiAgICAgICAgaWYodHlwZW9mKGNsYXNzTmFtZSk9PSdvYmplY3QnKXtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZSBcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICBpZih0ZXh0KXtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gJy4vaW5pdGlhbExvYWQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRpYWxMb2FkKCk7XG5cbi8vaHR0cHM6Ly9waXhhYmF5LmNvbS9waG90b3MvdGFibGUtZ2xhc3N3YXJlLWN1dGxlcnktc2lsdmVyd2FyZS01MzU2NjgyL1xuLy9JbWFnZSBieSA8YSBocmVmPVwiaHR0cHM6Ly9waXhhYmF5LmNvbS91c2Vycy9naW9lbGVmYXp6ZXJpLTE2NDY2OTMxL1wiPkdpb2VsZSBGYXp6ZXJpPC9hPiBmcm9tIDxhIGhyZWY9XCJodHRwczovL3BpeGFiYXkuY29tL1wiPlBpeGFiYXk8L2E+XG5cbi8vSW1hZ2UgYnkgPGEgaHJlZj1cImh0dHBzOi8vcGl4YWJheS5jb20vdXNlcnMvZW04MC04NDY1MzAvXCI+RU04MDwvYT4gZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly9waXhhYmF5LmNvbS9cIj5QaXhhYmF5PC9hPlxuLy9odHRwczovL3BpeGFiYXkuY29tL3Bob3Rvcy9yZXN0YXVyYW50LWZpbmUtZGluaW5nLXJlc3RhdXJhbnQtNDE5ODc1NC9cblxuLy9odHRwczovL3BpeGFiYXkuY29tL3Bob3Rvcy9jYWxmLXZlYWwtYmVhbnMtY2FmJWMzJWE5LWRlLXBhcmlzLTQxOTg3NjAvXG4vL0ltYWdlIGJ5IDxhIGhyZWY9XCJodHRwczovL3BpeGFiYXkuY29tL3VzZXJzL2VtODAtODQ2NTMwL1wiPkVNODA8L2E+IGZyb20gPGEgaHJlZj1cImh0dHBzOi8vcGl4YWJheS5jb20vXCI+UGl4YWJheTwvYT5cblxuLy9JbWFnZSBieSA8YSBocmVmPVwiaHR0cHM6Ly9waXhhYmF5LmNvbS91c2Vycy9nb3VtYmlrLTM3NTI0ODIvXCI+THVrYXM8L2E+IGZyb20gPGEgaHJlZj1cImh0dHBzOi8vcGl4YWJheS5jb20vXCI+UGl4YWJheTwvYT5cbi8vaHR0cHM6Ly9waXhhYmF5LmNvbS9waG90b3MvZm9vZC13ZWRkaW5nLWRlc2VydC1jYWtlLXBhcnR5LTIwNTU3MzYvXG4iLCJpbXBvcnQgeyBtYWtlRWxlbSB9IGZyb20gJy4vZnVuY3Rpb25zL21ha2VFbGVtZW50JztcbmltcG9ydCB7IGFwcGVuZCB9IGZyb20gXCIuL2Z1bmN0aW9ucy9hcHBlbmRFbGVtZW50XCI7XG5pbXBvcnQgeyBjaGFuZ2VBY3RpdmUgfSBmcm9tICcuL2Z1bmN0aW9ucy9jaGFuZ2VQYWdlJztcbmltcG9ydCB7IGN1cnJlbnQgfSBmcm9tICcuJztcblxuZXhwb3J0IHsgaW5pdGlhbExvYWQgfTtcblxuXG5mdW5jdGlvbiBpbml0aWFsTG9hZCgpe1xuICAgIGxldCBjb250ZW50ID0gbWFrZUVsZW0oJ2RpdicsJ3BhZ2VDb250YWluZXInKTtcbiAgICBsZXQgaGVhZGVyQ29udGFpbmVyID0gbWFrZUVsZW0oJ2RpdicsJ2hlYWRlckNvbnRhaW5lcicpO1xuICAgIGxldCBoZWFkZXIgPSBtYWtlRWxlbSgnZGl2JywnaGVhZGVyJywnVGhlIEZvb2QgUmVzdGF1cmFudCcpO1xuICAgIGFwcGVuZChoZWFkZXJDb250YWluZXIsaGVhZGVyKTtcbiAgICBcbiAgICBsZXQgc2lkZUNvbnRhaW5lciA9IG1ha2VFbGVtKCdkaXYnLCdzaWRlQ29udGFpbmVyJyk7XG4gICAgbGV0IHNpZGVCYXIgPSBtYWtlRWxlbSgndWwnLCdzaWRlYmFyJyk7XG4gICAgbGV0IGFib3V0ID0gbWFrZUVsZW0oJ2xpJywnbmF2TWVudScsJ0Fib3V0IFVzJyk7XG4gICAgYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57Y2hhbmdlQWN0aXZlKGFib3V0KX0pO1xuICAgIGN1cnJlbnQgPSBhYm91dDtcbiAgICBcbiAgICBsZXQgbWVudSA9IG1ha2VFbGVtKCdsaScsJ25hdk1lbnUnLCdNZW51Jyk7XG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntjaGFuZ2VBY3RpdmUobWVudSl9KTtcbiAgICBcbiAgICBsZXQgY29udGFjdCA9IG1ha2VFbGVtKCdsaScsJ25hdk1lbnUnLCdDb250YWN0IFVzJyk7XG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntjaGFuZ2VBY3RpdmUoY29udGFjdCl9KTtcbiAgICBcbiAgICBhcHBlbmQoc2lkZUJhcixbYWJvdXQsbWVudSxjb250YWN0XSk7XG4gICAgYXBwZW5kKHNpZGVDb250YWluZXIsc2lkZUJhcik7XG4gICAgXG4gICAgbGV0IGJvZHlDb250YWluZXIgPSBtYWtlRWxlbSgnZGl2JywnYm9keUNvbnRhaW5lcicpO1xuICAgIGxldCBtYWluQ29udGVudCA9IG1ha2VFbGVtKCdkaXYnLCdtYWluQ29udGVudCcpO1xuICAgIFxuICAgIGFwcGVuZChib2R5Q29udGFpbmVyLG1haW5Db250ZW50KTtcbiAgICBcbiAgICBsZXQgZm9vdGVyQ29udGFpbmVyID0gbWFrZUVsZW0oJ2RpdicsJ2Zvb3RlckNvbnRhaW5lcicpO1xuICAgIGxldCB1cmwgPSBtYWtlRWxlbSgnYScsJ2ZsYXRpY29uJywnR2l0aHViIGljb25zIGNyZWF0ZWQgYnkgQm9tYmFzdGljb24gU3R1ZGlvIC0gRmxhdGljb24nKTtcbiAgICB1cmwuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9naXRodWInO1xuICAgIGxldCBpbWFnZSA9IG1ha2VFbGVtKCdpbWcnLCdnaXRodWJVcmwnKTtcbiAgICBsZXQgZm9vdGVyID0gbWFrZUVsZW0oJ2EnLCdmb290ZXInKTtcbiAgICBmb290ZXIuaHJlZiA9ICdodHRwczpnaXRodWIuY29tL0tLZXlmdW4nO1xuICAgIGFwcGVuZChmb290ZXIsaW1hZ2UpO1xuICAgIGFwcGVuZChmb290ZXJDb250YWluZXIsW2Zvb3Rlcix1cmxdKTtcbiAgICBcbiAgICBhcHBlbmQoY29udGVudCxbaGVhZGVyQ29udGFpbmVyLHNpZGVDb250YWluZXIsYm9keUNvbnRhaW5lcixmb290ZXJDb250YWluZXJdKTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBjaGFuZ2VBY3RpdmUoY3VycmVudCk7XG59XG4iLCJpbXBvcnQgeyBtYWtlRWxlbSB9IGZyb20gXCIuLi9mdW5jdGlvbnMvbWFrZUVsZW1lbnRcIjtcbmltcG9ydCB7IGFwcGVuZCB9IGZyb20gJy4uL2Z1bmN0aW9ucy9hcHBlbmRFbGVtZW50JztcblxuZXhwb3J0IHsgbG9hZEFib3V0IH07XG5cbmZ1bmN0aW9uIGxvYWRBYm91dChib2R5KXtcbiAgICBsZXQgYm9keUhlYWRlckNvbnRhaW5lciA9IG1ha2VFbGVtKCdkaXYnLCdib2R5SGVhZGVyQ29udGFpbmVyJyk7XG4gICAgbGV0IGJvZHlIZWFkZXIgPSBtYWtlRWxlbSgnZGl2JywnYm9keUhlYWRlcicsJ0Fib3V0IFVzJyk7XG4gICAgbGV0IGJvZHlDb250ZW50ID0gbWFrZUVsZW0oJ2RpdicsWydib2R5Q29udGVudCcsJ2Fib3V0J10pO1xuICAgIGxldCBwaWN0dXJlID0gbWFrZUVsZW0oJ2ltZycsJ2Fib3V0UGljdHVyZScpO1xuICAgIGxldCBhYm91dCA9IG1ha2VFbGVtKCdkaXYnLCdhYm91dFRleHQnLCdTZXJ2aW5nIGZvb2QgbGlrZSBubyBvdGhlciByZXN0YXVyYW50IGhhcyBzZXJ2ZWQgZm9vZCBiZWZvcmUuIFdlIHdvcmsgd2l0aCBvbmx5IHRoZSBmaW5lc3Qgb2YgZGlzdHJpYnV0ZXJzIHRvIHNvdXJjZSBvdXIgZm9vZCwgdG8gZW5zdXJlIHdlIHNlcnZlIG5vdGhpbmcgYnV0IGV4Y2VsbGVuY2UuIEV2ZXJ5IGRpc2ggaGFzIGJlZW4gYmxlc3NlZCBieSBvdXIgaW4taG91c2UgcHJpZXN0IHNvIHRoYXQgeW91IG1heSBoYXZlIGEgdGFzdGUgb2YgaGVhdmVuLiBJdFxcJ3MgZm9vZCwgd2VcXCdyZSBhIHJlc3RhdXJhbnQgLSBuZWVkIHdlIHNheSBtb3JlPycpO1xuICAgIGFwcGVuZChib2R5SGVhZGVyQ29udGFpbmVyLGJvZHlIZWFkZXIpXG4gICAgYXBwZW5kKGJvZHlDb250ZW50LFtwaWN0dXJlLGFib3V0XSk7XG4gICAgYXBwZW5kKGJvZHksW2JvZHlIZWFkZXJDb250YWluZXIsYm9keUNvbnRlbnRdKTtcbn0iLCJpbXBvcnQgeyBtYWtlRWxlbSB9IGZyb20gXCIuLi9mdW5jdGlvbnMvbWFrZUVsZW1lbnRcIjtcbmltcG9ydCB7IGFwcGVuZCB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXBwZW5kRWxlbWVudFwiO1xuXG5leHBvcnQgeyBsb2FkQ29udGFjdCB9O1xuXG5mdW5jdGlvbiBsb2FkQ29udGFjdChib2R5KXtcbiAgICBsZXQgYm9keUhlYWRlckNvbnRhaW5lciA9IG1ha2VFbGVtKCdkaXYnLCdib2R5SGVhZGVyQ29udGFpbmVyJyk7XG4gICAgbGV0IGJvZHlIZWFkZXIgPSBtYWtlRWxlbSgnZGl2JywnYm9keUhlYWRlcicsJ0NvbnRhY3QgVXMnKTtcbiAgICBsZXQgYm9keUNvbnRlbnQgPSBtYWtlRWxlbSgnZGl2JyxbJ2JvZHlDb250ZW50JywnY29udGFjdCddKTtcblxuICAgIGxldCBjb250YWluZXJPbmUgPSBtYWtlRWxlbSgnZGl2JywnbG9jYXRpb25Db250YWluZXInKTtcbiAgICBsZXQgbG9jYXRpb25PbmUgPSBtYWtlRWxlbSgnZGl2JywnbG9jYXRpb25IZWFkZXInLCdUaGUgRm9vZCBSZXN0YXVyYW50IE1haW4gU3RyZWV0Jyk7XG5cbiAgICBsZXQgbWFwQ29udGFpbmVyT25lID0gbWFrZUVsZW0oJ2RpdicsJ21hcENvbnRhaW5lcicpO1xuICAgIGxldCBtYXBPbmUgPSBtYWtlRWxlbSgnaWZyYW1lJywnbWFwJyk7XG4gICAgbWFwT25lLnNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/d2lkdGg9MTAwJTI1JmFtcDtoZWlnaHQ9NDAwJmFtcDtobD1lbiZhbXA7cT1HcmFudmlsbGUlMjBTdCwlMjBGYXJtJTIwUmQsJTIwU2hlZmZpZWxkJTIwUzIlMjAyVFAsJTIwVW5pdGVkJTIwS2luZ2RvbSsoJTIwKSZhbXA7dD0mYW1wO3o9MTQmYW1wO2llPVVURjgmYW1wO2l3bG9jPUImYW1wO291dHB1dD1lbWJlZFwiO1xuICAgIGFwcGVuZChtYXBDb250YWluZXJPbmUsbWFwT25lKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbk9uZSA9IG1ha2VFbGVtKCdkaXYnLCdsb2NhdGlvbkRlc2NyaXB0aW9uJywnT3VyIG9yaWdpbmFsIGxvY2F0aW9uIHdoZXJlIHdlIGludmVudGVkIGZvb2QnKTtcbiAgICBsZXQgYWRkcmVzc09uZSA9IG1ha2VFbGVtKCdkaXYnLCdudW1iZXJJbmZvJywnQWRkcmVzczogMTIzNCBNYWluIFN0cmVldCwgQ2l0eSAxMjM0NScpO1xuICAgIGxldCBob3Vyc09uZSA9IG1ha2VFbGVtKCdkaXYnLCdudW1iZXJJbmZvJywnTW9uLVN1bjogN3BtIC0gMWFtJyk7XG4gICAgbGV0IHBob25lT25lID0gbWFrZUVsZW0oJ2RpdicsJ251bWJlckluZm8nLCdQaG9uZSBOdW1iZXI6ICgxMjMpLTQ1Ni03ODkwJyk7XG5cbiAgICBhcHBlbmQoY29udGFpbmVyT25lLFtsb2NhdGlvbk9uZSxtYXBDb250YWluZXJPbmUsZGVzY3JpcHRpb25PbmUsYWRkcmVzc09uZSxwaG9uZU9uZSxob3Vyc09uZV0pO1xuXG4gICAgbGV0IGNvbnRhaW5lclR3byA9IG1ha2VFbGVtKCdkaXYnLCdsb2NhdGlvbkNvbnRhaW5lcicpO1xuICAgIGxldCBsb2NhdGlvblR3byA9IG1ha2VFbGVtKCdkaXYnLCdsb2NhdGlvbkhlYWRlcicsJ1RoZSBGb29kIFJlc3RhdXJhbnQgOiBUaGUgU2VxdWVsJyk7XG5cbiAgICBsZXQgbWFwQ29udGFpbmVyVHdvID0gbWFrZUVsZW0oJ2RpdicsJ21hcENvbnRhaW5lcicpO1xuICAgIGxldCBtYXBUd28gPSBtYWtlRWxlbSgnaWZyYW1lJywnbWFwJyk7XG4gICAgbWFwVHdvLnNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/d2lkdGg9MTAwJTI1JmFtcDtoZWlnaHQ9NDAwJmFtcDtobD1lbiZhbXA7cT03Ni83OCUyMFF1ZWVuc3dheSwlMjBMb25kb24lMjBXMiUyMDNSTCwlMjBVbml0ZWQlMjBLaW5nZG9tKyglMjApJmFtcDt0PSZhbXA7ej0xNCZhbXA7aWU9VVRGOCZhbXA7aXdsb2M9QiZhbXA7b3V0cHV0PWVtYmVkXCI7XG4gICAgYXBwZW5kKG1hcENvbnRhaW5lclR3byxtYXBUd28pO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uVHdvID0gbWFrZUVsZW0oJ2RpdicsJ2xvY2F0aW9uRGVzY3JpcHRpb24nLCdJbiBvdXIgcXVlc3QgdG8gY29ucXVlciB0aGUgZm9vZCB3b3JsZCwgd2Ugb3BlbmVkIGEgc2Vjb25kIGxvY2F0aW9uJyk7XG4gICAgbGV0IGFkZHJlc3NUd28gPSBtYWtlRWxlbSgnZGl2JywnbnVtYmVySW5mbycsJ0FkZHJlc3M6IDEyMzQgU3RyZWV0IFN0cmVldCwgQ2l0eSAyMzQ1NicpO1xuICAgIGxldCBob3Vyc1R3byA9IG1ha2VFbGVtKCdkaXYnLCdudW1iZXJJbmZvJywnTW9uLVN1bjogNXBtIC0gMTJhbScpO1xuICAgIGxldCBwaG9uZVR3byA9IG1ha2VFbGVtKCdkaXYnLCdudW1iZXJJbmZvJywnUGhvbmUgTnVtYmVyOiAoMjM0KS01NjctODkwMScpO1xuXG4gICAgYXBwZW5kKGNvbnRhaW5lclR3byxbbG9jYXRpb25Ud28sbWFwQ29udGFpbmVyVHdvLGRlc2NyaXB0aW9uVHdvLGFkZHJlc3NUd28scGhvbmVUd28saG91cnNUd29dKTtcbiAgICBhcHBlbmQoYm9keUhlYWRlckNvbnRhaW5lcixib2R5SGVhZGVyKTtcbiAgICBhcHBlbmQoYm9keUNvbnRlbnQsW2NvbnRhaW5lck9uZSxjb250YWluZXJUd29dKTtcbiAgICBhcHBlbmQoYm9keSxbYm9keUhlYWRlckNvbnRhaW5lcixib2R5Q29udGVudF0pO1xufSIsImltcG9ydCB7IG1ha2VFbGVtIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9tYWtlRWxlbWVudFwiO1xuaW1wb3J0IHsgYXBwZW5kIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9hcHBlbmRFbGVtZW50XCI7XG5cbmV4cG9ydCB7IGxvYWRNZW51IH07XG5cbmZ1bmN0aW9uIGxvYWRNZW51KGJvZHkpe1xuICAgIGxldCBib2R5SGVhZGVyQ29udGFpbmVyID0gbWFrZUVsZW0oJ2RpdicsJ2JvZHlIZWFkZXJDb250YWluZXInKTtcbiAgICBsZXQgYm9keUhlYWRlciA9IG1ha2VFbGVtKCdkaXYnLCdib2R5SGVhZGVyJywnTWVudScpO1xuICAgIGxldCBib2R5Q29udGVudCA9IG1ha2VFbGVtKCdkaXYnLFsnYm9keUNvbnRlbnQnLCdtZW51J10pO1xuXG4gICAgbGV0IGxlZnRDb2x1bW4gPSBtYWtlRWxlbSgnZGl2JywnbWVudURpc3BsYXknKTtcbiAgICBsZXQgc2FsbW9uQ29udGFpbmVyID0gbWFrZUVsZW0oJ2RpdicsWydzYWxtb25Db250YWluZXInLCdwaWN0dXJlQ29udGFpbmVyJ10pO1xuICAgIGxldCBzYWxtb24gPSBtYWtlRWxlbSgnaW1nJywnc2FsbW9uJyk7XG4gICAgbGV0IHNhbG1vbkxhYmVsID0gbWFrZUVsZW0oJ2RpdicsJ2xhYmVsJywnU2FsbW9uIHdpdGggR3JlZW4gU2F1Y2UnKTtcbiAgICBhcHBlbmQoc2FsbW9uQ29udGFpbmVyLFtzYWxtb24sc2FsbW9uTGFiZWxdKTtcblxuICAgIGxldCBjdXBjYWtlQ29udGFpbmVyID0gbWFrZUVsZW0oJ2RpdicsWydjdXBjYWtlQ29udGFpbmVyJywncGljdHVyZUNvbnRhaW5lciddKTtcbiAgICBsZXQgY3VwY2FrZSA9IG1ha2VFbGVtKCdpbWcnLCdjdXBjYWtlJyk7XG4gICAgbGV0IGN1cGNha2VMYWJlbCA9IG1ha2VFbGVtKCdkaXYnLCdsYWJlbCcsJ0RhcmsgQ2hvY29sYXRlIEN1cGNha2VzJyk7XG4gICAgYXBwZW5kKGN1cGNha2VDb250YWluZXIsW2N1cGNha2UsY3VwY2FrZUxhYmVsXSk7XG5cbiAgICBsZXQgbWVudSA9IG1ha2VFbGVtKCdkaXYnLCdtZW51Q29udGFpbmVyJyk7XG4gICAgbGV0IG1lbnVBcnIgPSBbXTtcbiAgICBtZW51QXJyLnB1c2goWydWZWFsIHdpdGggQmVlZiBTYXVjZSAmIEJlYW5zJywnRGVsaWNpb3VzIGNhbGYgbWVhdCBkcml6emxlZCBpbiBkZWxpY2lvdXMsIHJpY2ggYmVlZiBzdG9jayBhbmQgcGFpcmVkIHdpdGggY3Jpc3B5LCBvcmdhbmljIGdyZWVuIGJlYW5zJ10pO1xuICAgIG1lbnVBcnIucHVzaChbJ0p1bWJvIFNocmltcCBDb2NrdGFpbCcsJ0ZyZXNobHkgY2F1Z2h0IHNocmltcCBzZXJ2ZWQgd2l0aCBhIGhvbWVtYWRlIHRhbmd5IGNvY2t0YWlsIHNhdWNlJ10pO1xuICAgIG1lbnVBcnIucHVzaChbJ0VzY2FyZ290cyBCb3VyZ3VpZ25vbicsJ0EgZGVsaWNhY3kgc2VydmVkIHdpdGggZ2FybGljIGJ1dHRlciBhbmQgYSBiZWF1dGlmdWwgcmVkIHdpbmUnXSk7XG4gICAgbWVudUFyci5wdXNoKFsnQmFrZWQgT3lzdGVycycsJ1N3ZWV0IG95c3RlcnMgc2VydmVkIHdpdGggc2F1dGVlZCBjaG9wcGVkIGJhY29uLCBvbmlvbnMsIHNjYWxsaW9uLCBhbmQgd2luZSddKTtcbiAgICBtZW51QXJyLnB1c2goWydTYWxtb24gd2l0aCBHcmVlbiBTYXVjZSAmIFZlZ2V0YWJsZXMnLCdSYXcgc2FsbW9uIHNlcnZlZCBvbiBhIG1peCBvZiBjZWxlcnkgYW5kIGJlYW5zLCBhbmQgdG9wcGVkIHdpdGggYSBzcGVjdGFjdWxhciB2ZWdhbiBzYXVjZSddKVxuICAgIG1lbnVBcnIucHVzaChbJ0JhcmJlY3VlIEJhY2sgUmlicycsJ0dyaWxsZWQgcmlicywgc2VydmVkIHdpdGggeW91ciBjaG9pY2Ugb2YgKEEpIFRhbmd5IGJhcmJlY3VlIHNhdWNlIChCKSBHcmVlayBDbGFzc2ljIHNhdWNlIChPbGl2ZSBvaWwsIG9yZWdhbm8sIGxlbW9uKSAnXSk7XG4gICAgbWVudUFyci5wdXNoKFsnRGFyayBDaG9jb2xhdGUgQ3VwY2FrZXMnLCdSaWNoIGN1cGNha2VzIG1hZGUgd2l0aCA5MCUgY2FjYW8gY2hvY29sYXRlLCB0b3BwZWQgd2l0aCBhIGxpZ2h0LCBzb2Z0IGJ1dHRlciBjcmVhbSddKTtcbiAgICBsZXQgbWVudUl0ZW1zID0gW107XG4gICAgbWVudUFyci5mb3JFYWNoKGVsZW09PntcbiAgICAgICAgbWVudUl0ZW1zLnB1c2goYWRkSXRlbShlbGVtWzBdLGVsZW1bMV0pKTtcbiAgICB9KTtcbiAgICBsZXQgcmlnaHRDb2x1bW4gPSBtYWtlRWxlbSgnZGl2JywnbWVudURpc3BsYXknKTtcbiAgICBsZXQgdmVhbENvbnRhaW5lciA9IG1ha2VFbGVtKCdkaXYnLFsndmVhbENvbnRhaW5lcicsJ3BpY3R1cmVDb250YWluZXInXSk7XG4gICAgbGV0IHZlYWwgPSBtYWtlRWxlbSgnaW1nJywndmVhbCcpO1xuICAgIGxldCB2ZWFsTGFiZWwgPSBtYWtlRWxlbSgnZGl2JywnbGFiZWwnLCdWZWFsIHdpdGggQmVlZiBTYXVjZSAmIEJlYW5zJyk7XG4gICAgYXBwZW5kKHZlYWxDb250YWluZXIsW3ZlYWwsdmVhbExhYmVsXSk7XG5cbiAgICBhcHBlbmQobGVmdENvbHVtbixbdmVhbENvbnRhaW5lcixjdXBjYWtlQ29udGFpbmVyXSk7XG4gICAgYXBwZW5kKG1lbnUsbWVudUl0ZW1zKTtcbiAgICBhcHBlbmQocmlnaHRDb2x1bW4sc2FsbW9uQ29udGFpbmVyKTtcbiAgICBhcHBlbmQoYm9keUhlYWRlckNvbnRhaW5lcixib2R5SGVhZGVyKTtcbiAgICBhcHBlbmQoYm9keUNvbnRlbnQsW2xlZnRDb2x1bW4sbWVudSxyaWdodENvbHVtbl0pO1xuICAgIGFwcGVuZChib2R5LFtib2R5SGVhZGVyQ29udGFpbmVyLGJvZHlDb250ZW50XSk7XG59XG5cblxuZnVuY3Rpb24gYWRkSXRlbShpdGVtLGRlc2NyaXB0aW9uKXtcbiAgICBsZXQgaXRlbUNvbnRhaW5lciA9IG1ha2VFbGVtKCdkaXYnLCdtZW51SXRlbScpO1xuICAgIGxldCBpdGVtTmFtZSA9IG1ha2VFbGVtKCdkaXYnLCdpdGVtTmFtZScsaXRlbSk7XG4gICAgbGV0IGl0ZW1EZXNjID0gbWFrZUVsZW0oJ2RpdicsJ2l0ZW1EZXNjcmlwdGlvbicsZGVzY3JpcHRpb24pO1xuICAgIGFwcGVuZChpdGVtQ29udGFpbmVyLFtpdGVtTmFtZSxpdGVtRGVzY10pO1xuICAgIHJldHVybiBpdGVtQ29udGFpbmVyO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==