export default ( APP ) => {
  let elements = document.querySelectorAll('[data-js=render]')
  console.log( elements )
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
