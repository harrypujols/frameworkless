(( ) => {
  var APP = APP || {}

  APP.helpers = {

  }

  APP.components = {
    js : () => {
      let components = document.querySelectorAll('[data-js]')
      components.forEach((component) => {

        Object.entries( APP.methods ).forEach(( entry ) => {
          let key = entry[0]
          let value = entry[1]

          if ( key == component.dataset.js ) {
            let method = new value
            console.log ( method )
          }

        })
      })
    }
  }

  APP.methods = {
    carousel : class {

    },

    svg : class {

    }
  }

  // Object.values( APP.methods ).forEach(( method ) => {
  //   let execute = new method
  //   execute.init()
  // })

  APP.components.js()

})( )
