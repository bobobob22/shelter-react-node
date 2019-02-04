const webpack = require('webpack');
const autoprefixer = require('autoprefixer');


const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
      modules: true,
      sourceMap: true,
      localIdentName: '[local]__[hash:base64:5]',
      minimize: true
    }
  }

  const CSSLoader = {
    loader: 'css-loader',
    options: {
      modules: true,

    }
  }

  const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      sourceMap: true,
      plugins: () => [
        autoprefixer({
          browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
        })
      ]
    }
  }


module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: ['style-loader', CSSLoader, postCSSLoader, 'sass-loader']
              },
              {
                test: /\.module\.scss$/,
                use: [
                  'style-loader',
                  CSSModuleLoader,
                  postCSSLoader,
                  'sass-loader',
                ]
              },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};
