const FRAMEWORK = FRAMEWORK || {};

import carousel from './components/carousel'
import include from './components/include'

(( window, APP ) => {

  APP.data = {
    hello : 'world',
    fruits : ['banana', 'apple', 'orange', 'pear', 'pineapple']
  }

  APP.templates = {
    hello : () => {
      return `Hello, ${ APP.data.hello }.`
    },

    fruits : () => {
      var items = []
      APP.data.fruits.forEach(( fruit ) => {
        items.push(`<li> ${ fruit } </li>`)
      })
      return items.join('')
    }
  }

  APP.methods = {
    components : () => {
      let components = document.querySelectorAll('[data-js]')
      components.forEach(( component ) => {
        Object.entries( APP.components ).forEach(( entry ) => {
          let key = entry[0]
          let value = entry[1]
          if ( key == component.dataset.js ) {
            let directive = new value( component, APP )
            directive.init()
          }
        })
      })
    },

    templates : () => {
      let elements = document.querySelectorAll('[data-template]')
      elements.forEach((element) => {
        Object.entries( APP.templates ).forEach(( entry ) => {
          let key = entry[0]
          let value = entry[1]
          if ( key == element.dataset.template ) {
            element.innerHTML = value()
          }
        })
      })
    }
  }

  APP.components = {
    carousel : carousel,
    include : include
  }

  document.addEventListener("DOMContentLoaded", (event) => {
    APP.methods.components()
    APP.methods.templates()
  })

})( window, FRAMEWORK, undefined )
