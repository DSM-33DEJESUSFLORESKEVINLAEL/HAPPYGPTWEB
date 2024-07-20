const webpack = require('webpack');

module.exports = {
  // ... otras configuraciones
  resolve: {
    fallback: {
      "fs": false, // fs no es compatible con el navegador, así que lo configuramos como false
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "pg-hstore": false // Configuramos pg-hstore como false si no es necesario en el navegador
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      // otras reglas
    ]
  }
};
