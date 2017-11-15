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


var _render = __webpack_require__(1);

var _render2 = _interopRequireDefault(_render);

var _components = __webpack_require__(2);

var _components2 = _interopRequireDefault(_components);

var _breakpoint = __webpack_require__(3);

var _breakpoint2 = _interopRequireDefault(_breakpoint);

var _carousel = __webpack_require__(4);

var _carousel2 = _interopRequireDefault(_carousel);

var _include = __webpack_require__(5);

var _include2 = _interopRequireDefault(_include);

var _modal = __webpack_require__(6);

var _modal2 = _interopRequireDefault(_modal);

var _hello = __webpack_require__(7);

var _hello2 = _interopRequireDefault(_hello);

var _slides = __webpack_require__(8);

var _slides2 = _interopRequireDefault(_slides);

var _run = __webpack_require__(9);

var _run2 = _interopRequireDefault(_run);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FRAMEWORK = FRAMEWORK || {};

/* methods
========================================================================== */


/* components
========================================================================== */


/* templates
========================================================================== */


/* run
========================================================================== */


(function (window, APP) {

  APP.templates = {
    hello: _hello2.default,
    slides: _slides2.default
  };

  APP.methods = {
    render: _render2.default,
    components: _components2.default,
    breakpoint: _breakpoint2.default
  };

  APP.components = {
    carousel: _carousel2.default,
    include: _include2.default,
    modal: _modal2.default
  };

  APP.start = {
    run: _run2.default
  };

  APP.start.run(APP);
})(window, FRAMEWORK, undefined);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function (APP) {
  var elements = document.querySelectorAll('[data-js=render]');
  elements.forEach(function (element) {
    Object.entries(APP.templates).forEach(function (entry) {
      var _entry = _slicedToArray(entry, 2),
          key = _entry[0],
          value = _entry[1];

      if (key == element.dataset.template) {
        element.innerHTML = value.template();
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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function (APP) {
  var components = document.querySelectorAll('[data-js]');
  components.forEach(function (component) {
    Object.entries(APP.components).forEach(function (entry) {
      var _entry = _slicedToArray(entry, 2),
          key = _entry[0],
          value = _entry[1];

      if (key == component.dataset.js) {
        var directive = new value(component, APP);
        directive.init();
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

exports.default = function () {
  var breakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
  return breakpoint;
};

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
/* 5 */
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
/* 6 */
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
    this.window = this.element.dataset.window;
    this.open = document.querySelectorAll('[data-open=' + this.window + ']');
    this.close = this.element.querySelectorAll('[data-close]');
  }

  _createClass(_class, [{
    key: 'create',
    value: function create() {
      var _this = this;

      this.open.forEach(function (button) {
        button.addEventListener('click', function (event) {
          _this.element.classList.add('is-open');
        });
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this2 = this;

      this.close.forEach(function (button) {
        button.addEventListener('click', function (event) {
          _this2.element.classList.remove('is-open');
        });
      });
    }
  }, {
    key: 'init',
    value: function init() {
      this.create();
      this.destroy();
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: 'boilerplate',

  template: function template() {
    return 'A rapid static-site prototyping ' + this.data + '.';
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: [{ title: 'Gulp JS', text: 'As principal task runner, with browser sync.' }, { title: 'Webpack', text: 'With Babel, as ES6 transpiler.' }, { title: 'Sass', text: 'As the css pre-processor.' }, { title: 'No libraries', text: 'No frameworks, just vanilla JS.' }],

  template: function template() {
    return this.data.map(function (data) {
      return '<li class="carousel-item">\n        <div>\n          <h3>' + data.title + '</h3>\n          <p>' + data.text + '</p>\n        </div>\n      </li>';
    }).join('');
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (APP) {

  document.addEventListener('DOMContentLoaded', function () {
    APP.methods.render(APP);
    APP.methods.components(APP);
    console.log(APP.methods.breakpoint());
  });

  window.addEventListener('resize', function () {
    console.log(APP.methods.breakpoint());
  });
};

/***/ })
/******/ ]);