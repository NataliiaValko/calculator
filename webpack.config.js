const path = require('path');
const miniCss = require('mini-css-extract-plugin');///
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');

const loadModeConfig = env => require(`./build-utils/${env.mode}.config`)(env);

module.exports = env =>
  merge(
    {
      mode: env.mode,
      context: path.resolve(__dirname, 'src'),///
      entry: './index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
      },
      module: {
        rules: [
          {
         test: /\.(s*)css$/,
         use: [ miniCss.loader, 'css-loader', 'sass-loader',]
      },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          // {
          //   test: /\.(gif|png|jpe?g|svg)$/i,
          //   use: [
          //     {
          //       loader: 'url-loader',
          //       options: {
          //         name: '[path]/[name].[ext]',
          //         limit: 5000,
          //       },
          //     },
          //   ],
          // },
          {
            test: /\.html$/,
            use: 'html-loader',
          },
          {
            test: /\.hbs$/,
            use: 'handlebars-loader',
          },
        ],
      },
      plugins: [new CleanWebpackPlugin(), new WebpackBar(), new miniCss({filename: 'style.css',}),],
    },
    loadModeConfig(env),
  );
