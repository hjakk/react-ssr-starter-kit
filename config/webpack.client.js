const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = (env, argv) => {
  const NODE_ENV = argv.mode
  const isDev = NODE_ENV === 'development'

  const ENV = {}
  if (env) {
    ENV['process.env'] = {}
    for (let varName in env) {
      ENV['process.env'][varName] = JSON.stringify(env[varName])
    }
  }

  NODE_ENV && console.log( 'Client:', '\x1b[36m', NODE_ENV.toUpperCase(), '\x1b[0m', '\n' )

  return {
    mode: isDev ? NODE_ENV : 'production',
    target: 'web',
    devtool: isDev ? 'eval-source-map' : false,
    entry: {
      client: ['./src/client/index.tsx'],
      // admin: ['./src/admin/index.ts']
    },
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name].[hash].js',
      publicPath: '/',
      // build speed optimization
      // turn off path info handler, check if this could produce any bugs
      pathinfo: false,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.pcss', '.styl']
    },
    optimization: {
      // build speed optimization, try this options if needed
      // removeAvailableModules: false,
      // removeEmptyChunks: false,
      usedExports: true,
      minimizer: [
        new TerserJSPlugin(),
        new OptimizeCSSAssetsPlugin(),
      ],
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        { test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            { loader: 'ts-loader',
              options: {
                // build speed optimization for development
                // turn off typescript type checking
                // try to use fork-ts-checker-webpack-plugin for separate checking if needed
                transpileOnly: true,
                experimentalWatchApi: isDev,
              }
            }
          ],
        },
        { test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        { test: /\.pug$/,
          use: ['pug-loader']
        },
        { test: /\.p?css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '/',
                hmr: isDev
              }
            },
            { loader: 'css-loader',
              options: {
                localsConvention: 'camelCase',
                modules: {
                  localIdentName: isDev? '[local]-[hash:base64:5]' : '[hash:base64:5]',
                },
              }
            },
            'postcss-loader',
          ],
        },
        { test: /\.styl$/,
          use: [
            { loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '/',
                hmr: isDev
              }
            },
            { loader: 'css-loader',
              options: {
                localsConvention: 'camelCase',
                modules: {
                  // localIdentName: isDev? '[local]-[hash:base64:5]' : '[hash:base64:5]',
                  localIdentName: '[local]-[hash:base64:5]',
                },
              }
            },
            'postcss-loader',
            'stylus-loader',
          ],
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
        { test: /\.(png|jpg)$/,
          use: [
            { loader: 'file-loader',
              options: {
                name: `[name].[ext]?[hash]`,
                outputPath: 'images',
              }
            }
          ],
        },
        { test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            { loader: 'file-loader',
              options: {
                name: `[name].[ext]?[hash]`,
                outputPath: 'fonts'
              }
            }
          ],
        }
      ]
    },
    plugins: (() => {
      const arr = [
        new HtmlWebpackPlugin({
          template: `./src/client/index.pug`,
          filename: `./index.html`,
          chunks: ['client'],
        }),
        // new HtmlWebpackPlugin({
        //   template: `./src/admin/index.pug`,
        //   filename: `./admin/index.html`,
        //   chunks: ['admin'],
        // }),
        new MiniCssExtractPlugin({
          filename: isDev ? `styles/[name].css` : `styles/[name].[hash].css`,
          chunkFilename: isDev ? `styles/[id].css` : `styles/[id].[hash].css`,
        }),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(ENV),
        // new BundleAnalyzerPlugin(),
      ]
      if (!isDev) arr.push(new CompressionPlugin())
      return arr
    })(),
    devServer: {
      host: '0.0.0.0',
      contentBase: './dist',
      port: 8000,
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
}
