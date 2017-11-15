export default class {
  constructor ( element ) {
    this.element = element
    this.window = this.element.dataset.window
    this.open = document.querySelectorAll(`[data-open=${ this.window }]`)
    this.close = this.element.querySelectorAll('[data-close]')
  }

  create() {
    this.open.forEach(( button ) => {
      button.addEventListener('click', ( event ) => {
        this.element.classList.add('is-open')
      })
    })
  }

  destroy() {
    this.close.forEach(( button ) => {
      button.addEventListener('click', ( event ) => {
        this.element.classList.remove('is-open')
      })
    })
  }

  init() {
    this.create()
    this.destroy()
  }
}
