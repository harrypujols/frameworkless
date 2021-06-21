const path = require('path');

module.exports = {
  mode: "none",
  entry: "./dev/js/index.js",
  output: {
    path: path.resolve(__dirname, './build/js'),
    filename: 'scripts.js',
  }
}
