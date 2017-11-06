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

/* run
========================================================================== */
import run from './app/run'

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

  APP.start = {
    run : run
  }

  APP.start.run( APP )

})( window, FRAMEWORK, undefined )
