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
        this.right
        this.left
        this.items
        this.index = 0
      }

      next ( ) {
        this.right.addEventListener('click', ( event ) => {
          event.preventDefault()
          this.index++

          if ( this.index >= this.items.length ) {
            this.index = this.items.length -1
          }

          console.log( this.index )

          this.items[this.index].scrollIntoView({block: 'end',  behaviour: 'smooth'})
        })
      }

      prev ( ) {
        this.left.addEventListener('click', ( event ) => {
          event.preventDefault()
          this.index--
          if ( this.index < 0  ) {
            this.index = 0
          }
          this.items[this.index].scrollIntoView({block: 'end',  behaviour: 'smooth'})
        })
      }

      init ( ) {
        this.carousel.forEach(( carousel ) => {
          this.right = carousel.querySelector('[data-btn=next]')
          this.left = carousel.querySelector('[data-btn=prev]')
          this.items = carousel.querySelectorAll('.carousel-item')
          this.next()
          this.prev()
        })
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
