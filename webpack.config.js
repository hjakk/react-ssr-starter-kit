const webpack = require('webpack')
const path = require('path')
const chalk = require('chalk')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CompressionPlugin = require('compression-webpack-plugin')
const nodeExternals = require('webpack-node-externals')


const configure = (type) => (env, argv) => {
  const isServer = type === 'server'
  const isDev = argv.mode === 'development'

  console.log( `Building ${ type }:`, chalk.blue(argv.mode.toUpperCase()), '\n' )

  const config = {
    mode: argv.mode,
    target: isServer ? 'node' : 'web',
    devtool: isDev ? 'eval-source-map' : false,
    /**
     * Configure how performance hints are shown. For example if you have an asset that is over 250kb, webpack will emit a warning notifying you of this.
     * hints - Turns hints on/off. In addition, tells webpack to throw either an error or a warning when hints are found.
     */
    performance: {
      hints: false,
    },
    entry: isServer ? './src/server/index.js' : './src/client/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isServer ? 'index.js' : '[name].[hash].js',
      chunkFilename: isServer ? 'index.js' : '[name].[hash].js',
      publicPath: '/assets/',
      pathinfo: false,
    },
  }

  config.module = {
    rules: [
      { test: /\.tsx?$/i,
        include: [path.resolve(__dirname, 'src')],
        use: [
          'babel-loader',
          { loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: isDev,
            }
          }
        ],
      },
      { test: /\.jsx?$/i,
        include: [path.resolve(__dirname, 'src')],
        use: ['babel-loader'],
      },
      { test: /\.styl$/i,
        include: [path.resolve(__dirname, 'src')],
        use: (() => {
          const arr = []
          if (!isServer) {
            arr.push({
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '/assets/',
                hmr: isDev,
              }
            })
          }
          arr.push({
            loader: 'css-loader',
              options: {
                onlyLocals: isServer,
                localsConvention: 'camelCase',
                modules: {
                  localIdentName: isDev ? '[local]-[hash:base64:5]' : '[hash:base64:5]',
                }
              }
            },
            'postcss-loader',
            'stylus-loader'
          )
          return arr
        })()
      },
      { test: /\.css$/i,
        use: isServer ? 'ignore-loader'
          : [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
      },
      { test: /\.(jpg|png|gif)$/i,
        include: [path.resolve(__dirname, 'src')],
        use: [
          { loader: 'file-loader',
            options: {
              name: `[name].[ext]?[hash]`,
              outputPath: 'images',
              emitFile: !isServer,
            }
          }
        ]
      },
      { test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          { loader: 'svgo-loader',
            options: {
              pretty: true,
              externalConfig: 'svgo.config.yml',
            }
          }
        ]
      },
    ]
  }

  config.resolve = {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.css',
      '.styl',
    ]
  }

  if (isServer) {
    config.node = {
      __dirname: false,
      __filename: false,
    }
    config.externals = [nodeExternals()]
  }
  else {
    config.optimization = {
      usedExports: true,
      minimizer: [
        new TerserJSPlugin(),
        new OptimizeCSSAssetsPlugin(),
      ],
      splitChunks: {
        chunks: 'all'
      },
    }

    config.plugins = (() => {
      const arr = [
        new HtmlWebpackPlugin({
          template: require('html-webpack-template'),
          inject: false,
          appMountId: 'root',
          lang: 'ru',
          title: 'TITLE',
          meta: [
            { name: 'viewport',
              content: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no',
            }
          ],
          // links: [
          //   'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
          //   'https://fonts.googleapis.com/icon?family=Material+Icons',
          // ],
        }),
        new MiniCssExtractPlugin({
          filename: isDev ? `styles/[name].css` : `styles/[name].[hash].css`,
          chunkFilename: isDev ? `styles/[id].css` : `styles/[id].[hash].css`,
        }),
        // new webpack.DefinePlugin({
        //   'process.env.DOMAIN': JSON.stringify(process.env.DOMAIN)
        // })
      ]
      // if (!isDev) arr.push(new CompressionPlugin())
      return arr
    })()

    config.devServer = {
      // host: '0.0.0.0',
      contentBase: path.join(__dirname, 'dist'),
      publicPath: '/',
      port: 8020,
      hot: true,
      historyApiFallback: true,
      disableHostCheck: true,
      https: false,
      stats: {
        colors: true,
        assets: true,
        children: false,
        errors: true,
        errorDetails: true,
        entrypoints: false,
        modules: false,
        warnings: true,
      },
      overlay: {
        warnings: true,
        errors: true
      }
    }
  }

  return config
}

module.exports = [
  configure('client'),
  configure('server'),
]
