export default {
  data : ['banana', 'apple', 'orange', 'pear', 'pineapple'],

  template : function() {
    var items = []
      this.data.forEach(( fruit ) => {
        items.push(`<li> ${ fruit } </li>`)
      })
    return items.join('')
  }
}
