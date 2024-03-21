const path = require('path');


// result bundle should be wrtite in dist/main.js
module.exports = {
  mode: 'development', // use 'development
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
