export default () => {
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
}
