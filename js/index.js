(( ) => {
  var APP = APP || {}

  APP.helpers = {

  }

  APP.components = {
    js : () => {
      let components = document.querySelectorAll('[data-js]')
      components.forEach(( component ) => {

        Object.entries( APP.methods ).forEach(( entry ) => {
          let key = entry[0]
          let value = entry[1]

          if ( key == component.dataset.js ) {
            let method = new value( component )
            method.init()
          }

        })
      })
    }
  }

  APP.methods = {
    carousel : class {
      constructor ( element ) {
        this.element = element
      }

      init ( ) {
        console.log ( this.element )
      }
    },

    svg : class {
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
    }
  }

  APP.components.js()

})( )
