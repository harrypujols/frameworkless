const FRAMEWORK = FRAMEWORK || {}

/* methods
========================================================================== */
import components from './methods/components'

/* components
========================================================================== */
import carousel from './components/carousel'
import include from './components/include'
import render from './components/render'

/* templates
========================================================================== */
import hello from './templates/hello'
import fruits from './templates/fruits'

(( window, APP ) => {

  APP.templates = {
    hello : hello,
    fruits : fruits
  }

  APP.methods = {
    components : components,
  }

  APP.components = {
    carousel : carousel,
    include : include,
    render: render
  }

  document.addEventListener('DOMContentLoaded', () => {
    APP.methods.components( APP )
  })

})( window, FRAMEWORK, undefined )
