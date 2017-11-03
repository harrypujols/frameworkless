export default {
  data : [
    { title: 'Very Vanilla', text: 'This is not a library, just a way to organize your js.'},
    { title: 'Template Literals', text: 'Why learn another templating language?'},
    { title: 'Components', text: 'As simple or as complex as you need them to be.'},
    { title: 'Methods', text: 'To organize your helper functions.'}
  ],

  template : function() {
    var items = []
      this.data.forEach(( data ) => {
        items.push(`<li class="carousel-item">
        <div>
          <h3>${ data.title }</h3>
          <p>${ data.text }</p>
        </div>
        </li>`)
      })
    return items.join('')
  }
}
