export default class {
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
      this.items[this.index].scrollIntoView({block: 'end',  behavior: 'smooth'})
    })
  }

  clickNext ( ) {
    this.next.addEventListener('click', ( event ) => {
      event.preventDefault()
      this.index++
      if ( this.index >= this.items.length ) {
        this.index = this.items.length -1
      }
      this.items[this.index].scrollIntoView({block: 'end',  behavior: 'smooth'})
    })
  }

  init ( ) {
    this.clickPrev()
    this.clickNext()
  }
}
