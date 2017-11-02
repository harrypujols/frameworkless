(( ) => {
  const APP = APP || {}

  APP.data = {
    hello : 'world',
    fruits : ['banana', 'apple', 'orange', 'pear', 'pineapple']
  }

  APP.templates = {
    hello : `Hello, ${ APP.data.hello }.`
  }

  APP.methods = {
    components : () => {
      let components = document.querySelectorAll('[data-js]')
      components.forEach(( component ) => {
        Object.entries( APP.components ).forEach(( entry ) => {
          let key = entry[0]
          let value = entry[1]
          if ( key == component.dataset.js ) {
            let directive = new value( component )
            directive.init()
          }
        })
      })
    },

    templates : () => {
      let elements = document.querySelectorAll('[data-template]')
      elements.forEach((element) => {
        Object.entries( APP.templates ).forEach(( entry ) => {
          let key = entry[0]
          let value = entry[1]
          if ( key == element.dataset.template ) {
            element.innerHTML = value
          }
        })
      })
    }
  }

  APP.components = {
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

    include : class {
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

  APP.methods.components()
  APP.methods.templates()

})( )
