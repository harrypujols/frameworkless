export default {
  data : [
    { title: 'Gulp JS', text: 'As principal task runner, with browser sync.'},
    { title: 'Webpack', text: 'With Babel, as ES6 transpiler.'},
    { title: 'Sass', text: 'As the css pre-processor.'},
    { title: 'No libraries', text: 'No frameworks, just vanilla JS.'}
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
