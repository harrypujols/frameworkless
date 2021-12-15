/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (( APP ) => {
  let elements = document.querySelectorAll('[data-js=render]')
  elements.forEach(( element ) => {
    Object.entries( APP.templates ).forEach(( entry ) => {
      let [key, value] = entry
      if ( key == element.dataset.template ) {
        element.innerHTML = value.template()
      }
    })
  })
});


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (( APP ) => {
  let components = document.querySelectorAll('[data-js]')
  components.forEach(( component ) => {
    Object.entries( APP.components ).forEach(( entry ) => {
      let [key, value] = entry
      if ( key == component.dataset.js ) {
        let directive = new value( component, APP )
        directive.init()
      }
    })
  })
});


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return   window.getComputedStyle( document.querySelector('body'), ':before')
          .getPropertyValue('content').replace(/\"/g, '')
});


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((callback, delay=66) => {
  var isResizing

  window.addEventListener('resize', ()=> {
    window.clearTimeout(isResizing);

    isResizing = setTimeout(()=> {
      callback();
    }, delay)
  }, false);
});


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((up, down) => {
  var position = window.pageYOffset
  || document.documentElement.scrollTop
  || document.body.scrollTop || 0
  var scroll

  window.addEventListener('scroll', ()=> {
    scroll = window.pageYOffset
    || document.documentElement.scrollTop
    || document.body.scrollTop || 0

    if ( scroll > position ) {
      if( typeof down === 'function' && down() ) {
        down();
      }

    } else {
      if( typeof up === 'function' && up() ) {
        up();
      }
    }
    position = scroll;
  })
});


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((onStop, onScroll=false, delay=66) => {
  var isScrolling

  window.addEventListener('scroll', ()=> {

    if( typeof onScroll === 'function' && onScroll() ) {
      onScroll();
    }

    window.clearTimeout(isScrolling)

    isScrolling = setTimeout(()=> {
      if( typeof onStop === 'function' && onStop() ) {
        onStop();
      }
    }, delay);

  }, false);
});


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor ( element ) {
    this.carousel = element
    this.next = this.carousel.querySelector('[data-btn=next]')
    this.prev = this.carousel.querySelector('[data-btn=prev]')
    this.items = this.carousel.querySelectorAll('.carousel-item')
    this.index = 0;
  }

  clickPrev ( ) {
    this.prev.addEventListener('click', ( event ) => {
      event.preventDefault()
      this.index--
      if ( this.index < 0  ) {
        this.index = 0
      }
      this.items[this.index].scrollIntoView({block: 'end',  behavior: 'smooth'})
    })
  }

  clickNext ( ) {
    this.next.addEventListener('click', ( event ) => {
      event.preventDefault()
      this.index++
      if ( this.index >= this.items.length ) {
        this.index = this.items.length -1
      }
      this.items[this.index].scrollIntoView({block: 'end',  behavior: 'smooth'})
    })
  }

  init ( ) {
    this.clickPrev()
    this.clickNext()
  }
});


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor ( element ) {
    this.element = element
    this.file = this.element.dataset.file
  }

  init ( ) {
    fetch( this.file )
    .then( response => response.text() )
    .then( text => {
      this.element.innerHTML = text
    })
    .catch(console.error.bind( console ))
  }
});


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor ( element ) {
    this.element = element
    this.window = this.element.dataset.window
    this.open = document.querySelectorAll(`[data-open=${ this.window }]`)
    this.close = this.element.querySelectorAll('[data-close]')
  }

  create() {
    this.open.forEach(( button ) => {
      button.addEventListener('click', ( event ) => {
        this.element.classList.add('is-open')
      })
    })
  }

  destroy() {
    this.close.forEach(( button ) => {
      button.addEventListener('click', ( event ) => {
        this.element.classList.remove('is-open')
      })
    })
  }

  init() {
    this.create()
    this.destroy()
  }
});


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
    constructor ( element, APP ) {
      this.element = element
      this.breakpoint = APP.methods.breakpoint
    }
  
    init ( ) {
      this.element.innerHTML = this.breakpoint()
      window.addEventListener('resize', () => {
        this.element.innerHTML = this.breakpoint()
      })
    }
  });

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data : 'boilerplate',

  template() {
    return `A rapid static-site prototyping ${ this.data }.`
  }
});


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data : [
    { title: 'NPM Scripts', text: 'As principal task runner.'},
    { title: 'Webpack', text: 'With Babel, as ES6 transpiler.'},
    { title: 'Sass', text: 'As the css pre-processor.'},
    { title: 'No libraries', text: 'No frameworks, just vanilla JS.'}
  ],

  template() {
    return this.data.map(data =>
      `<li class="carousel-item">
        <div>
          <h3>${ data.title }</h3>
          <p>${ data.text }</p>
        </div>
      </li>`
    ).join('')
  }
});


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (( APP ) => {

  document.addEventListener('DOMContentLoaded', () => {
    APP.methods.render( APP )
    APP.methods.components( APP )
  })
});


/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _methods_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _methods_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _methods_breakpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _methods_resizestop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _methods_scrolldirection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _methods_scrollstop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _components_include__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _components_size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _templates_hello__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _templates_slides__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
/* harmony import */ var _app_run__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13);
const FRAMEWORK = {};


















(( window, APP ) => {

  APP.templates = {
    hello: _templates_hello__WEBPACK_IMPORTED_MODULE_10__["default"],
    slides: _templates_slides__WEBPACK_IMPORTED_MODULE_11__["default"],
  }

  APP.methods = {
    render: _methods_render__WEBPACK_IMPORTED_MODULE_0__["default"],
    components: _methods_components__WEBPACK_IMPORTED_MODULE_1__["default"],
    breakpoint: _methods_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"],
    resizestop: _methods_resizestop__WEBPACK_IMPORTED_MODULE_3__["default"],
    scrolldirection: _methods_scrolldirection__WEBPACK_IMPORTED_MODULE_4__["default"],
    scrollstop: _methods_scrollstop__WEBPACK_IMPORTED_MODULE_5__["default"]
  }

  APP.components = {
    carousel: _components_carousel__WEBPACK_IMPORTED_MODULE_6__["default"],
    include: _components_include__WEBPACK_IMPORTED_MODULE_7__["default"],
    modal: _components_modal__WEBPACK_IMPORTED_MODULE_8__["default"],
    size: _components_size__WEBPACK_IMPORTED_MODULE_9__["default"]
  }

  APP.start = {
    run: _app_run__WEBPACK_IMPORTED_MODULE_12__["default"]
  }

  APP.start.run( APP );

})( window, FRAMEWORK, undefined )

})();

/******/ })()
;