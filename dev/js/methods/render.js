export default ( APP ) => {
  let elements = document.querySelectorAll('[data-js=render]')
  elements.forEach(( element ) => {
    Object.entries( APP.templates ).forEach(( entry ) => {
      let [key, value] = entry
      if ( key == element.dataset.template ) {
        element.innerHTML = value.template()
      }
    })
  })
}
