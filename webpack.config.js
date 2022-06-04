const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'SHELL',
      filename: 'remoteEntry.js',
      exposes: {
        './ShellContext': './src/contexts/ShellContext',
      },
      remotes: {
        POC: 'POC@http://localhost:3002/remoteEntry.js',
        PORTFOLIO: 'PORTFOLIO@http://localhost:3003/remoteEntry.js',
        PhotoLibrary: [
          'PhotoLibrary@http://localhost:3004/remoteEntry.js',
          'PhotoLibrary@https://art-ruiz-photo-library.web.app/remoteEntry.js',
        ],
      },
      shared: [
        {
          ...deps,
          react: { requiredVersion: deps.react, singleton: true },
          'react-dom': {
            requiredVersion: deps['react-dom'],
            singleton: true,
          },
        },
        './src/contexts/ShellContext',
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
};
