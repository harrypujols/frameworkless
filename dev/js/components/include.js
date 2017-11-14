export default class {
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
