export default ( APP ) => {
  APP.methods.render( APP )

  document.addEventListener('DOMContentLoaded', () => {
    APP.methods.components( APP )
    console.log ( APP.methods.breakpoint() )
  })

  window.addEventListener('resize', () => {
    console.log ( APP.methods.breakpoint() )
  })
}
