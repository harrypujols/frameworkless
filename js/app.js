/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var APP = APP || {};

  APP.component = {
    js: function js(el) {
      return document.querySelectorAll('[data-js=' + el + ']');
    }
  };

  APP.methods = {
    carousel: function () {
      function carousel() {
        _classCallCheck(this, carousel);

        this.carousel = APP.component.js('carousel');
        this.right;
        this.left;
        this.items;
        this.index = 0;
      }

      _createClass(carousel, [{
        key: 'next',
        value: function next() {
          this.right.addEventListener('click', function (event) {
            event.preventDefault();
            alert('next');
          });
        }
      }, {
        key: 'prev',
        value: function prev() {
          this.left.addEventListener('click', function (event) {
            event.preventDefault();
            alert('prev');
          });
        }
      }, {
        key: 'init',
        value: function init() {
          var _this = this;

          this.carousel.forEach(function (carousel) {
            _this.right = carousel.querySelector('[data-btn=next]');
            _this.left = carousel.querySelector('[data-btn=prev]');
            _this.items = carousel.querySelectorAll('.carousel-item');
            _this.next();
            _this.prev();
          });
        }
      }]);

      return carousel;
    }(),

    svg: function () {
      function svg() {
        _classCallCheck(this, svg);

        this.element = document.querySelectorAll('[data-svg]');
      }

      _createClass(svg, [{
        key: 'importer',
        value: function importer() {
          var _this2 = this;

          this.element.forEach(function (element) {
            _this2.fetcher(element, element.dataset.svg);
          });
        }
      }, {
        key: 'fetcher',
        value: function fetcher(element, file) {
          fetch(file).then(function (response) {
            return response.text();
          }).then(function (text) {
            element.innerHTML = text;
          }).catch(console.error.bind(console));
        }
      }, {
        key: 'init',
        value: function init() {
          this.importer();
        }
      }]);

      return svg;
    }()
  };

  Object.values(APP.methods).forEach(function (method) {
    var execute = new method();
    execute.init();
  });
})();

/***/ })
/******/ ]);