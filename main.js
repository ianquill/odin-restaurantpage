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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./panic-webfont.woff */ "./src/panic-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./panic-webfont.woff2 */ "./src/panic-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Panic';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff2');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    font-family: Helvetica, sans-serif;\n    background: #FFA630;\n    color: #2E5077;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\nheader {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n}\n\n.header-text {\n    font-family: 'Panic';\n    overflow: hidden;\n    white-space: nowrap;\n    font-weight: bold;\n    font-size: 36px;\n    user-select: none;\n    margin-left: 20px;\n}\n\nul {\n    display: flex;\n    list-style-type: none;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    padding-left: 0;\n    margin-right: 20px; \n}\n\n.header-item {\n    /* text-decoration: underline; */\n    text-transform: uppercase;\n    font-weight: bolder;\n    cursor: pointer;\n}\n\n.header-item:hover {\n    color: #611c35;\n}\n\nfooter {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.footer-text {\n    font-weight: bolder;\n    font-size: 10px;\n    text-transform: lowercase;\n    margin: 10px 5px 0px 5px;\n}\n\n.link:visited, .link:link {\n    color: inherit;\n    text-decoration: none;\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 100px;\n}\n\nh2 {\n    font-family: \"Panic\";\n    font-size: 32px;\n    margin-bottom: 0;\n}\n\n.home-content {\n    display: flex;\n    flex-direction: column;\n    width: 60vw;\n    max-width: 800px;\n    gap: 10px;\n}\n\nimg {\n    border-radius: 20px;\n}\n\n.menu-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n    align-content: space-evenly;\n}\n\n.menu-card {\n    border-radius: 10px;\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\nh3 {\n    margin-bottom: 0px;\n    font-size: 26px;\n}\n\n.menu-image {\n    border-radius: 20px;\n    width: 400px;\n    height: 400px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ninput {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    padding: 10px;\n    border-radius: 5px;\n    border: 0;\n    outline: none;\n}\n\ninput:focus {\n    outline: 2px #611c35 solid;\n}\n\nlabel {\n    font-weight: bold; \n}\n\n#name {\n    width: 200px;\n}\n\n#email {\n    width: 200px;\n}\n\n#message {\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px; \n    width: 100%;\n    height: 200px;\n    resize: none;\n    padding: 10px;\n    border-radius: 5px;\n    border: 0;\n    outline: none;\n}\n\n#message:focus {\n    outline: 2px #611c35 solid;\n}\n\n#submit {\n    border: 0;\n    border-radius: 5px;\n    outline: 0;\n    background: #4da1a9;\n    color: white;\n    padding: 10px;\n    flex: 0 0 0;\n    align-self: flex-end;\n    margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB;+DACgD;IAChD,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kCAAkC;IAClC,mBAAmB;IACnB,cAAc;IACd,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,yCAAyC;IACzC,eAAe;IACf,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,yCAAyC;IACzC,eAAe;IACf,WAAW;IACX,aAAa;IACb,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,UAAU;IACV,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,WAAW;IACX,oBAAoB;IACpB,SAAS;AACb","sourcesContent":["@font-face {\n    font-family: 'Panic';\n    src: url('./panic-webfont.woff') format('woff'),\n        url('./panic-webfont.woff2') format('woff2');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    font-family: Helvetica, sans-serif;\n    background: #FFA630;\n    color: #2E5077;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\nheader {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n}\n\n.header-text {\n    font-family: 'Panic';\n    overflow: hidden;\n    white-space: nowrap;\n    font-weight: bold;\n    font-size: 36px;\n    user-select: none;\n    margin-left: 20px;\n}\n\nul {\n    display: flex;\n    list-style-type: none;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    padding-left: 0;\n    margin-right: 20px; \n}\n\n.header-item {\n    /* text-decoration: underline; */\n    text-transform: uppercase;\n    font-weight: bolder;\n    cursor: pointer;\n}\n\n.header-item:hover {\n    color: #611c35;\n}\n\nfooter {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.footer-text {\n    font-weight: bolder;\n    font-size: 10px;\n    text-transform: lowercase;\n    margin: 10px 5px 0px 5px;\n}\n\n.link:visited, .link:link {\n    color: inherit;\n    text-decoration: none;\n}\n\n.main-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 100px;\n}\n\nh2 {\n    font-family: \"Panic\";\n    font-size: 32px;\n    margin-bottom: 0;\n}\n\n.home-content {\n    display: flex;\n    flex-direction: column;\n    width: 60vw;\n    max-width: 800px;\n    gap: 10px;\n}\n\nimg {\n    border-radius: 20px;\n}\n\n.menu-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n    align-content: space-evenly;\n}\n\n.menu-card {\n    border-radius: 10px;\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\nh3 {\n    margin-bottom: 0px;\n    font-size: 26px;\n}\n\n.menu-image {\n    border-radius: 20px;\n    width: 400px;\n    height: 400px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ninput {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    padding: 10px;\n    border-radius: 5px;\n    border: 0;\n    outline: none;\n}\n\ninput:focus {\n    outline: 2px #611c35 solid;\n}\n\nlabel {\n    font-weight: bold; \n}\n\n#name {\n    width: 200px;\n}\n\n#email {\n    width: 200px;\n}\n\n#message {\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 14px; \n    width: 100%;\n    height: 200px;\n    resize: none;\n    padding: 10px;\n    border-radius: 5px;\n    border: 0;\n    outline: none;\n}\n\n#message:focus {\n    outline: 2px #611c35 solid;\n}\n\n#submit {\n    border: 0;\n    border-radius: 5px;\n    outline: 0;\n    background: #4da1a9;\n    color: white;\n    padding: 10px;\n    flex: 0 0 0;\n    align-self: flex-end;\n    margin: 0;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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

/***/ "./src/contactsPage.js":
/*!*****************************!*\
  !*** ./src/contactsPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContactsPage": () => (/* binding */ loadContactsPage)
/* harmony export */ });
function loadContactsPage() {
    console.log("loaded contacts page");

    const content = document.createElement('div');
    const headline = document.createElement('h2');
    const description = document.createElement('p');
    const form = document.createElement('form');
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const messageLabel = document.createElement('label');
    const messageInput = document.createElement('textarea');
    const submitButton = document.createElement('button');

    description.textContent = "We here at Clown Burger value each and every opinion of our customers (and clowns). Feel free to drop a line and get in touch with our head chef, CEO, or janitorial team!";
    content.classList.add('home-content');
    headline.textContent = "CONTACT US";
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Name:";
    nameInput.id = "name";
    nameInput.placeholder = "Full name";
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email:";
    // check for proper formatting
    emailInput.id = "email";
    emailInput.placeholder = "yourname@example.com";
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Message:";
    messageInput.id = "message";
    messageInput.placeholder = "Your message here!";
    messageInput.maxLength = 3000;
    submitButton.id = "submit";
    submitButton.textContent = "Submit";
    submitButton.type = "button";



    form.append(
        nameLabel, 
        nameInput, 
        emailLabel, 
        emailInput, 
        messageLabel, 
        messageInput, 
        submitButton
        );

    content.append(
        headline, 
        description,
        form
        );

    return content;
}



/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomePage": () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.jpg */ "./src/burger.jpg");


function loadHomePage() {
    const content = document.createElement('div');
    const headline = document.createElement('h2');
    const para = document.createElement('p');
    const image = new Image();

    content.classList.add('home-content');
    headline.textContent = "Congratulations. You've found Los Angeles' best-kept secret.";
    para.textContent = "We here at Clown Burger take pride in our 100% clown-based patties. Our restrooms are top-quality, and you'll find the food to be quite delicious too. Balloon animals are freshly made, never frozen. Open 24/7."
    image.src = _burger_jpg__WEBPACK_IMPORTED_MODULE_0__;

    content.append(headline, para, image);
    
    return content;
}




/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad),
/* harmony export */   "loadFooter": () => (/* binding */ loadFooter)
/* harmony export */ });
function initialLoad() {
    // Header
    const header = document.createElement('header');
    const headerText = document.createElement('h1');
    const headerList = document.createElement('ul');
    const headerHome = document.createElement('l1');
    const headerMenu = document.createElement('li');
    const headerContact = document.createElement('li');

    headerText.classList.add('header-text');
    headerHome.classList.add('header-item');
    headerMenu.classList.add('header-item');
    headerContact.classList.add('header-item');

    headerText.textContent = "Clown Burger";
    headerHome.textContent = "Home";
    headerMenu.textContent = "Menu";
    headerContact.textContent = "Contacts";

    headerList.appendChild(headerHome);
    headerList.appendChild(headerMenu);
    headerList.appendChild(headerContact);
    header.appendChild(headerText);
    header.appendChild(headerList);
    
    return header;
}

function loadFooter() {
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    const footerLink = document.createElement('a');

    footerText.classList.add('footer-text');
    footerText.textContent = "© Ian Quill | Created as part of the Odin Project Curriculum | 2021";
    footerLink.classList.add('footer-text');
    footerLink.classList.add('link');
    footerLink.textContent = `@ianquill`;
    footerLink.href = `https://github.com/ianquill`;

    footer.append(footerText, footerLink);

    return footer;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _Original_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Original.jpg */ "./src/Original.jpg");
/* harmony import */ var _DoubleTrouble_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoubleTrouble.jpg */ "./src/DoubleTrouble.jpg");
/* harmony import */ var _BlackBurger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlackBurger.jpg */ "./src/BlackBurger.jpg");
/* harmony import */ var _ChickenBurger_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChickenBurger.jpg */ "./src/ChickenBurger.jpg");
/* harmony import */ var _PieceChicken_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PieceChicken.jpg */ "./src/PieceChicken.jpg");
/* harmony import */ var _Combo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Combo.jpg */ "./src/Combo.jpg");







const menu = [];

class MenuItem {
    constructor(title, description, img) {
        this.title = title;
        this.description = description;
        this.img = new Image();
        this.img.src = img;
    }
}

menu[0] = new MenuItem('The Original', 
    "Our world-famous 100% clown meat burger.", _Original_jpg__WEBPACK_IMPORTED_MODULE_0__);
menu[1] = new MenuItem('Double Trouble',
     "Two TIMES the calories of clown goodness. Be sure to check with your doctor before consuming.", _DoubleTrouble_jpg__WEBPACK_IMPORTED_MODULE_1__);
menu[2] = new MenuItem('Coal Burger', "This one is just made of coal. Not great to be honest.", _BlackBurger_jpg__WEBPACK_IMPORTED_MODULE_2__);
menu[3] = new MenuItem('Chicken Clownburger', "100% pure crispy chicken clowns. Farm-raised for your enjoyment.", _ChickenBurger_jpg__WEBPACK_IMPORTED_MODULE_3__);
menu[4] = new MenuItem('Piece Of Chicken', "Literally just a piece of chicken. Nothing clown related in here.", _PieceChicken_jpg__WEBPACK_IMPORTED_MODULE_4__);
menu[5] = new MenuItem('Combo Meal', "The only way to get fries at this restaurant. Really don't understand the rule either. I'm just typing what they tell me to.", _Combo_jpg__WEBPACK_IMPORTED_MODULE_5__);





/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenuPage": () => (/* binding */ loadMenuPage)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");


function loadMenuPage() {
    
    const content = document.createElement('div');
    const headline = document.createElement('h2');
    const gridContainer = document.createElement('div');
    
    content.classList.add('home-content');
    gridContainer.classList.add('menu-grid');
    headline.textContent = "MENU";
    
    // for each item in menu, build a card for it on the grid,
    // with an image 
    
    _menu__WEBPACK_IMPORTED_MODULE_0__.menu.forEach(element => {
        const card = document.createElement('div');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const image = element.img;
        
        card.classList.add('menu-card');
        title.classList.add('menu-title');
        description.classList.add('menu-description');
        image.classList.add('menu-image');
        
        title.textContent = element.title;
        description.textContent = element.description;
        
        card.append(title, description, image);
        gridContainer.appendChild(card);
    });
    
    content.appendChild(headline);
    content.appendChild(gridContainer);
    
    console.log("loaded menu page");
    return content;
}



/***/ }),

/***/ "./src/BlackBurger.jpg":
/*!*****************************!*\
  !*** ./src/BlackBurger.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9df1977358ed488cbb7.jpg";

/***/ }),

/***/ "./src/ChickenBurger.jpg":
/*!*******************************!*\
  !*** ./src/ChickenBurger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfe11b256ee0f46865cb.jpg";

/***/ }),

/***/ "./src/Combo.jpg":
/*!***********************!*\
  !*** ./src/Combo.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c20eb785b10e6fce3d01.jpg";

/***/ }),

/***/ "./src/DoubleTrouble.jpg":
/*!*******************************!*\
  !*** ./src/DoubleTrouble.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b8e14a3b95d09447367.jpg";

/***/ }),

/***/ "./src/Original.jpg":
/*!**************************!*\
  !*** ./src/Original.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d10953ee0a6c95ccf23.jpg";

/***/ }),

/***/ "./src/PieceChicken.jpg":
/*!******************************!*\
  !*** ./src/PieceChicken.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f6bb201ac061c964b5d.jpg";

/***/ }),

/***/ "./src/burger.jpg":
/*!************************!*\
  !*** ./src/burger.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8d45e46a5000a40f3f3.jpg";

/***/ }),

/***/ "./src/panic-webfont.woff":
/*!********************************!*\
  !*** ./src/panic-webfont.woff ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd92bfe83449ab75cff5.woff";

/***/ }),

/***/ "./src/panic-webfont.woff2":
/*!*********************************!*\
  !*** ./src/panic-webfont.woff2 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5b41245a0811b568011.woff2";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initialLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialLoad.js */ "./src/initialLoad.js");
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuPage.js */ "./src/menuPage.js");
/* harmony import */ var _contactsPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactsPage.js */ "./src/contactsPage.js");






// initialize DOM
const content = document.getElementById('content');
const mainContainer = document.createElement('div');
content.id = "content";
mainContainer.classList.add("main-container");

document.body.appendChild(content);

mainContainer.appendChild((0,_homePage_js__WEBPACK_IMPORTED_MODULE_2__.loadHomePage)());

content.appendChild((0,_initialLoad_js__WEBPACK_IMPORTED_MODULE_1__.initialLoad)());
content.appendChild(mainContainer);
content.appendChild((0,_initialLoad_js__WEBPACK_IMPORTED_MODULE_1__.loadFooter)());

const nav = document.querySelectorAll('.header-item');

for (let li of nav) {
    li.addEventListener('click', () => {
        const page = li.textContent;
        loadPage(page);
    });
};

function loadPage(page) {

    // clear page
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }

    switch (page) {
        case "Home":
            mainContainer.appendChild((0,_homePage_js__WEBPACK_IMPORTED_MODULE_2__.loadHomePage)());
            break;
        case "Menu":
            mainContainer.appendChild((0,_menuPage_js__WEBPACK_IMPORTED_MODULE_3__.loadMenuPage)());
            break;

        case "Contacts":
            mainContainer.appendChild((0,_contactsPage_js__WEBPACK_IMPORTED_MODULE_4__.loadContactsPage)());
            break;
    
        default:
            break;
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMEJBQTBCLDBEQUFZOztBQUV0QyxvQkFBb0IsNERBQVc7QUFDL0I7QUFDQSxvQkFBb0IsMkRBQVU7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsMERBQVk7QUFDbEQ7QUFDQTtBQUNBLHNDQUFzQywwREFBWTtBQUNsRDs7QUFFQTtBQUNBLHNDQUFzQyxrRUFBZ0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3RzUGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5pdGlhbExvYWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3BhbmljLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vcGFuaWMtd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQYW5pYyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZBNjMwO1xcbiAgICBjb2xvcjogIzJFNTA3NztcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQYW5pYyc7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyBcXG59XFxuXFxuLmhlYWRlci1pdGVtIHtcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlci1pdGVtOmhvdmVyIHtcXG4gICAgY29sb3I6ICM2MTFjMzU7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxuICAgIG1hcmdpbjogMTBweCA1cHggMHB4IDVweDtcXG59XFxuXFxuLmxpbms6dmlzaXRlZCwgLmxpbms6bGluayB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LWZhbWlseTogXFxcIlBhbmljXFxcIjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLm1lbnUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5tZW51LWNhcmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbi5tZW51LWltYWdlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDJweCAjNjExYzM1IHNvbGlkO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcXG59XFxuXFxuI25hbWUge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbiNlbWFpbCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuI21lc3NhZ2Uge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4OyBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNtZXNzYWdlOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMnB4ICM2MTFjMzUgc29saWQ7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYmFja2dyb3VuZDogIzRkYTFhOTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmbGV4OiAwIDAgMDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIG1hcmdpbjogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQjsrREFDZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGFuaWMnO1xcbiAgICBzcmM6IHVybCgnLi9wYW5pYy13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnLi9wYW5pYy13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZBNjMwO1xcbiAgICBjb2xvcjogIzJFNTA3NztcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhlYWRlci10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQYW5pYyc7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxudWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyBcXG59XFxuXFxuLmhlYWRlci1pdGVtIHtcXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlci1pdGVtOmhvdmVyIHtcXG4gICAgY29sb3I6ICM2MTFjMzU7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxuICAgIG1hcmdpbjogMTBweCA1cHggMHB4IDVweDtcXG59XFxuXFxuLmxpbms6dmlzaXRlZCwgLmxpbms6bGluayB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LWZhbWlseTogXFxcIlBhbmljXFxcIjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLm1lbnUtZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5tZW51LWNhcmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbi5tZW51LWltYWdlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDJweCAjNjExYzM1IHNvbGlkO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcXG59XFxuXFxuI25hbWUge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbiNlbWFpbCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuI21lc3NhZ2Uge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4OyBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNtZXNzYWdlOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMnB4ICM2MTFjMzUgc29saWQ7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYmFja2dyb3VuZDogIzRkYTFhOTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmbGV4OiAwIDAgMDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIG1hcmdpbjogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gbG9hZENvbnRhY3RzUGFnZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImxvYWRlZCBjb250YWN0cyBwYWdlXCIpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBtZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiV2UgaGVyZSBhdCBDbG93biBCdXJnZXIgdmFsdWUgZWFjaCBhbmQgZXZlcnkgb3BpbmlvbiBvZiBvdXIgY3VzdG9tZXJzIChhbmQgY2xvd25zKS4gRmVlbCBmcmVlIHRvIGRyb3AgYSBsaW5lIGFuZCBnZXQgaW4gdG91Y2ggd2l0aCBvdXIgaGVhZCBjaGVmLCBDRU8sIG9yIGphbml0b3JpYWwgdGVhbSFcIjtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGVudCcpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJDT05UQUNUIFVTXCI7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xuICAgIG5hbWVJbnB1dC5pZCA9IFwibmFtZVwiO1xuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRnVsbCBuYW1lXCI7XG4gICAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlbWFpbFwiKTtcbiAgICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gXCJFbWFpbDpcIjtcbiAgICAvLyBjaGVjayBmb3IgcHJvcGVyIGZvcm1hdHRpbmdcbiAgICBlbWFpbElucHV0LmlkID0gXCJlbWFpbFwiO1xuICAgIGVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSBcInlvdXJuYW1lQGV4YW1wbGUuY29tXCI7XG4gICAgbWVzc2FnZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1lc3NhZ2VcIik7XG4gICAgbWVzc2FnZUxhYmVsLnRleHRDb250ZW50ID0gXCJNZXNzYWdlOlwiO1xuICAgIG1lc3NhZ2VJbnB1dC5pZCA9IFwibWVzc2FnZVwiO1xuICAgIG1lc3NhZ2VJbnB1dC5wbGFjZWhvbGRlciA9IFwiWW91ciBtZXNzYWdlIGhlcmUhXCI7XG4gICAgbWVzc2FnZUlucHV0Lm1heExlbmd0aCA9IDMwMDA7XG4gICAgc3VibWl0QnV0dG9uLmlkID0gXCJzdWJtaXRcIjtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcblxuXG5cbiAgICBmb3JtLmFwcGVuZChcbiAgICAgICAgbmFtZUxhYmVsLCBcbiAgICAgICAgbmFtZUlucHV0LCBcbiAgICAgICAgZW1haWxMYWJlbCwgXG4gICAgICAgIGVtYWlsSW5wdXQsIFxuICAgICAgICBtZXNzYWdlTGFiZWwsIFxuICAgICAgICBtZXNzYWdlSW5wdXQsIFxuICAgICAgICBzdWJtaXRCdXR0b25cbiAgICAgICAgKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKFxuICAgICAgICBoZWFkbGluZSwgXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBmb3JtXG4gICAgICAgICk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IHsgbG9hZENvbnRhY3RzUGFnZSB9OyIsImltcG9ydCBCdXJnZXIgZnJvbSAnLi9idXJnZXIuanBnJztcblxuZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnQnKTtcbiAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiQ29uZ3JhdHVsYXRpb25zLiBZb3UndmUgZm91bmQgTG9zIEFuZ2VsZXMnIGJlc3Qta2VwdCBzZWNyZXQuXCI7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IFwiV2UgaGVyZSBhdCBDbG93biBCdXJnZXIgdGFrZSBwcmlkZSBpbiBvdXIgMTAwJSBjbG93bi1iYXNlZCBwYXR0aWVzLiBPdXIgcmVzdHJvb21zIGFyZSB0b3AtcXVhbGl0eSwgYW5kIHlvdSdsbCBmaW5kIHRoZSBmb29kIHRvIGJlIHF1aXRlIGRlbGljaW91cyB0b28uIEJhbGxvb24gYW5pbWFscyBhcmUgZnJlc2hseSBtYWRlLCBuZXZlciBmcm96ZW4uIE9wZW4gMjQvNy5cIlxuICAgIGltYWdlLnNyYyA9IEJ1cmdlcjtcblxuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRsaW5lLCBwYXJhLCBpbWFnZSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmV4cG9ydCB7bG9hZEhvbWVQYWdlfTtcbiIsImZ1bmN0aW9uIGluaXRpYWxMb2FkKCkge1xuICAgIC8vIEhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGhlYWRlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGhlYWRlckhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsMScpO1xuICAgIGNvbnN0IGhlYWRlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGhlYWRlckNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgaGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdGV4dCcpO1xuICAgIGhlYWRlckhvbWUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWl0ZW0nKTtcbiAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1pdGVtJyk7XG4gICAgaGVhZGVyQ29udGFjdC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItaXRlbScpO1xuXG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiQ2xvd24gQnVyZ2VyXCI7XG4gICAgaGVhZGVySG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGhlYWRlck1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBoZWFkZXJDb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0c1wiO1xuXG4gICAgaGVhZGVyTGlzdC5hcHBlbmRDaGlsZChoZWFkZXJIb21lKTtcbiAgICBoZWFkZXJMaXN0LmFwcGVuZENoaWxkKGhlYWRlck1lbnUpO1xuICAgIGhlYWRlckxpc3QuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFjdCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMaXN0KTtcbiAgICBcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBsb2FkRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGZvb3RlclRleHQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXRleHQnKTtcbiAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gXCLCqSBJYW4gUXVpbGwgfCBDcmVhdGVkIGFzIHBhcnQgb2YgdGhlIE9kaW4gUHJvamVjdCBDdXJyaWN1bHVtIHwgMjAyMVwiO1xuICAgIGZvb3RlckxpbmsuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXRleHQnKTtcbiAgICBmb290ZXJMaW5rLmNsYXNzTGlzdC5hZGQoJ2xpbmsnKTtcbiAgICBmb290ZXJMaW5rLnRleHRDb250ZW50ID0gYEBpYW5xdWlsbGA7XG4gICAgZm9vdGVyTGluay5ocmVmID0gYGh0dHBzOi8vZ2l0aHViLmNvbS9pYW5xdWlsbGA7XG5cbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlclRleHQsIGZvb3RlckxpbmspO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbExvYWQsIGxvYWRGb290ZXIgfTsiLCJpbXBvcnQgT3JpZ2luYWwgZnJvbSBcIi4vT3JpZ2luYWwuanBnXCI7XG5pbXBvcnQgRG91YmxlVHJvdWJsZSBmcm9tIFwiLi9Eb3VibGVUcm91YmxlLmpwZ1wiXG5pbXBvcnQgQmxhY2tCdXJnZXIgZnJvbSBcIi4vQmxhY2tCdXJnZXIuanBnXCI7XG5pbXBvcnQgQ2hpY2tlbkJ1cmdlciBmcm9tIFwiLi9DaGlja2VuQnVyZ2VyLmpwZ1wiO1xuaW1wb3J0IFBpZWNlQ2hpY2tlbiBmcm9tIFwiLi9QaWVjZUNoaWNrZW4uanBnXCI7XG5pbXBvcnQgQ29tYm8gZnJvbSBcIi4vQ29tYm8uanBnXCI7XG5cbmNvbnN0IG1lbnUgPSBbXTtcblxuY2xhc3MgTWVudUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1nKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZy5zcmMgPSBpbWc7XG4gICAgfVxufVxuXG5tZW51WzBdID0gbmV3IE1lbnVJdGVtKCdUaGUgT3JpZ2luYWwnLCBcbiAgICBcIk91ciB3b3JsZC1mYW1vdXMgMTAwJSBjbG93biBtZWF0IGJ1cmdlci5cIiwgT3JpZ2luYWwpO1xubWVudVsxXSA9IG5ldyBNZW51SXRlbSgnRG91YmxlIFRyb3VibGUnLFxuICAgICBcIlR3byBUSU1FUyB0aGUgY2Fsb3JpZXMgb2YgY2xvd24gZ29vZG5lc3MuIEJlIHN1cmUgdG8gY2hlY2sgd2l0aCB5b3VyIGRvY3RvciBiZWZvcmUgY29uc3VtaW5nLlwiLCBEb3VibGVUcm91YmxlKTtcbm1lbnVbMl0gPSBuZXcgTWVudUl0ZW0oJ0NvYWwgQnVyZ2VyJywgXCJUaGlzIG9uZSBpcyBqdXN0IG1hZGUgb2YgY29hbC4gTm90IGdyZWF0IHRvIGJlIGhvbmVzdC5cIiwgQmxhY2tCdXJnZXIpO1xubWVudVszXSA9IG5ldyBNZW51SXRlbSgnQ2hpY2tlbiBDbG93bmJ1cmdlcicsIFwiMTAwJSBwdXJlIGNyaXNweSBjaGlja2VuIGNsb3ducy4gRmFybS1yYWlzZWQgZm9yIHlvdXIgZW5qb3ltZW50LlwiLCBDaGlja2VuQnVyZ2VyKTtcbm1lbnVbNF0gPSBuZXcgTWVudUl0ZW0oJ1BpZWNlIE9mIENoaWNrZW4nLCBcIkxpdGVyYWxseSBqdXN0IGEgcGllY2Ugb2YgY2hpY2tlbi4gTm90aGluZyBjbG93biByZWxhdGVkIGluIGhlcmUuXCIsIFBpZWNlQ2hpY2tlbik7XG5tZW51WzVdID0gbmV3IE1lbnVJdGVtKCdDb21ibyBNZWFsJywgXCJUaGUgb25seSB3YXkgdG8gZ2V0IGZyaWVzIGF0IHRoaXMgcmVzdGF1cmFudC4gUmVhbGx5IGRvbid0IHVuZGVyc3RhbmQgdGhlIHJ1bGUgZWl0aGVyLiBJJ20ganVzdCB0eXBpbmcgd2hhdCB0aGV5IHRlbGwgbWUgdG8uXCIsIENvbWJvKTtcblxuXG5leHBvcnQgeyBtZW51IH07XG4iLCJpbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuXG5mdW5jdGlvbiBsb2FkTWVudVBhZ2UoKSB7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnQnKTtcbiAgICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtZ3JpZCcpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gICAgXG4gICAgLy8gZm9yIGVhY2ggaXRlbSBpbiBtZW51LCBidWlsZCBhIGNhcmQgZm9yIGl0IG9uIHRoZSBncmlkLFxuICAgIC8vIHdpdGggYW4gaW1hZ2UgXG4gICAgXG4gICAgbWVudS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZWxlbWVudC5pbWc7XG4gICAgICAgIFxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWFnZScpO1xuICAgICAgICBcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBlbGVtZW50LnRpdGxlO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICBjYXJkLmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlKTtcbiAgICAgICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9KTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdyaWRDb250YWluZXIpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwibG9hZGVkIG1lbnUgcGFnZVwiKTtcbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IHsgbG9hZE1lbnVQYWdlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGluaXRpYWxMb2FkLCBsb2FkRm9vdGVyIH0gZnJvbSAnLi9pbml0aWFsTG9hZC5qcyc7XG5pbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tICcuL2hvbWVQYWdlLmpzJztcbmltcG9ydCB7IGxvYWRNZW51UGFnZSB9IGZyb20gJy4vbWVudVBhZ2UuanMnO1xuaW1wb3J0IHsgbG9hZENvbnRhY3RzUGFnZSB9IGZyb20gJy4vY29udGFjdHNQYWdlLmpzJztcblxuLy8gaW5pdGlhbGl6ZSBET01cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGVudC5pZCA9IFwiY29udGVudFwiO1xubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobG9hZEhvbWVQYWdlKCkpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGluaXRpYWxMb2FkKCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZEZvb3RlcigpKTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlci1pdGVtJyk7XG5cbmZvciAobGV0IGxpIG9mIG5hdikge1xuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlID0gbGkudGV4dENvbnRlbnQ7XG4gICAgICAgIGxvYWRQYWdlKHBhZ2UpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gbG9hZFBhZ2UocGFnZSkge1xuXG4gICAgLy8gY2xlYXIgcGFnZVxuICAgIHdoaWxlIChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN3aXRjaCAocGFnZSkge1xuICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkSG9tZVBhZ2UoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobG9hZE1lbnVQYWdlKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIkNvbnRhY3RzXCI6XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRDb250YWN0c1BhZ2UoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==