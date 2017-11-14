export default ( APP ) => {
  
  document.addEventListener('DOMContentLoaded', () => {
    APP.methods.render( APP )
    APP.methods.components( APP )
    console.log ( APP.methods.breakpoint() )
  })

  window.addEventListener('resize', () => {
    console.log ( APP.methods.breakpoint() )
  })
}
