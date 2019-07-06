const path = require('path')
const nodeExternals = require('webpack-node-externals')


module.exports = (env, argv) => {
  const NODE_ENV = argv.mode
  const isDev = NODE_ENV === 'development'

  NODE_ENV && console.log( 'Server:', '\x1b[36m', NODE_ENV.toUpperCase(), '\x1b[0m', '\n' )

  return {
    mode: NODE_ENV,
    target: 'node',
    entry: path.resolve(__dirname, '..', 'src/server/index.js'),
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: 'index.js',
      publicPath: '/',
      pathinfo: false,
    },
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.pcss']
    },
    module: {
      rules: [
        { test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            { loader: 'ts-loader',
              options: {
                transpileOnly: isDev,
                experimentalWatchApi: isDev,
              }
            }
          ],
        },
        { test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        { test: /\.svg$|\.png$/,
          use: ['ignore-loader'],
        },
        { test: /\.p?css$/,
          use: [
            // { loader: MiniCssExtractPlugin.loader,
            //   options: {
            //     publicPath: '/',
            //     hmr: isDev
            //   }
            // },
            { loader: 'css-loader',
              options: {
                onlyLocals: true,
                localsConvention: 'camelCase',
                modules: {
                  localIdentName: isDev? '[local]-[hash:base64:5]' : '[hash:base64:5]',
                },
              }
            },
            'postcss-loader',
          ],
        },
      ]
    }
  }
}