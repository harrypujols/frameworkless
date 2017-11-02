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
        this.carousel = element
        this.next = this.carousel.querySelector('[data-btn=next]')
        this.prev = this.carousel.querySelector('[data-btn=prev]')
        this.items = this.carousel.querySelectorAll('.carousel-item')
        this.index = 0;
      }

      clickPrev ( ) {
        this.prev.addEventListener('click', ( event ) => {
          event.preventDefault()
          this.index--
          if ( this.index < 0  ) {
            this.index = 0
          }
          this.items[this.index].scrollIntoView({block: 'end',  behaviour: 'smooth'})
        })
      }

      clickNext ( ) {
        this.next.addEventListener('click', ( event ) => {
          event.preventDefault()
          this.index++
          if ( this.index >= this.items.length ) {
            this.index = this.items.length -1
          }
          this.items[this.index].scrollIntoView({block: 'end',  behaviour: 'smooth'})
        })
      }

      init ( ) {
        this.clickPrev()
        this.clickNext()
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
