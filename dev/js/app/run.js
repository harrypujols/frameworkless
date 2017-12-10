export default ( APP ) => {

  document.addEventListener('DOMContentLoaded', () => {
    APP.methods.render( APP )
    APP.methods.components( APP )
  })
}
