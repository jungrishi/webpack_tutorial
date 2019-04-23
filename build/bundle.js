/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_big_jpg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_big_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_big_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_small_jpg__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_small_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_small_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_image_viewer_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_image_viewer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_image_viewer_css__);



var image = document.createElement('img');
image.src = __WEBPACK_IMPORTED_MODULE_1__assets_small_jpg___default.a;
document.body.appendChild(image);
var big_image = document.createElement('img');
big_image.src = __WEBPACK_IMPORTED_MODULE_0__assets_big_jpg___default.a;
document.body.appendChild(big_image);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var sum = function sum(a, b) {
  return a + b;
}; //export sum to make explictly available to index.js(to other location)
//make variables available to other files in my project
//common js:module.exports = sum;  
//ES2015


/* harmony default export */ exports["a"] = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "72b5fe79c6cff230f6f9dc24a50683c5.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sum__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_viewer__ = __webpack_require__(0);
// webpack: maintain the order of the files to load; talks about the dependencies
// also for better performance loading many files- drawback of splitting files
// webpack merges many small js files into a single file called bundle.js and 
// ensure each module execute in right order. 
// it is the entry point in our project

/*first webpack looks at the entry file to import the module it
depend to run then it check the dependencies for it to run 
so basically (required)look in heirarchical order from the entry point */
// dependent on sum.js to run since sum.js needs to load first before index.js can use it
//const sum = require('./sum'); //relative file reference
//ES2015

 //no import code; only run 

var total = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sum__["a" /* default */])(2, 3);
console.log(total);

/***/ }
/******/ ]);