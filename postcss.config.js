const postcss = require('postcss')
const postcssCalc = require('postcss-calc')
// const doiuse = require('doiuse')
const postcssImport = require('postcss-import')
const nested = require('postcss-nested')
const postcssVars = require('postcss-advanced-variables')
const postcssFunctions = require('postcss-functions')
const postcssMixins = require('postcss-mixins')
const postcssColor = require('postcss-color-function')
const postcssSprites = require('postcss-sprites')
const cssnano = require('cssnano')
const variables = require('./src/client/assets/styles/_variables')
const functions = require('./src/client/assets/styles/_functions')

const updateRule = require('postcss-sprites/lib/core').updateRule

module.exports = {
  modules: true,
  plugins: [
    // easyImport,
    // mixins,
    cssnano({ preset: 'default' }),
    postcssSprites({
      spritePath: './src/client/assets/sprites/',
      hooks: {
        onUpdateRule: function(rule, token, image) {
          updateRule(rule, token, image);
          ['width', 'height'].forEach(function(prop) {
            let value = image.coords[prop]
            if (image.retina) {
              value /= image.ratio
            }
            rule.insertAfter(rule.last, postcss.decl({ prop, value: value + 'px' }))
          })
        }
      }
    }),
    postcssVars({ variables, silent: true }),
    postcssCalc({ mediaQueries: true }),
    postcssFunctions({ functions }),
    nested(),
    postcssMixins(),
    postcssColor(),
    postcssImport(),
    // postcssEach(),
    // doiuse({
    //   browsers: ['> 1%']
    // })
  ]
}
