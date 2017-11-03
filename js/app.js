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

var _breakpoint = __webpack_require__(2);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

var _carousel = __webpack_require__(3);

var _carousel2 = _interopRequireDefault(_carousel);

var _include = __webpack_require__(4);

var _include2 = _interopRequireDefault(_include);

var _render = __webpack_require__(5);

var _render2 = _interopRequireDefault(_render);

var _hello = __webpack_require__(6);

var _hello2 = _interopRequireDefault(_hello);

var _fruits = __webpack_require__(7);

var _fruits2 = _interopRequireDefault(_fruits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FRAMEWORK = FRAMEWORK || {};

/* methods
========================================================================== */


/* components
========================================================================== */


/* templates
========================================================================== */


(function (window, APP) {

  APP.templates = {
    hello: _hello2.default,
    fruits: _fruits2.default
  };

  APP.methods = {
    components: _components2.default,
    breakpoint: _breakpoint2.default
  };

  APP.components = {
    carousel: _carousel2.default,
    include: _include2.default,
    render: _render2.default
  };

  document.addEventListener('DOMContentLoaded', function () {
    APP.methods.components(APP);
    console.log(APP.methods.breakpoint());
  });

  window.addEventListener('resize', function () {
    console.log(APP.methods.breakpoint());
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

exports.default = function () {
  var breakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
  return breakpoint;
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(element, APP) {
    _classCallCheck(this, _class);

    this.element = element;
    this.entries = APP.templates;
    this.template = this.element.dataset.template;
  }

  _createClass(_class, [{
    key: "init",
    value: function init() {
      var _this = this;

      Object.entries(this.entries).forEach(function (entry) {
        var key = entry[0];
        var value = entry[1];
        if (key == _this.template) {
          _this.element.innerHTML = value.template();
        }
      });
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: 'world',
  template: function template() {
    return 'Hello, ' + this.data + '.';
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: ['banana', 'apple', 'orange', 'pear', 'pineapple'],

  template: function template() {
    var items = [];
    this.data.forEach(function (fruit) {
      items.push('<li> ' + fruit + ' </li>');
    });
    return items.join('');
  }
};

/***/ })
/******/ ]);