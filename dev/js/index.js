const FRAMEWORK = FRAMEWORK || {}

import render from './methods/render'
import components from './methods/components'
import breakpoint from './methods/breakpoint'
import resizestop from './methods/resizestop'
import scrolldirection from './methods/scrolldirection'
import scrollstop from './methods/scrollstop'

import carousel from './components/carousel'
import include from './components/include'
import modal from './components/modal'
import size from './components/size'

import hello from './templates/hello'
import slides from './templates/slides'

import run from './app/run'

(( window, APP ) => {

  APP.templates = {
    hello,
    slides,
  }

  APP.methods = {
    render,
    components,
    breakpoint,
    resizestop,
    scrolldirection,
    scrollstop
  }

  APP.components = {
    carousel,
    include,
    modal,
    size
  }

  APP.start = {
    run
  }

  APP.start.run( APP )

})( window, FRAMEWORK, undefined )
