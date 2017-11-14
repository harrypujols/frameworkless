export default class {
  constructor ( element ) {
    this.element = element
    this.window = this.element.dataset.window
    this.trigger = document.querySelectorAll(`[data-trigger=${ this.window }]`)
  }

  init ( ) {
    console.log( this.trigger )
  }
}
