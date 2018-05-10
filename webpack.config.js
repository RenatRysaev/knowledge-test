const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = resolve(__dirname, 'src');


const config = {
  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/static/index.html',
      filename: 'index.html',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      store: resolve(src, 'store'),
      components: resolve(src, 'components'),
      containers: resolve(src, 'containers'),
      hoc: resolve(src, 'hoc'),
      utils: resolve(src, 'utils'),
      api: resolve(src, 'api'),
      config: resolve(src, 'config'),
    },
  },
};

module.exports = config;
