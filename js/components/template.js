export default class {
  constructor ( element, APP ) {
    this.entries = APP.templates
    this.element = element
    this.template = this.element.dataset.template
    this.repeat = this.element.dataset.repeat
  }

  repeat ( data ) {
    var items = []
    APP.data.fruits.forEach(( fruit ) => {
      items.push( data )
    })
    return items.join('')
  }

  retrieve ( ) {
    Object.entries( this.entries ).forEach(( entry ) => {
      let key = entry[0]
      let value = entry[1]
      if ( key == this.template ) {
        // element.innerHTML = value()
      }
    })
  }

  init ( ) {

  }
}
