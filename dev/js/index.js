const FRAMEWORK = FRAMEWORK || {}

import render from './methods/render'
import components from './methods/components'
import breakpoint from './methods/breakpoint'

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
