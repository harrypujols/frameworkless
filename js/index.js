(( ) => {
  var APP = APP || {}

  APP.component = {
    js : ( el ) => {
      return document.querySelectorAll('[data-js=' + el + ']')
    }
  }

  APP.methods = {
    carousel : class {
      constructor ( ) {
        this.carousel = APP.component.js( 'carousel' )
      }

      init ( ) {
        console.log ( this.carousel )
      }
    },

    svg : class {
      constructor ( ) {
        this.element = document.querySelectorAll('[data-svg]')
      }

      importer ( ) {
        this.element.forEach(( element ) => {
          this.fetcher ( element, element.dataset.svg )
        })
      }

      fetcher ( element, file ) {
        fetch( file )
        .then( response => response.text() )
        .then( text => {
          element.innerHTML = text
        })
        .catch(console.error.bind( console ))
      }

      init ( ) {
        this.importer()
      }
    }
  }

  Object.values( APP.methods ).forEach(( method ) => {
    let execute = new method
    execute.init()
  })

})( )
