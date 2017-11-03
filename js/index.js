const FRAMEWORK = FRAMEWORK || {}

/* methods
========================================================================== */
import render from './methods/render'
import components from './methods/components'
import breakpoint from './methods/breakpoint'

/* components
========================================================================== */
import carousel from './components/carousel'
import include from './components/include'


/* templates
========================================================================== */
import hello from './templates/hello'
import slides from './templates/slides'

(( window, APP ) => {

  APP.templates = {
    hello : hello,
    slides : slides,
  }

  APP.methods = {
    render: render,
    components : components,
    breakpoint : breakpoint
  }

  APP.components = {
    carousel : carousel,
    include : include
  }

  APP.methods.render( APP )

  document.addEventListener('DOMContentLoaded', () => {
    APP.methods.components( APP )
    console.log ( APP.methods.breakpoint() )
  })

  window.addEventListener('resize', () => {
    console.log ( APP.methods.breakpoint() )
  })

})( window, FRAMEWORK, undefined )
