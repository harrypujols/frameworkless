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
import modal from './components/modal'


/* templates
========================================================================== */
import hello from './templates/hello'
import slides from './templates/slides'

/* run
========================================================================== */
import run from './app/run'

(( window, APP ) => {

  APP.templates = {
    hello,
    slides
  }
  
  APP.methods = {
    render,
    components,
    breakpoint
  }

  APP.components = {
    carousel,
    include,
    modal
  }

  APP.start = {
    run
  }

  APP.start.run( APP )

})( window, FRAMEWORK, undefined )
