export default class {
  constructor ( element, APP ) {
    this.element = element
    this.entries = APP.templates
    this.template = this.element.dataset.template
  }

  init ( ) {
    Object.entries( this.entries ).forEach(( entry ) => {
      let key = entry[0]
      let value = entry[1]
      if ( key == this.template ) {
        this.element.innerHTML = value.template()
      }
    })
  }
}
