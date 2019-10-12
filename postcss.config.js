const autoprefixer = require('autoprefixer')
const sorting = require('postcss-sorting')


module.exports = {
  plugins: [
    autoprefixer(),
    sorting({
      "properties-order": [
        "position",
        "display",
        "margin",
        "padding",
        "border",
        "background"
      ]
    }),
  ]
}