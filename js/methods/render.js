export default ( APP ) => {
  let elements = window.document.querySelectorAll('[data-js=render]')
  elements.forEach(( element ) => {

    Object.entries( APP.templates ).forEach(( entry ) => {
      let key = entry[0]
      let value = entry[1]
      if ( key == element.dataset.template ) {
        element.innerHTML = value.template()
      }
    })
  })
}
