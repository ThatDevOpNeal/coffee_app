import path from 'path';

export default () => ({  
  entry: [
    path.join(__dirname, 'src/index.jsx'),
  ],
  output: {
    path: path.join(__dirname, 'src/'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devtool: 'source-map'
});
