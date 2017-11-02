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


var _components = __webpack_require__(1);

var _components2 = _interopRequireDefault(_components);

var _templates = __webpack_require__(2);

var _templates2 = _interopRequireDefault(_templates);

var _carousel = __webpack_require__(3);

var _carousel2 = _interopRequireDefault(_carousel);

var _include = __webpack_require__(4);

var _include2 = _interopRequireDefault(_include);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FRAMEWORK = FRAMEWORK || {};

(function (window, APP) {

  APP.data = {
    hello: 'world',
    fruits: ['banana', 'apple', 'orange', 'pear', 'pineapple']
  };

  APP.templates = {
    hello: function hello() {
      return 'Hello, ' + APP.data.hello + '.';
    },

    fruits: function fruits() {
      var items = [];
      APP.data.fruits.forEach(function (fruit) {
        items.push('<li> ' + fruit + ' </li>');
      });
      return items.join('');
    }
  };

  APP.methods = {
    components: _components2.default,
    templates: _templates2.default
  };

  APP.components = {
    carousel: _carousel2.default,
    include: _include2.default
  };

  document.addEventListener('DOMContentLoaded', function (event) {
    APP.methods.components(APP);
    APP.methods.templates(APP);
  });
})(window, FRAMEWORK, undefined);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (APP) {
  var components = document.querySelectorAll('[data-js]');
  components.forEach(function (component) {
    Object.entries(APP.components).forEach(function (entry) {
      var key = entry[0];
      var value = entry[1];
      if (key == component.dataset.js) {
        var directive = new value(component, APP);
        directive.init();
      }
    });
  });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (APP) {
  var elements = document.querySelectorAll('[data-template]');
  elements.forEach(function (element) {
    Object.entries(APP.templates).forEach(function (entry) {
      var key = entry[0];
      var value = entry[1];
      if (key == element.dataset.template) {
        element.innerHTML = value();
      }
    });
  });
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(element) {
    _classCallCheck(this, _class);

    this.carousel = element;
    this.next = this.carousel.querySelector('[data-btn=next]');
    this.prev = this.carousel.querySelector('[data-btn=prev]');
    this.items = this.carousel.querySelectorAll('.carousel-item');
    this.index = 0;
  }

  _createClass(_class, [{
    key: 'clickPrev',
    value: function clickPrev() {
      var _this = this;

      this.prev.addEventListener('click', function (event) {
        event.preventDefault();
        _this.index--;
        if (_this.index < 0) {
          _this.index = 0;
        }
        _this.items[_this.index].scrollIntoView({ block: 'end', behavior: 'smooth' });
      });
    }
  }, {
    key: 'clickNext',
    value: function clickNext() {
      var _this2 = this;

      this.next.addEventListener('click', function (event) {
        event.preventDefault();
        _this2.index++;
        if (_this2.index >= _this2.items.length) {
          _this2.index = _this2.items.length - 1;
        }
        _this2.items[_this2.index].scrollIntoView({ block: 'end', behavior: 'smooth' });
      });
    }
  }, {
    key: 'init',
    value: function init() {
      this.clickPrev();
      this.clickNext();
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(element) {
    _classCallCheck(this, _class);

    this.element = element;
    this.file = this.element.dataset.file;
  }

  _createClass(_class, [{
    key: "init",
    value: function init() {
      var _this = this;

      fetch(this.file).then(function (response) {
        return response.text();
      }).then(function (text) {
        _this.element.innerHTML = text;
      }).catch(console.error.bind(console));
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ })
/******/ ]);