webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_small_png__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_small_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_image_viewer_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_image_viewer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_image_viewer_css__);
// import big from '../assets/big.jpg';

 //function to show modules with data

/* harmony default export */ exports["default"] = function () {
  var image = document.createElement('img');
  image.src = __WEBPACK_IMPORTED_MODULE_0__assets_small_png___default.a;
  document.body.appendChild(image);
}; // const big_image =  document.createElement('img');
// big_image.src = big;
// document.body.appendChild(big_image);

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, "img{\n    border: 10px solid black;\n    \n}", ""]);



/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "47c251dfe1249a35455b7d8498d11156.png";

/***/ }
]);