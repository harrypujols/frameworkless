const FRAMEWORK = FRAMEWORK || {};

import components from './methods/components'
import templates from './methods/templates'

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
    components : components,
    templates : templates
  }

  APP.components = {
    carousel : carousel,
    include : include
  }

  document.addEventListener('DOMContentLoaded', (event) => {
    APP.methods.components( APP )
    APP.methods.templates( APP )
  })

})( window, FRAMEWORK, undefined )
